import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Declaration } from "@/types/Declaration";
import { create } from "@/services";
import { useState } from "react";
import { Link } from "react-router-dom";

const REQUIRER_FIELD = "Ce champ est requis";

const schema = yup
  .object({
    comment: yup.string().required(REQUIRER_FIELD),
    status: yup.string().required(REQUIRER_FIELD).default("NEW"),
    registred: yup.string().required(REQUIRER_FIELD).default(`${new Date().toISOString()}`),
    compagny:yup.object({
      name:yup.string().required(REQUIRER_FIELD),
      adress:yup.string().required(REQUIRER_FIELD),
    }),
    child:yup.object({
      firstname:yup.string().required(REQUIRER_FIELD),
      lastname:yup.string().required(REQUIRER_FIELD),
      gender:yup.string().required(REQUIRER_FIELD),
      birthdate:yup.string().required(REQUIRER_FIELD),
      birthtime:yup.string().required(REQUIRER_FIELD),
    }),
    firstParent:yup.object({
      firstname:yup.string().required(REQUIRER_FIELD),
      lastname:yup.string().required(REQUIRER_FIELD),
      gender:yup.string().required(REQUIRER_FIELD),
      email:yup.string().required(REQUIRER_FIELD),
      phone:yup.string().required(REQUIRER_FIELD),
    }),
    secondParent:yup.object({
      firstname:yup.string().required(REQUIRER_FIELD),
      lastname:yup.string().required(REQUIRER_FIELD),
      gender:yup.string().required(REQUIRER_FIELD),
      email:yup.string().required(REQUIRER_FIELD),
      phone:yup.string().required(REQUIRER_FIELD),
    })
  })
  .required()

