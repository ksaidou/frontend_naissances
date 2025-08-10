import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Declaration } from "@/types/Declaration";
import { create } from "@/services";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";

const REQUIRER_FIELD = "Ce champ est requis";

const schema = yup
  .object({
    comment: yup.string().required(REQUIRER_FIELD),
    status: yup.string().required(REQUIRER_FIELD).default("NEW"),
    registered: yup.string().required(REQUIRER_FIELD).default(`${new Date().toISOString()}`),
    company:yup.object({
      name:yup.string().required(REQUIRER_FIELD),
      address: yup.object({
        street: yup.string().required(REQUIRER_FIELD),
        zip: yup.string().required(REQUIRER_FIELD),
        city: yup.string().required(REQUIRER_FIELD),
      }),
    }),
    child:yup.object({
      firstName:yup.string().required(REQUIRER_FIELD),
      lastName:yup.string().required(REQUIRER_FIELD),
      gender:yup.string().required(REQUIRER_FIELD),
      birthDate:yup.string().required(REQUIRER_FIELD),
      birthTime:yup.string().required(REQUIRER_FIELD),
    }),
    secondParent:yup.object({
      firstName:yup.string().required(REQUIRER_FIELD),
      lastName:yup.string().required(REQUIRER_FIELD),
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
  } = useForm<Declaration>({resolver: yupResolver(schema),});

  const { state :{token}} = useContext(GlobalApplicationContext);

  const mutation = useMutation({
        mutationFn: (declaration:Declaration) => create({token,url:'declarations', body:declaration}),
        onSuccess: () => {
            reset();
        },
      })

    const onSubmit: SubmitHandler<Declaration> = async (declaration) => {
      const {child:{birthDate,birthTime}} = declaration;
      const finalBirthDate = new Date(birthDate);
      finalBirthDate.setHours(Number(birthTime.split(":")[0]));
      finalBirthDate.setMinutes(Number(birthTime.split(":")[1]));

      const finalDeclaration = {
        ...declaration,
        child:{
          ...declaration.child,
          birthDate: finalBirthDate.toISOString()
        },
      };
        mutation.mutate(finalDeclaration);
    };

  /*const onSubmit: SubmitHandler<Declaration> = async (data) => {
    //const response = await create('declarations',data);
    console.log("-----------");
    console.log(data);
    console.log("-----------");
    /*
    const {status} = response;
    if(status===201){
      reset();
      setDisplay("SUCCESS");
    } 
    };*/
  
  return (
    <article className="bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
      {mutation.isIdle? (
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
                <label htmlFor="child-firstName">Prénom</label>
                <input type="text" id="child-firstName" placeholder="Prénom de l'enfant" 
                {...register("child.firstName")}/>
                 <p className="text-red-600"> {errors.child?.firstName?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="child-lastName">Nom</label>
                <input type="text" id="child-lastName" placeholder="Nom de l'enfant"
                 {...register("child.lastName")}/>
                <p className="text-red-600">{errors.child?.lastName?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="child-birthDate">Date de naissance</label>
                <div className="flex justify-between items-center gap-2">
                  <input type="date" id="child-birthDate" placeholder="Date de naissance"
                  {...register("child.birthDate")}/>
                  <input type="time" id="child-birthDate" placeholder="Heure de naissance"
                  {...register("child.birthTime")}/>
                </div>
                <p className="text-red-600">{errors.child?.birthDate?.message}</p>
                <p className="text-red-600">{errors.child?.birthTime?.message}</p>
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
                {...register("secondParent.firstName")}/>
                 <p className="text-red-600"> {errors.secondParent?.firstName?.message}</p>
            </div>
            <div className="form-field">
                <label htmlFor="secondParent-lastname">Nom</label>
                <input type="text" id="secondParent-lastname" placeholder="Nom du parent 2"
                 {...register("secondParent.lastName")}/>
                <p className="text-red-600">{errors.secondParent?.lastName?.message}</p>
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
              <label htmlFor="company-name">Nom de l'établissement</label>
              <input
                type="text"
                id="company-name"
                placeholder="Nom de l'établissement"
                {...register("company.name")}
              />
              <p className="text-red-600">{errors.company?.name?.message}</p>
            </div>
            <div className="form-field">
              <label htmlFor="company-address">
                Adresse de l'établissement
              </label>
              <div aria-braillelabel="company-address">
                <label htmlFor="company-street">Rue</label>
                <input
                  type="text"
                  id="company-street"
                  placeholder="Adresse de l'établissement"
                  {...register("company.address.street")}
                />
                <p className="text-red-600">
                  {errors.company?.address?.street?.message}
                </p>
                <div className="form-field">
                  <label htmlFor="company-zip-city">Code postal et ville</label>
                  <div className="flex justify-between items-center gap-2">
                    <input
                      type="text"
                      id="company-zip-city"
                      placeholder="code postal"
                      {...register("company.address.zip")}
                    />
                    <input
                      type="text"
                      id="company-zip-city"
                      placeholder="Ville"
                      {...register("company.address.city")}
                    />
                  </div>
                  <p className="text-red-600">
                    {errors.company?.address?.zip?.message}
                  </p>
                  <p className="text-red-600">
                    {errors.company?.address?.city?.message}
                  </p>
                </div>
              </div>
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

      {mutation.isSuccess? (
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