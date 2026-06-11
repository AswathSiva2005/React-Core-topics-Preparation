import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Pages/Hero.jsx'
import Services from './Pages/Services.jsx'
import Work from './Pages/Work.jsx'
import About from './Pages/About.jsx'
import Reviews from './Pages/Reviews.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import './Css/app.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/reviews' element={<Reviews/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App