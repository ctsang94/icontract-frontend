import React, { useState } from 'react';
import './Header2.scss';
import Button from '@mui/material/Button';
import ConstructionIcon from '@mui/icons-material/Construction';
import image from '../../assets/images/img.jpg';
import { Link } from 'react-router-dom';

const Header2 = () => {

  return (
    <header className="header">
      <Link to='/' className='header__link' ><section className="header__left">
        <div className="header__icon">
          <ConstructionIcon fontSize='large' color='black'/>
        </div>
        <p className="header__title">iContract</p>
      </section></Link>
      <nav className="header__right">
        <div className="header__links">
          <Link to='/homeowner' className="header__link">My Projects</Link>
          <Link to='/contractor' className="header__link">Contractors</Link>
          {/* <Link to='/' className="header__link">Help</Link> */}
        </div>
        {/* <Button variant="contained" className="header__button">
          <span className="header__button-text">Post a project</span>
        </Button> */}
        <Link to='/aboutme'><img className="header__profile-pic" src={image} alt="Profile" /></Link>
      </nav>
    </header>
  );
};

export default Header2;
