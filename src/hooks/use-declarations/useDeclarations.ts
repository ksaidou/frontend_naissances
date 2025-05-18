import { search } from "@/services";
import { Declaration } from "@/types/Declaration";
import { useEffect, useState } from "react";

function useDeclarations (){
const [declarations,setDeclaration]= useState<Declaration[]>([]);
  const getDeclarations = async ()=>{
    const data = await search("declarations");
    setDeclaration(data);
  }
  useEffect(()=>{
    getDeclarations();
  },[]);

  return {declarations};
}
export{useDeclarations};