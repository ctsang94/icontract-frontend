import React, { useState } from 'react';
import './Header2.scss';
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import image from '../../assets/images/img.jpg';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Header2 = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <header className="header">
      <section className="header__left">
        <div className="header__icon">
          <ConstructionIcon />
        </div>
        <h1 className="header__title">i-Contract</h1>
      </section>
      <nav className="header__right">
        <div className="header__links">
          <Link to='/homeowner' className="header__link">My Projects</Link>
          <Link to='/contractor' className="header__link">Find Pros</Link>
          <Link to='/' className="header__link">Help</Link>
        </div>
        <Button onClick={handleOpen} variant="contained" className="header__button">
          <span className="header__button-text">Post a project</span>
        </Button>
        <img className="header__profile-pic" src={image} alt="Profile" />
      </nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box">
          <Form />
        </Box>
      </Modal>
    </header>
  );
};

export default Header2;
