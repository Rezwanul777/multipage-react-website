import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { useGlobalContext } from './Context'

const Services = () => {
  const {services}=useGlobalContext()
  console.log(services)
  return (
    <Wrapper className="section">
      <h2 className='common-heading'>Our Services</h2>
      <div className='grid grid-container grid-three-column'>
        return
        {
          services.map((curElem)=>{
            const{id,image,name,description}=curElem
            return( 
            <div key={id} className="card">
              <figure>
                <img src={image}alt={name} />
              </figure>
              <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
           </div>)
          })
        }
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.section``

export default Services