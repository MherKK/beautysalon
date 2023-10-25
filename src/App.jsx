import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Stylist from './features/body/stylists/Stylist'
import { useEffect } from 'react'
import { setInitialState } from './features/body/home/ourteam/OurTeamSlice'
import { useDispatch } from 'react-redux'
import Services from './features/body/services/Services.jsx'
import Products from './features/body/products/Products.jsx'
import Contact from './features/body/contact/Contact'
import Home from './features/body/home/Home.jsx'
import Stylists from './features/body/stylists/Stylists'
import RootLayout from './RootLayout'
import { dataRef } from './firebase';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} ></Route>
      <Route path="/stylists" element={<Stylists />} />
      <Route path='/stylists/:name' element={<Stylist />} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />

    </Route>
  )
)

function App() {
  const dispatch = useDispatch();

  useEffect(() => {

    dataRef.ref().child('Stylers').on('value', data => {
      const getData = Object.values(data.val());
      dispatch(setInitialState({
        state: getData
      }))
    })
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
