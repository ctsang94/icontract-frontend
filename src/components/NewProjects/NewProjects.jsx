import React from "react";
import "./NewProjects.scss";
import basement from '../../assets/images/basement.jpg'
import bathroom from '../../assets/images/bathroom.jpg'
import bedroom from '../../assets/images/bedroom.jpg'
import kitchen from '../../assets/images/kitchen.jpg'
import livingroom from '../../assets/images/livingroom.jpg'
import { useState } from "react";
import Form from "../Form/Form";
import { Modal} from "@mui/material";
import {Box} from "@mui/material";

const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50rem',
  height: '50rem',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function NewProjects() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const images= [{'image': basement, 'project': 'Basement Remodeling'},{'image': bathroom, 'project': 'Bathroom Remodeling'} , {'image' :  bedroom, 'project': 'Bedroom Remodeling' }, {'image': kitchen , 'project': 'Kitchen Remodeling' }, {'image': livingroom, 'project': 'Living Room Remodeling'} ];
 
  return (
    <main className="new-projects">
      <h2 className="new-projects__title">Get started on your next project</h2>
      <section className="new-projects__list">
        {images.map((item, index) => (
          <article key={index} className="new-projects__item">
            <img onClick={handleOpen}
              className="new-projects__item-image"
              src={item.image}
            ></img>
            <h3 className="new-projects__item-title">{item.project}</h3>
          </article>
        ))}
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box" sx={style}>
          <Form handleClose={handleClose}/>
        </Box>
      </Modal>
    </main>
  );
}

export default NewProjects;
