import { Declaration } from '@/types/Declaration';
import React, { useEffect, useReducer } from 'react'
import { ApplicationReducer } from './ApplicationReducer';
import { INITIAL_STATE, UPDATE_DECLARATION_STATUS, UPDATE_DECLARATIONS } from '@/utils';
import { Demande } from '@/types/Demande';

type stateData = {
    declarations : Declaration[];
    demandes : Demande[];
};
type Props = {
    state : stateData;
    updateDeclarations: (declarations :Declaration[]) => void;
    updateDeclarationStatus: ({id,status} : {id:string,status:string}) => void;
};

//  creer le contexte
export const ApplicationContext = React.createContext<Props>({} as Props);

function ApplicationContextProvider({children}:any) {
   // const [state,setState] = useState<stateData>({declarations:[]});
    const[state,dispatch] = useReducer (ApplicationReducer,INITIAL_STATE);
   
    const updateDeclarations = (declarations : Declaration[]) =>{
        dispatch({type: UPDATE_DECLARATIONS, data:declarations});
    };
    
    const updateDeclarationStatus = ({id,status}: {id:string, status:string}) =>{
        dispatch({type: UPDATE_DECLARATION_STATUS, data:{id,status}});
    };

     /* useEffect(()=>{
        dispatch ({})},
        []);*/

  return (
    <ApplicationContext.Provider 
    value={{state,updateDeclarations,updateDeclarationStatus,}}>
        {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContextProvider;