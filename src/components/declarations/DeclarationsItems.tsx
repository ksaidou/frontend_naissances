import { Declaration } from '@/types/Declaration';
import DeclarationItem from './DeclarationItem';
import { BiSort } from "react-icons/bi";

type Props ={
  declarations: Declaration[];
  updateStatus : (data:any)=>void;
  sortByStatus :()=>void;
};

function DeclarationsItems(props: Props) {
   const {declarations, sortByStatus, updateStatus} = props;
   //console.log(declarations);
  return (
    <>
         <article className="grid grid-cols-12 items-center">
            <span className="pl-2">Date</span>
            <span className="col-span-2 pl-4">Enfant</span>
            <span>Date nais.</span> 
            <span className="pl-4">Hopital</span>
            <span className="col-span-2 pl-6">Parent 1 </span>
            <span className="col-span-2 pl-1"> Parent 2 </span>
            <button type="button" onClick={()=>sortByStatus()} className="p-2 text-center flex justify-between items-center">
              Status
              <BiSort />
            </button>
            <span className="col-span-2 pl-6">ACTION</span>
        </article>
      {
        <>
          {
            declarations? 
            declarations.map((item:Declaration, index:number)=>
            (
              <DeclarationItem declaration={item} index={index} key={item.id} action={updateStatus}/>
            ))
            :
            null
          }
        </>
      }
    </>
  );
}

export default DeclarationsItems