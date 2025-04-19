import { useState } from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import About from './Pages/about/About'
import Productsp from './Pages/Productsp/Productsp'
import Contactus from './Pages/Contact/Contactus'
import Footer from './component/Footer/Footer'
import ProductDetails from './Pages/Details/ProductDetails'
import Inquiry from './Pages/Inquiry/Inquiry'

function App() {

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Productsp/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/productdetails" element={<ProductDetails/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/inquiry/:id" element={<Inquiry />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>

    <Footer />

    </>
  )
}

export default App
