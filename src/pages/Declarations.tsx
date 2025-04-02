import { DECLARATIONS } from "../utils/declarations";
import { formatDate } from "../utils/date";
import { getStatusColors, getStatusLabel } from "../utils/actions";

function Declarations() {
  return (
    <div className="bg-white shadow-md rounded-md">
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
        DECLARATIONS.map((item,index)=>
        (
          <article 
          key={item.id} 
          className={`grid grid-cols-12 border-t border-gray-300 col-span-2 items-center 
          ${index % 2 === 0 ? "bg-gray-100" : null}`}>
            <span className="pl-2">{formatDate(item.registred)}</span>
            <span className="col-span-2 flex flex-col pl-5">
              <span>{item.child.firstname}</span>
              <span className="uppercase">{item.child.lastname}</span>
            </span>
            <span>{formatDate(item.child.birthdate)}</span>
            <span>
              <span className="p-2">{item.compagny.name}</span>
            </span>
            <span className="col-span-2 flex flex-col pl-6">
              <span >{item.firstParent.firstname}</span>
              <span className="uppercase">{item.firstParent.lastname}</span>
            </span>
            <span className="col-span-2 flex flex-col pl-2">
              <span>{item.secondParent.firstname}</span>
              <span className="uppercase">{item.secondParent.lastname}</span>
            </span>
            <span className={`${getStatusColors(item.status)}`}>{getStatusLabel(item.status)}</span>
            <span className="col-span-2 pl-6">ACTION</span>
          </article>
        ))
      }
    </div>
  )
}

export default Declarations