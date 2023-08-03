import React from 'react'

type Personne = {
    nom: string;
    age: number;
}

const MonComposant: React.FC<Personne> = ({nom, age}) => {
  return (
    <>
        <h1>Je m'appelle {nom}</h1>
        <h2>J'ai {age} ans</h2>
    </>
  )
}

export default MonComposant