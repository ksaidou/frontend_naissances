import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations (){
  const[statusOrder, setStatusOrder] = useState(1);
  const [declarations,setDeclaration]= useState<Declaration[]>([]);

  const sortByStatus = ()=>{
    const sortedDeclarations = declarations.sort((itemOne:Declaration, itemTwo:Declaration)=>{
    const {status:itemOneStatus} = itemOne;
    const {status:itemTwoStatus} = itemTwo;
    let result = 0;
    /*if(statusOrder === 1){
      setStatusOrder(-1);
    }else{
      setStatusOrder(1);
    }*/
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

  return {declarations,sortByStatus};
}
export{useDeclarations};