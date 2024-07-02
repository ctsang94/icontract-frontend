import React from 'react'
import './Portfolio.scss'
import basement from '../../assets/images/basement.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import bedroom from '../../assets/images/bedroom.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import livingroom from '../../assets/images/livingroom.jpg'
import HoverCarousel from 'hover-carousel'

function Portfolio() {
  const images= [basement, bathroom, bedroom, kitchen, livingroom];

  return (
    <section className='portfolio'>
        <h2 className='portfolio__title'>Portfolio</h2>
        <article className='portfolio__images'>
          <HoverCarousel className='portfolio__image' images={images} />
        </article>

    </section>
    
  )
}

export default Portfolio