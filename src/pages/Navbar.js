import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <div className='Head'>

      <div className='logo'>
        <p>Logo</p>
      </div>
  
      <div className='headerTwo'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/education'>Education</Link>
      </div>
   

    </div>
  )
}
