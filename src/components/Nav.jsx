import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {
   const Nav=styled.nav`
.nav-list{
   display:flex;
   gap:4.8rem;
   li{
      list-style:none;
       .navbar-link{
         &:link,
         &:visited{
            display:inline-block;
            text-decoration:none;
            font-size:1.8rem;
            text-transform:uppercase;
            color:${({theme})=>theme.colors.black};
            transition:color 0.3s linear
         }
         &:hover,
         &:active{
            color:${({theme})=>theme.colors.helper}
         }
       }
}
   }
   `
  return (
   <Nav>
       <div className='nav-icon'>
      <ul className='nav-list'>
         <li>
            <NavLink className="navbar-link" to='/'>Home</NavLink>
         </li>
         <li>
            <NavLink className="navbar-link" to='/about'>About</NavLink>
         </li>
         <li>
            <NavLink className="navbar-link" to='/services'>Services</NavLink>
         </li>
         <li>
            <NavLink className="navbar-link" to='/contact'>Contact</NavLink>
         </li>
      </ul>
      </div>
   </Nav>
  )
}

export default Nav