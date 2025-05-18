import { Declaration } from '@/types/Declaration';
import DeclarationItem from './DeclarationItem';

function DeclarationsItems(props: any) {
   const {declarations} = props;
  return (
    <>
         <article className="grid grid-cols-12 items-center">
            <span className="pl-2">Date</span>
            <span className="col-span-2 pl-4">Enfant</span>
            <span>Date nais.</span> 
            <span className="pl-4">Hopital</span>
            <span className="col-span-2 pl-6">Parent 1 </span>
            <span className="col-span-2 pl-1"> Parent 2 </span>
            <span>Status</span>
            <span className="col-span-2 pl-6">ACTION</span>
        </article>
      {
        declarations.map((item:Declaration, index:number)=>
        (
          <DeclarationItem declaration={item} index={index}/>
        ))}
    </>
  );
}

export default DeclarationsItems