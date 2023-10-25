import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Stylist, { stylistLoader } from './features/body/stylists/Stylist'
import { useEffect } from 'react'
import axios from "axios";
import { setInitialState } from './features/body/home/ourteam/OurTeamSlice'
import { useDispatch } from 'react-redux'
import Services from './features/body/services/Services.jsx'
import Products from './features/body/products/Products.jsx'
import Contact from './features/body/contact/Contact'
import Home from './features/body/home/Home.jsx'
import Stylists from './features/body/stylists/Stylists'
import RootLayout from './RootLayout'
import { useState } from 'react';
import { dataRef } from './firebase';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} ></Route>
      <Route path="/stylists" element={<Stylists />} />
      <Route loader={stylistLoader} path='/stylists/:id' element={<Stylist />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />

    </Route>
  )
)

function App() {
  const dispatch = useDispatch();

  const [fire, setFire] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/").then(res => {

    })

    dataRef.ref().child('Stylers').on('value', data => {
      const getData = Object.values(data.val());
      dispatch(setInitialState({
        state: getData
      }))
    })
  }, [])

  console.log(fire);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
