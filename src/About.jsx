import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data={
    name:"Rezwanul Haque",
    image:"./images/about1.svg"
  }
  return <HeroSection {...data}/>
}
export default About