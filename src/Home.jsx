import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data={
    name:"REZ TECH",
    image:"./images/hero.svg"
  }
  return (
    
     <HeroSection {...data}/>
    
  )
}

export default Home