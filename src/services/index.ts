import axios from "axios";

type Params ={
    path: string;
    token? : string;
};

const search = async ({path,token} : Params) =>{
    //console.log(path,token);
    const response = await axios.get(
            `/backend/${path}`,
             {
                headers:{
                    'accept':'application/json',
                    'Authorization':`bearer ${token}`
                }
            });
    const {data} = response;
    //console.log(data);
    return data;
}

const create = async ({url,token, body}:any) =>{
    return await axios(
             {
                method:'POST',
                url: `/backend/${url}`,
                data: body,
                headers:{'accept':'application/json','content-type':'application/json',
                    ...(token ? ({ 'Authorization': `Bearer ${token}`}): null) },
            });
}

const partialUpdate = async ({url,token, body}:any) =>{
    console.log("-----Url-----");
    console.log(url);
    return await axios(
             {
                method:'PATCH',
                url: `/backend/${url}`,
                data: body,
                headers:{'accept':'application/json','content-type':'application/json',
                    ...(token ? ({ 'Authorization': `Bearer ${token}`}): null) },
            });
           // console.log(url);
}


export{search,create,partialUpdate};