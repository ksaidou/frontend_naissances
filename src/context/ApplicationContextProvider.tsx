import { Declaration } from '@/types/Declaration';
import React, { useReducer, useState } from 'react'
import { ApplicationReducer } from './ApplicationReducer';
import { INITIAL_STATE, SET_TOKEN, UPDATE_DECLARATION_STATUS, UPDATE_DECLARATIONS,UPDATE_TITLE } from '@/utils';
import { Demande } from '@/types/Demande';

type stateData = {
    declarations : Declaration[];
    demandes : Demande[];
    title : string ; 
    token? : string;
};
type Props = {
    state : stateData;
    updateTitle: (data : any) => void;
    updateDeclarations: (declarations :Declaration[]) => void;
    updateDeclarationStatus: ({id,status} : {id:string,status:string}) => void;
    setToken: (data : any) => void;
    deleteToken: () => void;
};

//  creer le contexte
export const ApplicationContext = React.createContext<Props>({} as Props);

function ApplicationContextProvider({children}:any) {
   // const [state,setState] = useState<stateData>({declarations:[]});
    const[state,dispatch] = useReducer (ApplicationReducer,INITIAL_STATE);
   
    const updateDeclarations = (declarations : Declaration[]) =>{
        dispatch({type: UPDATE_DECLARATIONS, data:declarations});
       // setState((current)=>({...current, declarations}));
    };
    
    const updateDeclarationStatus = ({id,status}: {id:string, status:string}) =>{
        dispatch({type: UPDATE_DECLARATION_STATUS, data:{id,status}});
    };

    const updateTitle = (data:any) =>{
        dispatch({type: UPDATE_TITLE, data});
    };

    const setToken = (data : any) => {
        dispatch({type: SET_TOKEN, data});
    }

    const deleteToken = () => {
        dispatch({type: UPDATE_TITLE});
    }



  return (
    <ApplicationContext.Provider 
    value={
            {state,
                updateDeclarations,
                updateDeclarationStatus,
                updateTitle,
                setToken,
                deleteToken
            }
        }>
        {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationContextProvider;