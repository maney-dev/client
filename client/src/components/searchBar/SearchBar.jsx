import classes from "./searchBar.module.css"
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from '../../redux/productsSlice';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.searchResults);
    const [query, setQuery] = useState("");

    const searchText = (e) => {
        setQuery(e.target.value)
        dispatch(searchProducts(e.target.value))
    }




    return (

        <div className={classes.searchBar}>
            <input
                type='text'
                name='searchbar'
                placeholder='Search...'
                value={query}
                onChange={searchText.bind(this)}
            />
            <AiOutlineSearch className={classes.searchIcon} />
            {products.length>0 && <div className={classes.searchResults}>
                <div>
                    <ul>
                        {query && products.map(p => {
                            return <li onClick={() => setQuery(p.title)} key={p.title}>
                            <Link to={`/productDetail/${p._id}`}>
                                {p.title}
                            </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>}
        </div>

    )
}

export default SearchBar
