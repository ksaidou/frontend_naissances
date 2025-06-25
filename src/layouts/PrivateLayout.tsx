import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"

function PrivateLayout() {
  return (
    <section className=" min-h-screen">
      <Nav/>
        <main className="wrapper pl-64 pr-5">
          <header className="flex justify-between my-3 text-xl font-bold">
            <h3>Déclarations</h3>
            <span>Saïdou</span>
          </header>
          <Outlet/>
        </main>
    </section>
  )
}

export default PrivateLayout