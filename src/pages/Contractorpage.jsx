import React from 'react'
import Contractor from '../components/Contractor/Contractor'
import AboutMe from '../components/AboutMe/AboutMe'
import Portfolio from '../components/Portfolio/Portfolio'
import BasicTimeline from '../components/Timeline/Timeline'
import ContactMe from '../components/ContactMe/ContactMe'
import Chat from '../components/Chat/Chat.jsx'
import './Contractorpage.scss'

function Contractorpage() {
  return (
    <main>
        <div className='contractor__top'>
          <Contractor />
          <AboutMe />
        </div>
        <h2 className='portfolio__title'>Portfolio</h2>
        <div className='contractor__mid'>
          <Portfolio />
          <BasicTimeline />
        </div>
        <ContactMe />
        <Chat />
    </main>
  )
}

export default Contractorpage