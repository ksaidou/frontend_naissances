import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { create } from "@/services";
import { ApplicationContext } from "@/context/ApplicationContextProvider";

const REQUIRER_FIELD = "Ce champ est requis";

type Credential = {
    email:string;
    password:string;
}
    
const schema = yup
  .object({
    email :yup.string().required(REQUIRER_FIELD),
    password :yup.string().required(REQUIRER_FIELD),             
  })
  .required()


function Login() {
    const {setToken} = useContext(ApplicationContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Credential>({
        resolver: yupResolver(schema),
    });

    const [display,setDisplay] = useState("FORM");

    //console.log(display);

    const onSubmit: SubmitHandler<Credential> = async (credentials) => {
        const response = await create('sign-in',credentials);
        const {status} = response;
        const {bearer} = await response.json();
        console.log({bearer});
        console.log(status)

        if(status===200){
            setToken({token : bearer});
            setDisplay("SUCCESS");
            reset();
        }
    };

    if(display === 'SUCCESS'){
        <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
            <h1 className="text-3xl mb-6">Vous etes connecté</h1>
            < Navigate to={"/private/declarations"}/>
        </article>
    }

    return (
    <div className="flex flex-col justify-between md:justify-center">
        <h1 className="p-4 font-bold text-4xl text-center text-blue-800 md:hidden">MES NAISSANCES</h1>
        <div className="w-4/5 md:w-3/4 mx-auto">
        <h1 className="mb-2 text-xl font-bold">Se connecter</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-field">
                    <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Votre émail"
                 {...register("email")}/>
                <p className="text-red-600">{errors?.email?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" placeholder="Votre mot de passe"
                 {...register("password")}/>
                <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <button type="submit">connexion</button>
        </form>
        </div>
        <p className="p-4 text-center md:hidden">&copy; {new Date().getFullYear()} chillo.tech</p>
    </div>
  )
}

export default Login