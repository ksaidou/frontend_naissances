import { Link } from "react-router-dom"
import { NAV_LINKS } from "@/utils/data"
import { useContext } from "react"
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider"

function Nav() {
  const {logout} = useContext(GlobalApplicationContext);
  return (
    <nav className="z-10 bg-slate-50 shadow-md w-56 fixed flex flex-col justify-between top-0 bottom-0 left-0">
        <Link to={"private/declarations"} className="bg-blue-700 text-white uppercase font-bold px-5 py-5"> Les nouvelles vies</Link>
        <ul>
            {NAV_LINKS.map( (item, index)=>(
            <li key={`navlink-${index}`} className={`border-b border-gray-300 ${index === 0 ? "border-t border-gray-300" : null}`}>
                <Link to={item.to} className="pl-3 pb-2 hover:bg-gray-100 block">{item.label}</Link>
            </li>
            ))}            
        </ul>
        <button type="button" onClick={()=>logout()} className="bg-red-700 text-white font-normal py-2 rounded-md hover:border hover:border-red-700 hover:bg-white hover:text-red-700">Déconnexion</button>
    </nav>
  )
}

export default Nav