import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Services from './Pages/Services'
import Founder from './Pages/Founder'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
  <div className='wholeDiv'>
        <BrowserRouter>
        {/* NAVBAR */}
        <Navbar />
        
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/services' element={<Services />} />
              <Route path='/founder' element={<Founder />} />
          </Routes>
        </BrowserRouter>
  </div>
    </>
  )
}

export default App