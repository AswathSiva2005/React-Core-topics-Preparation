import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='navBar'>
            <ul className='ul'>
                <h3 style={{display:'inline', marginLeft:'30px', fontSize:'25px', fontFamily:'sans-serif'}}>
                    <a style={{color:'black',textDecoration:'none'}} href="/">Blog</a>
                </h3>
                <Link className='home' to='/'>Home</Link>
                <Link className='about' to='/about'>About</Link>
                <Link className='contact' to='/contact'>Contact</Link>
            </ul>
        </nav>
    </>
  )
}

export default Navbar