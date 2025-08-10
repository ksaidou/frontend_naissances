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

const partialUpdate = async ({path,token, body}:any) =>{
    /*console.log("-----Url partialUpdate-----");
    console.log(path);
    console.log("-----Url partialUpdate_FIN-----");*/
    //console.log(token);
    //url ='declarations/1/status'
   // console.log(url);
    //console.log(body);
    return await axios(
             {
                method:'PATCH',
                url: `/backend/${path}`,
                data: body,
                headers:{'accept':'application/json','content-type':'application/json',
                    ...(token ? ({ 'Authorization': `Bearer ${token}`}): null) },
            });
}


export{search,create,partialUpdate};