import React from 'react'
import classes from './final.module.css'

const Final = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <h2>Vous avez passé une commande avec succès !</h2>
            <p>La livraison est généralement entre 2 et 4 jours</p> <br />
            <p>Le paiement s'effectue à livraison</p>
        </div>
    </div>
  )
}

export default Final