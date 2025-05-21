import { formatDate } from "@/utils";
import { getStatusColors, getStatusLabel } from "../utils";
import { UseDemandes } from "@/hooks/use-demandes/UseDemandes";
import { Demande } from "@/types/Demande";
import { BiSort } from "react-icons/bi";


function Demandes() {
const {demandes,sortByStatus} = UseDemandes();

  return (
<div className="bg-white shadow-md rounded-md">
    <article className="grid grid-cols-12 items-center">
        <span className="pl-1 col-span-2">Date</span>
        <span className="p-1">P. Nom</span>
        <span className="p-1">P. Prenom</span>
        <span className="p-1">Civilité</span>
        <span className="p-1">Nom</span>
        <span className="p-1 ">Prenom</span>
        <span className="p-1 col-span-2">Date Nais.</span>
        <button type="button" className="pl-10 col-span-2 flex items-center" onClick={()=>sortByStatus()}>
            Status
            <BiSort />
        </button>
        <span className="p-1">Action</span>
    </article>
    
    {
        demandes.map((item:Demande,index:number) =>(
        <article key={item.id} className={`grid grid-cols-12 items-center pl-2 ${index % 2 === 0? "bg-gray-100":null}`}>
            <span className="pl-1 col-span-2">{formatDate(item.registred)}</span>
            <span className="p-1">{item.demandeur.firstname}</span>
            <span className="p-1 uppercase">{item.demandeur.lastname}</span>
            <span className="p-1">{item.owner.gender}</span>
            <span className="p-1">{item.owner.firstname}</span>
            <span className="p-1 uppercase">{item.owner.lastname}</span>
            <span className="p-1 col-span-2">{item.owner.birthdate ? formatDate(item.owner.birthdate): null}</span>
            <span className={`col-span-2 ${getStatusColors(item.status)}`}>{getStatusLabel(item.status)}</span>
            <span className="p-1">Action</span>
        </article>
        ))
    };
</div>
  )
}
export default Demandes;