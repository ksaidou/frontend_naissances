
import { ApplicationContext } from "@/context/ApplicationContextProvider";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";
import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useRef, useState } from "react";

function useDeclarations (){
  const {updateTitle, state :{token}} = useContext(GlobalApplicationContext);
  const {data,error} = useQuery({ 
    queryKey: ['declarations'], 
    queryFn: () => search({path: "declarations", token}),
    retry:2
  });
  console.log("----------------");
  console.log(data,error);
  console.log("----------------");

  
  const {state,updateDeclarations,updateDeclarationStatus} = useContext(ApplicationContext); 
  //console.log(state);
  const filterRef = useRef<any>("");  
  const[statusOrder, setStatusOrder] = useState(1);
  const [declarations,setDeclaration]= useState<Declaration[]>(state.declarations);
  const [filteredDeclarations,setFilteredDeclaration]= useState<Declaration[]>([]);

 
  const updateStatusWithoutContext = (data:{id:string, status:string})=>{
    const declarationToUpdate = declarations.filter(({id}:Declaration) => id === data.id)[0];
    const declarationUpdated = {...declarationToUpdate,status:data.status};
    const declarationsToKeep = declarations.filter(({id}:Declaration) => id !== data.id);
    setDeclaration([...declarationsToKeep,declarationUpdated]);
    /*console.log(declarationToUpdate);*/
  };

  const updateStatus = (data:{id:string, status:string})=> updateDeclarationStatus(data);

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
    //console.log(state);
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