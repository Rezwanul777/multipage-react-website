import React, { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Contact from './Contact'
import { useGlobalContext } from './Context'
import Services from './Services'

const Home = () => {
  // const data={
  //   name:"REZ TECH",
  //   image:"./images/hero.svg"
  // }

  const {updateHomePage}=useGlobalContext()
  useEffect(() => updateHomePage(), []);
  
  return (
   <>
    
    <HeroSection/>
     <Services/>
     <Contact/>
     </>
    
  )
}

export default Home