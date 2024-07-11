import React from 'react'
import Project from './Project'

function Projectpage() {
    const project = {
        title: 'Kitchen Renovation',
        description: 'Looking to renovate my kitchen. Need a contractor.',
      };
      
  return (
    <div>
        <h1>Homeowner Renovation App</h1>
        <Project project={project} />
  </div>
  )
}

export default Projectpage