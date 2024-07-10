import React from 'react'
import './Portfolio.scss'
import Carousel from '../Carousel/Carousel.jsx'

function Portfolio() {
  // const images = [basement, bathroom, bedroom, kitchen, livingroom];

  

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Portfolio</h2>
      <article className='portfolio__images'>
        <Carousel />
      </article>

    </section>

  )
}

export default Portfolio