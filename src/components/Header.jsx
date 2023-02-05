import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import Nav from './Nav'

const Header = () => {
  return (
    <>
  <header>
  <NavLink to='/'>
      <img src={logo} height="60px" width={60} alt="logo is not find" />
   </NavLink>
   <Nav/>
  </header>
    </>
  )
}

export default Header