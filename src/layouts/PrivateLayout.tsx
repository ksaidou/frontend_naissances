import { Navigate, Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"
import { useContext } from "react"
import {ApplicationContext} from "@/context/ApplicationContextProvider"

function PrivateLayout() {
  const { state: { title,token },} = useContext(ApplicationContext);
  return (
    <>
      {token ? 
      (
        <section className=" min-h-screen">
        <Nav/>
          <main className="wrapper pl-64 pr-5">
            <header className="flex justify-between my-3 text-xl font-bold">
              <h3>{title}</h3>
              <span>Saïdou</span>
            </header>
            <Outlet/>
          </main>
      </section>
      ) 
      : (< Navigate to={"/connexion"}/>)}
    </>
    
  )
}

export default PrivateLayout