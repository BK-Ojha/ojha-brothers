import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Welcome from './components/Welcome'
import CarBookingServices from './components/CarBookingServices'
import TruckLoadingServices from './components/TruckLoadingServices'
import NavbarComponents from './components/NavbarComponents'
import CarData from './components/CarData'
import WhatsappChat from './components/WhatsappChat'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const handleWelcome = () => {
    setShowWelcome(false)
  }
  return (
    <>
      {showWelcome ? (
        <Welcome onFinish={handleWelcome} />
      ) : (
        <Router>
          <NavbarComponents />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/carbookingservices"
              element={<CarBookingServices />}
            />
            <Route path="/cardata" element={<CarData />} />
            <Route
              path="/truckloadingservices"
              element={<TruckLoadingServices />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/whatsappchat" element={<WhatsappChat />} />
          </Routes>
        </Router>
      )}
    </>
  )
}

export default App
