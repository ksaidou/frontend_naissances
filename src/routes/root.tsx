import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ErrorPage from "@/error-page";
import PrivateLayout from "@/layouts/PrivateLayout";
import Declarations from "@/pages/Declarations";
import Demandes from "@/pages/Demandes";
import Home from "@/pages/Home";
import DeclarationEdit from "@/pages/DeclarationEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
     children: [
        {
            index:true,
            element:<Home />,

        },
      {
        path: "private",
        element: <PrivateLayout />,
         children: [
        {
            path: "declarations",
            element: <Declarations />,
        },
        {
          path: "declarations/new",
          element: <DeclarationEdit />,
      },
        {
          path:"demandes",
          element:<Demandes />,
        }
        ],
      },
    ],
  },
]);

export{router};
