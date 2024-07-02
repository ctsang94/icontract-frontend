import React from "react";
import "./NewProjects.scss";
import homeProjects from "../../data/homeRenovationProjects.json";
import basement from '../../assets/images/basement.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import bedroom from '../../assets/images/bedroom.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import livingroom from '../../assets/images/livingroom.jpg'
import HoverCarousel from 'hover-carousel'

function NewProjects() {

  const images= [{'image': basement, 'project': 'Basement Remodeling'},{'image': bathroom, 'project': 'Bathroom Remodeling'} , {'image' :  bedroom, 'project': 'Bedroom Remodeling' }, {'image': kitchen , 'project': 'Kitchen Remodeling' }, {'image': livingroom, 'project': 'Living Room Remodeling'} ];
  return (
    <main className="new-projects">
      <h2 className="new-projects__title">Get started on your next project</h2>
      <section className="new-projects__list">
        {images.map((item) => (
          <article className="new-projects__item">
            <img
              className="new-projects__item-image"
              src={item.image}
            ></img>
            <h3 className="new-projects__item-title">{item.project}</h3>
          </article>
        ))}
      </section>
    </main>
  );
}

export default NewProjects;