function DeclarationEdit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Declaration>({
    resolver: yupResolver(schema),
  });

  const [display,setDisplay] = useState("FORM");

  const onSubmit: SubmitHandler<Declaration> = async (data) => {
    const response = await create('declarations',data);
    const {status} = response;
    if(status===201){
      reset();
      setDisplay("SUCCESS");
    }
    };
  
  return (
    <article className="bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      {display === 'FORM'? (
        <>
        <h1 className="mb-2 text-xl font-bold">Declarer une naissance</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ENFANT*/}
            <h3 className="border-b border-gray-900 text-center text-xl">Informations sur l'enfant</h3>
            <div className="form-field">
                <label htmlFor="child-gender">Civilité</label>
                <select id="child-gender" {...register("child.gender")}>
                  <option value="">Selectionner</option>
                  <option value="MR">Monsieur</option>
                  <option value="MME">Madame</option>
                  <option value="MLE">Mademoiselle</option>
                </select>
                 <p className="text-red-600"> {errors.child?.gender?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="child-firstname">Prénom</label>
                <input type="text" id="child-firstname" placeholder="Prénom de l'enfant" 
                {...register("child.firstname")}/>
                 <p className="text-red-600"> {errors.child?.firstname?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="child-lastname">Nom</label>
                <input type="text" id="child-lastname" placeholder="Nom de l'enfant"
                 {...register("child.lastname")}/>
                <p className="text-red-600">{errors.child?.lastname?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="child-birthdate">Date de naissance</label>
                <div className="flex justify-between items-center gap-2">
                  <input type="date" id="child-birthdate" placeholder="Date de naissance"
                  {...register("child.birthdate")}/>
                  <input type="time" id="child-birthdate" placeholder="Heure de naissance"
                  {...register("child.birthtime")}/>
                </div>
                <p className="text-red-600">{errors.child?.birthdate?.message}</p>
                <p className="text-red-600">{errors.child?.birthtime?.message}</p>
            </div>
            {/* PARENT 1*/}
            <h3 className="border-b border-gray-900 text-center text-xl mt-5">Informations sur le parent 1</h3>
            <div className="form-field">
                <label htmlFor="firstParent-gender">Civilité</label>
                <select id="firstParent-gender" {...register("firstParent.gender")}>
                  <option value="">Selectionner</option>
                  <option value="MR">Monsieur</option>
                  <option value="MME">Madame</option>
                  <option value="MLE">Mademoiselle</option>
                </select>
                 <p className="text-red-600"> {errors.firstParent?.gender?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="firstParent-firstname">Prénom</label>
                <input type="text" id="firstParent-firstname" placeholder="Prénom du parent 1" 
                {...register("firstParent.firstname")}/>
                 <p className="text-red-600"> {errors.firstParent?.firstname?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="firstParent-lastname">Nom</label>
                <input type="text" id="firstParent-lastname" placeholder="Nom du parent 1"
                 {...register("firstParent.lastname")}/>
                <p className="text-red-600">{errors.firstParent?.lastname?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="firstParent-email">Email</label>
                <input type="email" id="firstParent-email" placeholder="émail du parent 1"
                 {...register("firstParent.email")}/>
                <p className="text-red-600">{errors.firstParent?.email?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="firstParent-phone">Téléphone</label>
                <input type="tel" id="firstParent-phone" placeholder="Téléphone du parent 1"
                 {...register("firstParent.phone")}/>
                <p className="text-red-600">{errors.firstParent?.phone?.message}</p>
            </div>
            {/* PARENT 2*/}
            <h3 className="border-b border-gray-900 text-center text-xl mt-5">Informations sur le parent 2</h3>
            <div className="form-field">
                <label htmlFor="secondParent-gender">Civilité</label>
                <select id="secondParent-gender" {...register("secondParent.gender")}>
                  <option value="">Selectionner</option>
                  <option value="MR">Monsieur</option>
                  <option value="MME">Madame</option>
                  <option value="MLE">Mademoiselle</option>
                </select>
                 <p className="text-red-600"> {errors.secondParent?.gender?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="secondParent-firstname">Prénom</label>
                <input type="text" id="secondParent-firstname" placeholder="Prénom du parent 2" 
                {...register("secondParent.firstname")}/>
                 <p className="text-red-600"> {errors.secondParent?.firstname?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="secondParent-lastname">Nom</label>
                <input type="text" id="secondParent-lastname" placeholder="Nom du parent 2"
                 {...register("secondParent.lastname")}/>
                <p className="text-red-600">{errors.secondParent?.lastname?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="secondParent-email">Email</label>
                <input type="email" id="secondParent-email" placeholder="émail du parent 2"
                 {...register("secondParent.email")}/>
                <p className="text-red-600">{errors.secondParent?.email?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="secondParent-phone">Téléphone</label>
                <input type="tel" id="secondParent-phone" placeholder="Téléphone du parent 2"
                 {...register("secondParent.phone")}/>
                <p className="text-red-600">{errors.secondParent?.phone?.message}</p>
            </div>
            <h3 className="border-b border-gray-900 text-center text-xl mt-5">Informations sur le lieu de naissance</h3>
            <div className="form-field">
                <label htmlFor="compagny-name">Hopital</label>
                <input type="text" id="compagny-name" placeholder="Nom de l'hopital" 
                {...register("compagny.name")}/>
                 <p className="text-red-600"> {errors.compagny?.name?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="compagny-adress">Addresse de l'hopital</label>
                <input type="text" id="compagny-adress" placeholder="Addresse de l'hopital"
                 {...register("compagny.adress")}/>
                <p className="text-red-600">{errors.compagny?.adress?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="comment">Commentaire</label>
                <textarea id="comment" 
                 {...register("comment")}>
                </textarea>
                <p className="text-red-600">{errors.comment?.message}</p>
            </div>
            <button type="submit">Enregistrer</button>
        </form>
        </>
      ) : null}

      {display === 'SUCCESS'? (
        <article className="bg-white text-center px-10 py-10 rounded-md shadow-md">
          <h1 className="text-3xl mb-6">Votre naissance a bien été enregistrée</h1>
          <Link to={"/private/declarations"} className="border border-blue-600 text-blue-600 px-6 py-4
          hover:bg-blue-600 hover:text-white">Afficher les déclarations</Link>
        </article>
      ) : null}
        
    </article>
  )
}

export default DeclarationEdit