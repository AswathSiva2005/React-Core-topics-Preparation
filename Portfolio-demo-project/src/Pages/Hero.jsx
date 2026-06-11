import React from 'react'
import '../Css/hero.css'
import Work from './Work.jsx'
import Services from './Services.jsx'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpeg'

const Hero = () => {
  const workHeading = {
    color:'#ff6b2b',
    fontFamily:'sans-serif'
  }

  const hii = {
    color:'white',
    fontFamily:'sans-serif',
    fontSize: '50px'
  }

  const para = {
    color: '#a1a1aa',
    fontFamily:'sans-serif'
  }

  const viewWorkButt = {
    backgroundColor:'white',
    borderRadius:'30px',
    padding:'20px',
    border:'1px white solid',
    fontFamily:'sans-serif',
    cursor:'pointer'
  }

  const getTouchButt = {
    color:'#a1a1aa',
    borderRadius:'30px',
    padding:'20px',
    border:'1px white solid',
    cursor:'pointer',
    marginLeft:'100px',
    fontFamily:'sans-serif'
  }

  
  return (
    <div className='wholeDiv'>
      <div className='contentDiv'>
        <h4 style={workHeading}>Available for work</h4> <br/>
        <h1 style={hii}>Hi, I'm <span style={{color:'#ff6b2b'}}>Aswath</span></h1> <br/>

        <p style={para}>Freelance UI/UX Designer & Frontend Developer. <br/> 
          I design and build digital products that  people <br/>
          love to use — fast, clean, and accessible.</p> <br/>

          <Link to="/Work"><button  style={viewWorkButt}>View my work <IoIosArrowDown /></button></Link>
          <Link to="/Services"><button style={getTouchButt}>Get in touch <IoIosArrowDown /></button></Link>

          <img className='img' src={Profile} alt='profile'/>
      
      </div>
    </div>
  )
}

export default Hero