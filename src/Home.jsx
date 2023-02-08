import React, { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'

const Home = () => {
  // const data={
  //   name:"REZ TECH",
  //   image:"./images/hero.svg"
  // }

  const {updateHomePage}=useGlobalContext()
  
  useEffect(()=>{
    updateHomePage()
  },[])
  return (
    
     <HeroSection/>
    
  )
}

export default Home