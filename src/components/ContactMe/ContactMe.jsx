import React from 'react'
import './ContactMe.scss'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';


function ContactMe() {
  return (
    <section className='contactme'>
        <h2 className='contactme__title'>Contact Info</h2>
        <article className='contactme__container'>
            <EmailOutlinedIcon />
            <div className='contactme__details'>
                <h3>Email</h3>
                <p>555-555-5555</p>
                <p>kelvintsang@gmail.com</p>
            </div>
        </article>
        <article className='contactme__container'>
            <HomeOutlinedIcon />
            <div className='contactme__details'>
                <h3>Address</h3>
                <p>123 main st, springfield, IL, 21111</p>
            </div>
        </article>
        <article className='contactme__container'>
            <VerifiedUserOutlinedIcon />
            <div className='contactme__details'>
                <h3>License</h3>
                <p>Licensed General Contractor</p>
            </div>
        </article>
    </section>
  )
}

export default ContactMe