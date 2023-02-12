import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import Nav from './Nav'
import styled from 'styled-components'
import { GlobalStyle } from '../GlobalStyle'

const Header = () => {
  return (
    <>
  <MainHeader>
    <GlobalStyle/>
  <NavLink to='/'>
      <img src={logo} alt="logo is not find" className='logo'/>
   </NavLink>
   <Nav/>
  </MainHeader>
    </>
  )
}
const MainHeader=styled.header`
padding: 0 4.8rem;
height: 10rem;
background-color:${({theme})=>theme.colors.bg};
display:flex;
justify-content: space-between;
align-items: center;
.logo{
  height: 6.5rem;
  max-width: 100%;
}

`
export default Header