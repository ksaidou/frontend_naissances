
type Params ={
    path: string;
    token? : string;
};

const search = async ({path,token} : Params) =>{
    console.log(path,token);
    const response = await fetch(
            `/backend/${path}`,
             {
                headers:{
                    'accept':'application/json',
                    'Authorization':`bearer ${token}`
                }
            });
    const data = await response.json();
    console.log(data);
    return data;
}

const create = async (url:string, body:any) =>{
    const response = await fetch(
            `/backend/${url}`,
             {
                headers:{'accept':'application/json', 'content-type':'application/json' },
                body:JSON.stringify(body),
                method:'POST'
            });
    return response;
}

export{search,create};