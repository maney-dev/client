import React from 'react'
import { Link } from 'react-router-dom'
import classes from './productCard.module.css'


const ProductCard = ({ product }) => {

  return (
    <div className={classes.container}>
        <Link to={`/productDetail/${product._id}`} className={classes.wrapper}>
            <img src={`http://localhost:5000/images/${product.firstImg}`} className={classes.productImg} alt="" />
            <div className={classes.productInfo}>
              <h2 className={classes.productTitle}>{product.title}</h2>
              <span className={classes.productPrice}><span>$</span>{Number(product?.price).toFixed(2)}</span>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard