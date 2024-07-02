import React from 'react'
import Contractor from '../components/Contractor/Contractor'
import AboutMe from '../components/AboutMe/AboutMe'
import Portfolio from '../components/Portfolio/Portfolio'
import BasicTimeline from '../components/Timeline/Timeline'
import ContactMe from '../components/ContactMe/ContactMe'

function Contractorpage() {
  return (
    <main>
        <Contractor />
        <AboutMe />
        <Portfolio />
        <BasicTimeline />
        <ContactMe />
    </main>
  )
}

export default Contractorpage