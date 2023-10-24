import React from "react";
import classes from "./navbar.module.css";
import { AiOutlineShoppingCart, AiOutlineUser,} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import {toggleShowCart} from '../../redux/cartSlice'
import {logout } from "../../redux/authSlice";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { showCart, products } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
     dispatch(logout())
     navigate('/logout')
  }

  const handleCloseCart = () => {
    if(showCart){
        dispatch(toggleShowCart())
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to={"/"} onClick={handleCloseCart} className={classes.left}>
          <h1 className={classes.title}>SenShop</h1>
        </Link>
        <SearchBar/>
        <div className={classes.right}>
          <Link to="/create" className={classes.createBtn}>
            Create product
          </Link>
          <div className={classes.user}>
          <AiOutlineUser />
          <span className={classes.username}>{user?.username}</span>
          </div>
          <span onClick={handleLogout} className={classes.logoutBtn}>Logout</span>
          <div
            className={classes.cartContainer}
            onClick={() => dispatch(toggleShowCart())}
          >
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <span className={classes.cartNumber}>{products?.length}</span>
          </div>
        </div>
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;