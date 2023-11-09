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
import SearchBar from './components/searchBar/SearchBar';
import Final from './components/final/Final';

function App() {
   const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/searchBar' element={user ? <Home /> : <SearchBar />} />
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/checkout' element={<Checkout /> }/>
        <Route path='/final' element={<Final />} />
        <Route path='/create' element={user ? <Create /> : <Login />} />
        <Route path='/addressDetails' element={<AddressPage />}/>
        <Route path='/productDetail/:id' element={ <ProductDetail /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;