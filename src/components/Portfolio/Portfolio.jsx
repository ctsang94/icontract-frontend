import React from 'react'
import './Portfolio.scss'
import basement from '../../assets/images/basement.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import bedroom from '../../assets/images/bedroom.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import livingroom from '../../assets/images/livingroom.jpg'

function Portfolio() {
  return (
    <section className='portfolio'>
        <h2 className='portfolio__title'>Portfolio</h2>
        <article className='portfolio__images'>
            <img className='portfolio__image' src={basement} />
            <img className='portfolio__image' src={bathroom} />
            <img className='portfolio__image' src={bedroom} />
            <img className='portfolio__image' src={kitchen} />
            <img className='portfolio__image' src={livingroom} />
        </article>

    </section>
    
  )
}

export default Portfolio