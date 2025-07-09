import { Outlet } from "react-router-dom"
import ApplicationContextProvider from "./context/ApplicationContextProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import GlobalApplicationContextProvider from "./context/global/GlobalApplicationContextProvider"


const queryClient = new QueryClient()

function App() {

  return (
    <GlobalApplicationContextProvider>
      <ApplicationContextProvider>
        <QueryClientProvider client={queryClient}>
          <main className="bg-gray-200 min-h-screen">
            <Outlet />
          </main>
        </QueryClientProvider>
     </ApplicationContextProvider>
    </GlobalApplicationContextProvider>
  )
}

export default App
