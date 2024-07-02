import React from "react";
import './ActiveProjects.scss';
import basement from '../../assets/images/basement.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import bedroom from '../../assets/images/bedroom.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import livingroom from '../../assets/images/livingroom.jpg'

function ActiveProjects() {
  return (
    <main className="active-projects">
      <h2 className="active-projects__header">Your active projects</h2>
      <section className="active-projects__list">
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src={basement} />
          <div className="active-projects__details">
            <h3 className="active-projects__details-heading">Bathroom Remodel</h3>
            <p className="active-projects__details-paragraph">3 quotes 1 new message</p>
          </div>
        </article>
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
      </section>
    </main>
  );
}

export default ActiveProjects;
