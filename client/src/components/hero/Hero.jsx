/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import classes from './hero.module.css'

const Hero = () => {
  return (

    <div className={classes.containers}>
        <div className={classes.wrapper}>
            <h1 className={classes.title}> Best product on the market</h1>
            <div className={classes.productsContainers}>
                <div className={classes.diapo}>
                    <img className={classes.sunglasses} src = {`/Assets/gray-sunglass.jpg`} alt="Card image cap" />
                    <img className={classes.sunglasses} src = {`/Assets/woman-sunglass.jpg`} alt="Card image cap" />
                    <img className={classes.sunglasses} src = {`/Assets/white-sunglass.jpg`} alt="Card image cap" />
                    <img className={classes.sunglasses} src = {`/Assets/dior-sunglass.jpg`} alt="Card image cap" />
                </div>
                <div>
                    <img className={classes.casq} src = {`/Assets/casq.jpg`} alt="Card image cap" />
                </div>
                <div>
                    <img className={classes.cap} src = {`/Assets/box-cap.jpg`} alt="Card image cap" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
