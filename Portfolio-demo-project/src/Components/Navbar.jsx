import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { MdSunny } from "react-icons/md";
import Hero from '../Pages/Hero.jsx'

const Navbar = () => {
  function lightMode(){
    alert("Light mode")
  }
  return (
    <header className='header'>

      <nav className='navBar'>

        <ul>
            <Link style={{fontSize:'30px',color:'#ff6b2b',textDecoration:'none',marginRight:'300px'}} to=''>Aswath</Link>
            <Link className='links' to='services'>Services</Link>
            <Link className='links' to='work'>Work</Link>
            <Link className='links' to='about'>About</Link>
            <Link className='links' to='reviews'>Reviews</Link>
            <Link className='links' to='blog'>Blog</Link>
            <Link className='links' to='contact'>Contact</Link>

        <button onClick={lightMode} style={{marginLeft:'150px'}}><MdSunny /></button>
        <button style={{border:'1px solid black',height:'25px',backgroundColor:'#ff6b2b',marginLeft:'50px',borderRadius:'5px'}}>Hire me</button>
        </ul>
      
      </nav>

    </header>
  )
}

export default Navbar