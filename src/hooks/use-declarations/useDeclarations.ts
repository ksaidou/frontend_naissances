import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useEffect, useRef, useState } from "react";

function useDeclarations (){
  const filterRef = useRef<any>("");
  const[statusOrder, setStatusOrder] = useState(1);
  const [declarations,setDeclaration]= useState<Declaration[]>([]);
  const [filteredDeclarations,setFilteredDeclaration]= useState<Declaration[]>([]);

  const updateStatus = (data:{id:string, status:string})=>{
    const declarationToUpdate = declarations.filter(({id}:Declaration) => id === data.id)[0];
    const declarationUpdated = {...declarationToUpdate,status:data.status};
    const declarationsToKeep = declarations.filter(({id}:Declaration) => id !== data.id);
    setDeclaration([...declarationsToKeep,declarationUpdated]);
    /*console.log(declarationToUpdate);*/
  };

  const filterDeclarations = ()=>{
    const filter = filterRef.current.value || "";
   
    if((<String>filter).length >= 3)
    {
      //console.log(filter.lenght);
      const filteredDeclarations = declarations.filter((item)=>{
        const {child:{firstname, lastname}} = item;
        return (
          firstname.toLowerCase().indexOf(filter.toLowerCase()) > -1||
          lastname.toLowerCase().includes(filter.toLowerCase())
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

  const getDeclarations = async ()=>{
    const data = await search("declarations");
    setDeclaration(data);
  }
  useEffect(()=>{
    getDeclarations();
  },[]);

  return {declarations,sortByStatus,filterRef,filterDeclarations,filteredDeclarations,updateStatus};
}
export{useDeclarations};