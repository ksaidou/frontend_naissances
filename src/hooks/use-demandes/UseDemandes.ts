import { GlobalApplicationContext } from '@/context/global/GlobalApplicationContextProvider';
import { search } from '@/services';
import { Demande } from '@/types/Demande';
import { useContext, useEffect, useState } from 'react'

function UseDemandes() {
    const[demandes,setDemandes] = useState<Demande[]>([]);
    const[sortOrder, setSortOrder] = useState(1);

    const {state:{token}} = useContext(GlobalApplicationContext);

    const sortByStatus = ()=>{
        const sortedDemandes = demandes.sort((item1:Demande, item2:Demande)=>{
            const{status: status1} = item1;
            const{status: status2} = item2;
            let result = 0;
            if(status1 === status2){
                result=0;
            }else if (status1 > status2){
                result = 1;
            }else{
                result = -1;
            }
            result = result * sortOrder;
            setSortOrder(sortOrder * -1);
            return result;
        });
        setDemandes([...sortedDemandes]);

    }

    const getDemandes = async ()=>{
        const data = await search({path: "request", token});
        setDemandes(data);
    }
    useEffect(()=>{
        getDemandes();
    }
    ,[]);

    return {demandes,sortByStatus};
}

export {UseDemandes};