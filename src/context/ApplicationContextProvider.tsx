import { Declaration } from '@/types/Declaration';
import React, { useState } from 'react'

type stateData = {
    declarations : Declaration[];
};
type Props = {
    state : stateData;
    updateDeclarations: (declarations :Declaration[]) => void;

};

//  creer le contexte
export const ApplicationContext = React.createContext<Props>({} as Props);

function ApplicationContextProvider({children}:any) {
    const [state,setState] = useState<stateData>({declarations:[]});
    const updateDeclarations = (declarations : Declaration[]) =>{
        setState((current)=>({...current, declarations}));
    };
  return (
    <ApplicationContext.Provider value={{state,updateDeclarations}}>
        {children}
    </ApplicationContext.Provider>
  )
}

export default ApplicationContextProvider;