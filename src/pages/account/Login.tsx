import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from "react";
import { create } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";

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
    const {setToken} = useContext(GlobalApplicationContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Credential>({
        resolver: yupResolver(schema),
    });

    const mutation = useMutation({
        mutationFn: (credentials:Credential) => create("sign-in",credentials),
        onSuccess: async (response : Response) => {
            const {bearer} = await response.json();
            console.log(bearer);
            setToken({token:bearer});
            console.log(bearer);
            reset();
        },
      })


    const onSubmit: SubmitHandler<Credential> = async (credentials) => {
        mutation.mutate(credentials);
    };

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