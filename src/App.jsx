import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './About'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './Contact'
import Home from './Home'
import Services from './Services'

const App = () => {
  return (
  < BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/services'element={<Services/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App