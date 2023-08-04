import React, { useState } from 'react'

const Formulaire = () => {
    const [nom, setNom] = useState<string>("Luke Skywalker");


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNom(event.target.value);
    }

    const soumissionForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(nom)
    }

  return (
    <div>
        <form onSubmit={soumissionForm}>
            <label htmlFor="nom">Nom: </label>
            <input type="text" name="nom" id="nom" onChange={handleChange} value={nom}/>

            <input type="submit" value="Soumettre" />
        </form>
    </div>
  )
}

export default Formulaire