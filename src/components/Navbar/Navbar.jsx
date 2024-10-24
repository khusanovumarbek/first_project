import React from 'react'
import logo from '../../img/logo.png'
import icon1 from '../../img/icon1.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="Container">
      <div className="Navbar_left">
      <img src={logo} alt="" />
      </div>
      <div className="Navbar_right">
        <Link to={'/'}>Product</Link>
        <Link to={'/customers'}>Customers</Link>
        <Link to={'/pricing'}>Pricing</Link>
        <Link to={'/resources'}>Resources</Link>
        <button className='btn'>Sign In</button>
        <button className='btnn'>Sign Up</button>
        <button className='icon_btn'> <img src={icon1} alt="" /> </button>
      </div>
      </div>
     
            
    </div>
  )
}

export default Navbar
