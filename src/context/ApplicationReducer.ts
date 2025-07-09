import { INITIAL_STATE, UPDATE_DECLARATION_STATUS, UPDATE_DECLARATIONS } from "@/utils";

function ApplicationReducer (state: any = INITIAL_STATE, action: any){
    const {type, data} = action || {};

    switch(type){
        case UPDATE_DECLARATIONS:
            state = {...state,
                declarations:data
            };
            break;
        case UPDATE_DECLARATION_STATUS:
            const {id: idToUpdate, status} = data;
            const allDeclarations = state.declarations;
            const filteredDeclaration = allDeclarations.filter(({id} :{id: string})=> id === idToUpdate);
            const declarationToUpdate = filteredDeclaration[0];
            const declarationsToKeep = allDeclarations.filter(({id} :{id: string})=> id !== idToUpdate);
            state = {...state,
                 declarations:[
                    ...declarationsToKeep,
                    {
                        ...declarationToUpdate,
                        status:status
                    },
                 ],
            };
            break;

    }
    return state;
}

export {ApplicationReducer};