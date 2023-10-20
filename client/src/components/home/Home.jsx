import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Hero from "../hero/Hero";
import List from "../list/List";
import classes from "./home.module.css";
import { setProducts } from "../../redux/productsSlice";

const Home = () => {
  const products = useSelector(state => state.products.all);
  
  const dispatch = useDispatch()
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://sensational-swan-a0ad52.netlify.app/product`);
        const data = await res.json();
    
        dispatch(setProducts(data));
      } catch (error) {
        setError(prev => error)
        console.error(error);
      }
    };
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.container}>
    <Hero/>
      {!error && <List products={products ? products : []} />}
      {error && <h1>No products or server is not responding</h1>}
    </div>
  );
};

export default Home;