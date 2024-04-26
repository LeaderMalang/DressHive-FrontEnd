import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Showcase from './Components/ShowCase/Showcase.jsx';
import User from './Components/User/User.jsx';
import Auth0ProviderWithHistory from './Auth';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import FAQ from './Components/FAQ/Faq.jsx';
import CartSummary from './Components/Cart/CartSummary.jsx';
import './index.css'

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const addToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='showcase' element={<Showcase addToCart={addToCart}/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:id' element={<User/>}/>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='cart' element={<CartSummary cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <Auth0ProviderWithHistory>
        <RouterProvider router={router}/>
      </Auth0ProviderWithHistory>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
