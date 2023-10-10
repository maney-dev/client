/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import classes from "./searchBar.module.css"
import {AiOutlineSearch } from "react-icons/ai";
import { useState} from 'react';
import List from '../list/List';
// import ProductCard from '../productCard/ProductCard';

const SearchBar = () => {
    // const { products } = useSelector((state) => state.cart)
    const [query, setQuery] = useState("");

    const searchText = (e) =>{
        setQuery(e.target.value)
    }
    const ProductSearch = List.products.filter(item =>{
        return Object.keys(item).some(key => 
            item[key].toString().toLowerCase(query.toString).includes()
        )
    })

  return (
    <>
        {ProductSearch.map((item, idex) =>{
        <div className={classes.searchBar}>
            <input 
            type='text' 
            name='searchbar' 
            placeholder='Search...' 
            value={query}
            onChange={searchText.bind(this)}
            />
            <AiOutlineSearch className={classes.searchIcon}/>
        </div>
    })
        }
        
    </>
  )
}

export default SearchBar
