import React from 'react'
import classes from './final.module.css'

const Final = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <h2>You have successfully placed an order!</h2>
            <p>Delivery is generally between 2 and 4 days</p> <br />
            <p>Payment is made on delivery</p>
        </div>
    </div>
  )
}

export default Final