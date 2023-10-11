/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react'
import classes from "./searchBar.module.css"
import {AiOutlineSearch } from "react-icons/ai";
import { useState} from 'react';
// import List from '../list/List';
import {useSelector } from "react-redux";
// import ProductCard from '../productCard/ProductCard';

const SearchBar = () => {
    const { products } = useSelector((state) => state.cart)
    console.log({ products })
    const [query, setQuery] = useState("");

    const searchText = (e) =>{
        setQuery(e.target.value)
    }


    let productResults = useMemo(() => {
        if (query === "") return []
        return products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    }, [query])
    console.log({ productResults})

  return (
    <>
        <div className={classes.searchBar}>
            <input 
            type='text' 
            name='searchbar' 
            placeholder='Search...' 
            value={query}
            onChange={searchText.bind(this)}
            />
            <AiOutlineSearch className={classes.searchIcon}/>
            <div className={classes.searchResults}>
            {productResults.length > 0 && productResults.map(p => (
                <p key={p._id}>{p.title}</p>
            ))}
            </div>
            
        </div>
        
    </>
  )
}

export default SearchBar
