
import DeclarationsItems from "@/components/declarations/DeclarationsItems";
import { useDeclarations } from "@/hooks";
import { Link } from "react-router-dom";

function Declarations() {
 const {declarations,
  sortByStatus,
  filterRef,
  filterDeclarations,
  filteredDeclarations
  }   = useDeclarations();
  return (
    <>
      <div className="bg-white shadow-md rounded-md flex justify-between items-center h-12 mb-3 py-2">
        <input type="text" name="recherche" 
        id="rechercher" 
        placeholder="rechercher par nom" 
        className="bg-gray-200 px-1 py-2 mx-2 rounded-md w-96"
        ref={filterRef}
        onKeyUp={filterDeclarations}
        />
        <Link to={"private/ajoutDemande"} className="bg-green-600 text-white px-2 py-2 mx-2 rounded-md"> nouvelle demande </Link>
    </div>
      <div className="bg-white shadow-md rounded-md">
        <DeclarationsItems declarations ={filteredDeclarations.length ? filteredDeclarations : declarations}
        sortByStatus ={sortByStatus}/>     
      </div>
    </>
  )
}

export default Declarations