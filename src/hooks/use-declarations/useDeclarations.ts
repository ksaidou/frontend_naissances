
import { ApplicationContext } from "@/context/ApplicationContextProvider";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { partialUpdate, search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useRef, useState } from "react";

function useDeclarations (){

  const queryClient = useQueryClient();

  const {updateTitle, state :{token}} = useContext(GlobalApplicationContext);

  const {data} = useQuery({ 
    queryKey: ['declarations'], 
    queryFn: () => search({path: "declarations", token}),
    retry:2
  });
  /*console.log("----------------");
  console.log(data,error);
  console.log("----------------"); */
  const partialUpdateMutation = useMutation({
    mutationFn: ({path,data}:any) => partialUpdate({path, token, body:data}),
     onSettled: () =>{
      queryClient.invalidateQueries({queryKey:  ['declarations']})
    }
  });
  
  const {state,updateDeclarations} = useContext(ApplicationContext); 
  //console.log(state);
  const filterRef = useRef<any>("");  
  const[statusOrder, setStatusOrder] = useState(1);
  const [declarations,setDeclaration]= useState<Declaration[]>(state.declarations);
  const [filteredDeclarations,setFilteredDeclaration]= useState<Declaration[]>([]);

 
  /*const updateStatusWithoutContext = (data:{id:string, status:string})=>{
    const declarationToUpdate = declarations.filter(({id}:Declaration) => id === data.id)[0];
    const declarationUpdated = {...declarationToUpdate,status:data.status};
    const declarationsToKeep = declarations.filter(({id}:Declaration) => id !== data.id);
    setDeclaration([...declarationsToKeep,declarationUpdated]);
    console.log(declarationToUpdate);
  };*/

  //const updateStatus = (data:{id:string, status:string})=> updateDeclarationStatus(data);
  const updateStatus = (data:{id:string, status:string})=> partialUpdateMutation.mutate({path:`declarations/${data.id}/status`,data});
  console.log(updateStatus);

  const filterDeclarations = ()=>{
    const filter = filterRef.current.value || "";
   
    if((<String>filter).length >= 3)
    {
      //console.log(filter.lenght);
      const filteredDeclarations = declarations.filter((item)=>{
        const {child:{firstName, lastName}} = item;
        return (
          firstName.toLowerCase().indexOf(filter.toLowerCase()) > -1||
          lastName.toLowerCase().includes(filter.toLowerCase())
        );

      });
      setFilteredDeclaration([...filteredDeclarations]);

    }
    else{
      setFilteredDeclaration([...declarations]);
    }
  };


  const sortByStatus = ()=>{
    const sortedDeclarations = declarations.sort((itemOne:Declaration, itemTwo:Declaration)=>{
    const {status:itemOneStatus} = itemOne;
    const {status:itemTwoStatus} = itemTwo;
    let result = 0;

    if(itemOneStatus === itemTwoStatus){
      result = 0;
    }else if (itemOneStatus > itemTwoStatus){
      result = 1;
    }else{
      result = -1;
    }
    result = result * statusOrder;
    setStatusOrder(statusOrder * -1) /* inverser l'ordre de tri */
    return result;
  });
    setDeclaration([...sortedDeclarations]);

  }

  /*const getDeclarations = async ()=>{
    const data = await search("declarations");
    setDeclaration(data);
    updateDeclarations(data);
  }*/
  useEffect(()=>{
    updateTitle({"title" :"Déclaration"});
    setDeclaration(data);
    updateDeclarations(data);
  },[data]);

  return {
    state,
    declarations,
    sortByStatus,
    filterRef,
    filterDeclarations,
    filteredDeclarations,
    updateStatus};
}
export{useDeclarations};