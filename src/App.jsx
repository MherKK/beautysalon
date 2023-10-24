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


  useEffect(() => {
    axios.get("http://localhost:3306/").then(res => {
      dispatch(setInitialState({
        state: res.data
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
