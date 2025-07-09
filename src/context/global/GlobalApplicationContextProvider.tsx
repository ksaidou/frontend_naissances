import { Declaration } from "@/types/Declaration";
import { createContext, useEffect, useReducer } from "react";
import GlobalApplicationContextReducer from "./GlobalApplicationReducer";
import { APPLICATION_STATE, 
  DELETE_TOKEN,
  FILTER_REQUESTS, 
  SET_REQUEST_STATUS, 
  SET_REQUESTS, 
  SET_TOKEN, 
  UPDATE_TITLE,
  UPDATE_DECLARATIONS } from "@/utils";


type User = {
    role: string;
  };
type StateProps = {
    title: string;
    token: string;
    user?: User;
    requestFilter?: string;
    requests: Request[];
    declarations: Declaration[];
  };

type Props = {
    state: StateProps;
    filterRequests: (data: any) => void;
    setRequests: (data: any) => void;
    updateRequestStatus: (data: any) => void;
    updateTitle: (data: any) => void;
    setToken: (data: any) => void;
    //setCurrentUser: (data: any) => void;
    deleteToken: () => void;
    updateDeclarations: (data: any) => void;
    //logout: () => void;
  };

  export const GlobalApplicationContext = createContext<Props>({} as Props);

  function GlobalApplicationContextProvider({ children }: any) {
    
    /*const [state, setState] = useState<StateProps>({
      title: "Titre par défaut",
      requests: [],
      declarations: [],
    });*/
  
    const [state, dispatch] = useReducer(GlobalApplicationContextReducer, APPLICATION_STATE);
  
    const setToken = (data: any) => {
      dispatch({ type: SET_TOKEN, data });
    };
    const deleteToken = () => {
      dispatch({ type: DELETE_TOKEN });
    };
    const updateTitle = (data: any) => {
      dispatch({ type: UPDATE_TITLE, data });
    };
    const setRequests = ({ requests }: StateProps) => {
      dispatch({ type: SET_REQUESTS, data: requests });
    };
    const updateRequestStatus = (data: any) => {
      dispatch({ type: SET_REQUEST_STATUS, data });
    };
    const filterRequests = (data: any) => {
      dispatch({ type: FILTER_REQUESTS, data });
    };
    const updateDeclarations = (declarations: Declaration[]) => {
      dispatch({ type: UPDATE_DECLARATIONS, data: declarations });
    };
    useEffect(() => {
      dispatch({});
    }, []);
  
    return (
      <GlobalApplicationContext.Provider
        value={{
          state,
          deleteToken,
          setToken,
          filterRequests,
          updateRequestStatus,
          setRequests,
          updateTitle,
          updateDeclarations,
        }}
      >
        {children}
      </GlobalApplicationContext.Provider>
    );
  }


  export default GlobalApplicationContextProvider;