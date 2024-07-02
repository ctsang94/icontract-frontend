import React from "react";
import './ActiveProjects.scss';

function ActiveProjects() {
  return (
    <main className="active-projects">
      <h2 className="active-projects__header">Your active projects</h2>
      <section className="active-projects__list">
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src="https://via.placeholder.com/40x40" />
          <div className="active-projects__details">
            <h3 className="active-projects__details-heading">Bathroom Remodel</h3>
            <p className="active-projects__details-paragraph">3 quotes 1 new message</p>
          </div>
        </article>
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src="https://via.placeholder.com/40x40"/>
          <div className="active-projects__details">
            <h3 className="active-projects__details-heading">Bathroom Remodel</h3>
            <p className="active-projects__details-paragraph">3 quotes 1 new message</p>
          </div>
        </article>
        <article className="active-projects__item">
          <img className="active-projects__image" alt="Project" src="https://via.placeholder.com/40x40"/>
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
