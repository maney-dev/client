// import './App.css'
// import Navbar from "./components/navbar/Navbar";
// import {Routes, Route} from 'react-router-dom'
// import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
// import Cart from "./components/cart/Cart";
// import ProductDetail from "./components/productDetail/ProductDetail";
// import Create from "./components/create/Create";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import AddressPage from "./components/addressPage/AddressPage";
// import { useSelector } from "react-redux";
// import Checkout from './components/checkout/Checkout';
// import Final from './components/final/Final';
// import { HeadProvider, Title, Link, Meta } from 'react-head';
// import SearchBar from './components/searchBar/SearchBar';


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
// import { HeadProvider, Title, Link, Meta } from 'react-head';
import SearchBar from './components/searchBar/SearchBar';

function App() {
   const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/searchBar' element={user ? <Home /> : <SearchBar />} />
        <Route path='/cart' element={user ? <Cart /> : <Cart />} />
        <Route path='/checkout' element={user ? <Checkout /> : <Checkout />} />
        <Route path='/final' element={user ? <Final /> : <Final />} />
        <Route path='/create' element={user ? <Create /> : <Login />} />
        <Route path='/addressDetails' element={user ? <AddressPage /> : <AddressPage />}/>
        <Route path='/productDetail/:id' element={user ? <ProductDetail /> : <ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   const {user} = useSelector((state) => state.auth)

//   return (
//     <>
//       <HeadProvider>
//         <div className="Home">
//         <Title>SenShop</Title>
//         <Link rel="canonical" href="http://jeremygayed.com/" />
//         <Meta name="example" content="whatever" />
//         </div>
//       </HeadProvider>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/searchBar' element={user ? <Home /> : <SearchBar />} />
//         <Route path='/login' element={user ? <Login /> : <Login />} />
//         <Route path='/register' element={user ? <Login /> : <Register />} />
//         <Route path='/cart' element={user ? <Cart /> : <Login />} />
//         <Route path='/checkout' element={user ? <Checkout /> : <Checkout />} />
//         <Route path='/final' element={user ? <Final /> : <Final />} />
//         <Route path='/create' element={user ? <Create /> : <Login />} />
//         <Route path='/addressDetails' element={user ? <AddressPage /> : <AddressPage />}/>
//         <Route path='/productDetail/:id' element={user ? <ProductDetail /> : <ProductDetail />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;