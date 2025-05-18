import { DEMANDES } from "@/utils/demandes";
import { formatDate } from "@/utils";
import { getStatusColors, getStatusLabel } from "../utils";

function Demandes() {
   
  return (
<div className="bg-white shadow-md rounded-md">
    <article className="grid grid-cols-12 items-center">
        <span className="pl-2">Date</span>
        <span className="col-span-5 pl-4">Demandeur :
            <span className="p-1">Nom</span>
            <span className="p-1">Prenom</span>
            <span>Contact</span>
        </span>
        <span className="col-span-4 p-1"> Propriétaire :
            <span className="p-1">Civilité</span>
            <span className="p-1">Nom</span>
            <span className="p-1">Prenom</span>
            <span>Date Nais.</span>
        </span>
        <span>Status</span>
        <span>Action</span>
    </article>
    
    {
        DEMANDES.map((item,index) =>(
        <article key={item.id} className={`grid grid-cols-12 items-center pl-2 ${index % 2 === 0? "bg-gray-100":null}`}>
            <span>{formatDate(item.registred)}</span>
            <span className="col-span-5 pl-4">
                <span className="p-1">{item.demandeur.firstname}</span>
                <span className="p-1 uppercase">{item.demandeur.lastname}</span>
                <span>{item.demandeur.phone} {item.demandeur.address}</span>
            </span>
            <span className="col-span-4">
                <span className="p-1">{item.owner.gender}</span>
                <span className="p-1">{item.owner.firstname}</span>
                <span className="p-1 uppercase">{item.owner.lastname}</span>
                <span>{formatDate(item.owner.birthdate)}</span>
            </span>
            <span className={getStatusColors(item.status)}>{getStatusLabel(item.status)}</span>
            <span>Action</span>
        </article>
        ))
    };
</div>
  )
}
export default Demandes;