import React from "react";
import './ActiveProjects.scss';
import basement from '../../assets/images/basement.jpg'
import bathroom from '../../assets/images/homereno1.jpeg'
import bedroom from '../../assets/images/bedroom.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import livingroom from '../../assets/images/livingroom.jpg'
import { useState, useEffect } from "react";
import axios from "axios";

function ActiveProjects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
      try {
          const response = await axios.get('https://icontract-backend.onrender.com/projects');
          setProjects(response.data);
      } catch (error) {
          console.error('Error fetching contractors:', error);
      }
  };

  useEffect(() => {
      getProjects();
  }, []);

  return (
    <main className="active-projects">
      <h2 className="active-projects__header">Your active projects</h2>
      <section className="active-projects__list">
        {projects.map(project=>(<article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src={project.image} />
          <div className="active-projects__details">
            <h3 className="active-projects__details-title">{project.projectType}</h3>
            <p className="active-projects__details-paragraph"> {project.quotes} quotes {project.message} new message</p>
            <p className="active-projects__details-progress"> {project.status}</p>
          </div>
        </article>))}
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src={kitchen} />
          <div className="active-projects__details">
            <h3 className="active-projects__details-heading">Bathroom Remodel</h3>
            <p className="active-projects__details-paragraph">3 quotes 1 new message</p>
          </div>
        </article>
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src={livingroom}/>
          <div className="active-projects__details">
            <h3 className="active-projects__details-heading">Bathroom Remodel</h3>
            <p className="active-projects__details-paragraph">3 quotes 1 new message</p>
          </div>
        </article>
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src={bathroom}/>
          <div className="active-projects__details">
            <h3 className="active-projects__details-heading">Bathroom Remodel</h3>
            <p className="active-projects__details-paragraph">3 quotes 1 new message</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ActiveProjects;
