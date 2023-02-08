import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import {  useGlobalContext } from '../Context';
import { Button } from './Button';


const HeroSection = () => {
 // const {fname,title}=useContext(AppContext)
 const {name,image}=useGlobalContext()
   return (
    <Wrapper>
      <div className='container grid grid-two-column'>
      <div className="section-hero-data">
         <p className='hero-top-data'>This is me</p>
         <h1 className='hero-heading'>{name}</h1>
         <p className='hero-para'>I am {name}  learning stack web development course on Ostad and learn the most in-demand website coding skills with the help of real-world experts</p>

         <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
      </div>
      <div className="section-hero-image">
         <picture>
            <img src={image} alt="hero image" className="hero-img " />
         </picture>
      </div>
      </div>
    </Wrapper>
   );
};

const Wrapper=styled.section`
padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }
`

export default HeroSection;