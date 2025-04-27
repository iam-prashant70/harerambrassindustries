import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import About from './Pages/about/About'
import Productsp from './Pages/Productsp/Productsp'
import Contactus from './Pages/Contact/Contactus'
import Footer from './component/Footer/Footer'
import ProductDetails from './Pages/Details/ProductDetails'
import ScrollToTop from './component/Scrolltop/Scrolltotop'
import Service from './Pages/ServicePage/Service'
import DevsPage from './Pages/Devs/Devspage'
import favicon from '/images/logowhite.png'
// Then in useEffect or similar:
document.querySelector("link[rel='icon']").href = favicon

function App() {

  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Productsp />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Service />} />
          <Route path="/devs" element={<DevsPage />} />
        </Routes>
      <Footer />

    </>
  )
}

export default App
