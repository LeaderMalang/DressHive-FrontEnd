import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Showcase from './Components/ShowCase/Showcase.jsx'
import User from './Components/User/User.jsx'
import Auth0ProviderWithHistory from './Auth';
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import FAQ from './Components/FAQ/Faq.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='showcase' element={<Showcase/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}/>
    <Route path='faq' element={<FAQ/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>

  </Route>)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
    <RouterProvider router={router}/>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
)
