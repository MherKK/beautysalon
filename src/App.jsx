import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Stylist from './features/body/stylists/Stylist'
import Services from './features/body/services/Services.jsx'
import Products from './features/body/products/Products.jsx'
import Contact from './features/body/contact/Contact'
import Home from './features/body/home/Home.jsx'
import Stylists from './features/body/stylists/Stylists'
import RootLayout from './RootLayout'
import Appointments from './features/body/appointment/Appointments'
import HairArtists from './features/body/appointment/styles/HairArtists'
import MakeUpArtists from './features/body/appointment/styles/MakeUpArtists'
import HairStylingServices from './features/body/services/HairStylingServices'
import HairColoringServices from './features/body/services/HairColoringServices'
import MakeUpServices from './features/body/services/MakeUpServices'
import TreatmentServices from './features/body/services/TreatmentServices'
import ArtistAppointment from './features/body/appointment/styles/ArtistAppointment'
import TimeTable from './features/body/appointment/styles/TimeTable/TimeTable'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} ></Route>
      <Route path="/stylists" element={<Stylists />} />
      <Route path='/stylists/:name' element={<Stylist />} />
      <Route path='/services' element={<Services />} >
        <Route path='styling' element={<HairStylingServices />} />
        <Route path='coloring' element={<HairColoringServices />} />
        <Route path='makeup' element={<MakeUpServices />} />
        <Route path='treatment' element={<TreatmentServices />} />
      </Route>
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/appointments' element={<Appointments />}>
        <Route path='HairStylers' element={<HairArtists />} />
        <Route path='MakeUpStylers' element={<MakeUpArtists />} />
      </Route>

      <Route path='/appointments' element={<Appointments />}>
        <Route path='MakeUpStylers/:name' element={<ArtistAppointment />} >
          <Route path=':day' element={<TimeTable />} />
        </Route>
        <Route path='HairStylers/:name' element={<ArtistAppointment />} >
          <Route path=':day' element={<TimeTable />} />
        </Route>
      </Route>
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
