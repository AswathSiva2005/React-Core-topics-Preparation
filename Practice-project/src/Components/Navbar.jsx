import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
        <nav className='navBar'>
                <img style={{height: '70px',marginLeft:'80px',alignItems:'center'}} src={logo}/>
            <ul className='ul'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/product'>Product</Link>
                    <Link className='links' to='/services'>Services</Link>
                    <Link className='links' to='/founder'>Founder</Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
