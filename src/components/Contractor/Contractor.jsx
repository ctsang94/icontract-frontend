import React from 'react'
import { Button } from '@mui/material'
import image from '../../assets/images/img.jpg'
import './Contractor.scss'


function Contractor() {
  return (
    <section className='contractor'> 
        <img className='contractor__image' src={image}/>
        <h2 className='contractor__title'>Kelvin's Home Renovation</h2>
        <span className='contractor__review'>4.9(124 reviews)</span>
        <div className='contractor__buttons'>
            <Button variant='outlined'>Contact Me</Button>
            <Button variant='outlined'>Follow</Button>
        </div>
        
    </section>
  )
}

export default Contractor