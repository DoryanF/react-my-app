import React from 'react'
import './monComposant.css'
import { Link } from 'react-router-dom'



const MonComposant = () => {
  return (
    <div>
        <h1>MonComposant</h1>
        <Link to={"/"}>
        <p>Compteur</p>
        </Link>
    </div>
  )
}

export default MonComposant