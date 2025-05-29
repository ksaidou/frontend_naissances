
function DeclarationEdit() {
  return (
    <article className="bg-white shadow-md rounded-md w-1/2 mx-auto p-4">
        <h1 className="mb-2 text-xl font-bold">Declarer une naissance</h1>
        <form action="">
            <h3 className="border-b border-gray-900 text-center text-xl">Informations sur l'enfant</h3>
            <div className="form-field">
                <label htmlFor="child-firstname">Prénom</label>
                <input type="text" name="prenom" id="child-firstname" placeholder="Prénom de l'enfant"/>
                <p className="text-red-600"></p>
            </div>
            <div className="form-field">
                <label htmlFor="child-lastname">Nom</label>
                <input type="text" name="nom" id="child-lastname" placeholder="Nom de l'enfant"/>
                <p className="text-red-600"></p>
            </div>
            <div className="form-field">
                <label htmlFor="child-birthdate">Date de naissance</label>
                <div className="flex justify-between items-center gap-2">
                  <input type="date" name="prenom" id="child-birthdate" placeholder="Date de naissance"/>
                  <input type="time" name="heure" id="child-birthdate" placeholder="Heure de naissance"/>
                </div>
                <p className="text-red-600"></p>
            </div>
            <button type="submit">Enregistrer</button>
        </form>
    </article>
  )
}

export default DeclarationEdit