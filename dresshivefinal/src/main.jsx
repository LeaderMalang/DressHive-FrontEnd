import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Showcase from './Components/ShowCase/Showcase.jsx';
import ShowCaseDetails from './Components/ShowCase/ShowCaseDetails.jsx';
import Auth0ProviderWithHistory from './Auth';
import Login from './Components/Login/Login.jsx';
import Signup from './Components/Signup/Signup.jsx';
import FAQ from './Components/FAQ/Faq.jsx';
import CartSummary from './Components/Cart/CartSummary.jsx';
import HomePageCategory from './Components/HomePageCategory/HomePageCategory.jsx';
import HomePageCategoryDetails from './Components/HomePageCategory/HomePageCategoryDetails.jsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx';
import CheckOut from './Components/CheckOut/CheckOut.jsx'

import './index.css';
import './App.css';

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

  const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: '../Images/keagan-henman-xPJYL0l5Ii8-unsplash.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        category: 'Formal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus'
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: '../Images/marcus-loke-xXJ6utyoSw0-unsplash.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        category: 'Jeans',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus'
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: '../Images/mnz-ToLMORRb97Q-unsplash.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        category: 'Pants',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus'
    },
    {
        id: 4,
        name: 'Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../Images/alex-haigh-fEt6Wd4t4j0-unsplash.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        category: 'Tees',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus'
    },
    {
        id: 4,
        name: 'Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../Images/alex-haigh-fEt6Wd4t4j0-unsplash.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        category: 'Tees',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus'
    },
    {
        id: 4,
        name: 'Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: '../Images/alex-haigh-fEt6Wd4t4j0-unsplash.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        category: 'Teesayugy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus'
    },
    // More products...
  ];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home products={products} />} />
        <Route path='showcase' element={<Showcase products={products}/>}/>
        <Route path='products/:id' element={<ErrorBoundary><ShowCaseDetails products={products} addToCart={addToCart}/></ErrorBoundary>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Signup' element={<Signup/>}/>
        <Route path='checkout' element={<CheckOut cartItems={cartItems}/>}/>
        <Route path='cart' element={<CartSummary cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
        <Route path='category/:categoryName' element={<HomePageCategoryDetails products={products} />} />
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
