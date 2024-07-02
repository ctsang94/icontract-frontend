import React from "react";
import "./NewProjects.scss";
import homeProjects from "../../data/homeRenovationProjects.json";

function NewProjects() {
  return (
    <main className="new-projects">
      <h2 className="new-projects__title">Get started on your next project</h2>
      <section className="new-projects__list">
        {homeProjects.map((item) => (
          <article className="new-projects__item">
            <img
              className="new-projects__item-image"
              src={item.image_url}
            ></img>
            <h3 className="new-projects__item-title">{item.project}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}

export default NewProjects;
