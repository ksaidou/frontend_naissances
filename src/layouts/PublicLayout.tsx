import Banner from "@/components/shared/Banner";
import { ApplicationContext } from "@/context/ApplicationContextProvider";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicLayout() {
  const { state : {token} } = useContext(ApplicationContext);
  return (
    <>
      {token ? 
          ( 
          < Navigate to={"/private/demandes"}/> 
          ) 
        : 
          ( 
            <section className=" min-h-screen grid md:grid-cols-2">
              <Banner/>
              <Outlet/>
            </section>
          )
      }
    </>
  )
}

export default PublicLayout