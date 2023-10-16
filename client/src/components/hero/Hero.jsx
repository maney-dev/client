/* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React from 'react'
// import classes from './hero.module.css'

// const Hero = () => {
//   return (

//     <div className={classes.containers}>
//         <div className={classes.wrapper}>
//             <h1 className={classes.title}> Best product on the market</h1>
//             <div className={classes.productsContainers}>
//                 <div className={classes.diapo}>
//                     <img className={classes.sunglasses} src = {`/Assets/gray-sunglass.jpg`} alt="Card image cap" />
//                     <img className={classes.sunglasses} src = {`/Assets/woman-sunglass.jpg`} alt="Card image cap" />
//                     <img className={classes.sunglasses} src = {`/Assets/white-sunglass.jpg`} alt="Card image cap" />
//                     <img className={classes.sunglasses} src = {`/Assets/dior-sunglass.jpg`} alt="Card image cap" />
//                 </div>
//                 <div>
//                     <img className={classes.casq} src = {`/Assets/casq.jpg`} alt="Card image cap" />
//                 </div>
//                 <div>
//                     <img className={classes.cap} src = {`/Assets/box-cap.jpg`} alt="Card image cap" />
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }



import React from 'react';
import classes from './hero.module.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    'Assets/Senshop3.jpg',
    'Assets/dior-sunglass1.jpg',
    'Assets/white-sunglass1.jpg',
    'Assets/gray-sunglass1.jpg',
    'Assets/SenShop1.jpg',
    'Assets/box-cap1.jpg',
    'Assets/black-casq1.jpg',
    'Assets/can-cap1.jpg',
    'Assets/SenShop5.jpg',
    'Assets/airpod-box1.jpg',
    'Assets/casq1.jpg',
    'Assets/airpod-fires1.jpg',
    'Assets/SenShop2.jpg',
];

const Hero = () => {
  return (
    <div className="slide-container">
    <h1 className={classes.title}> Best product on the market</h1>
      <Fade className={classes.fade}>
        {fadeImages.map((fadeImage, index) => (
          <div className={classes.wrapper} key={index}>
            <img className={classes.fadeImage} src={fadeImage} />
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Hero