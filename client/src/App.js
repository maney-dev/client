import './App.css'
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/productDetail/ProductDetail";
import Create from "./components/create/Create";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddressPage from "./components/addressPage/AddressPage";
import { useSelector } from "react-redux";
import Checkout from './components/checkout/Checkout';
import Final from './components/final/Final';
import { HeadProvider, Title, Link, Meta } from 'react-head';
import SearchBar from './components/searchBar/SearchBar';
// import Head from 'react-head'

function App() {
  const {user} = useSelector((state) => state.auth)

  return (
    <>
      <HeadProvider>
        <div className="Home">
        <Title>SenShop</Title>
        <Link rel="canonical" href="http://jeremygayed.com/" />
        <Meta name="example" content="whatever" />
        </div>
      </HeadProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Login />} />
        <Route path='/searchBar' element={user ? <Home /> : <SearchBar />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/cart' element={user ? <Cart /> : <Login />} />
        <Route path='/checkout' element={user ? <Checkout /> : <Login />} />
        <Route path='/final' element={user ? <Final /> : <Login />} />
        <Route path='/create' element={user ? <Create /> : <Login />} />
        <Route path='/addressDetails' element={user ? <AddressPage /> : <Login />}/>
        <Route path='/productDetail/:id' element={user ? <ProductDetail /> : <Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;