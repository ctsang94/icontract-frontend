import React from "react";
import { Button } from "@mui/material";
import './Landing.scss';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <head>
        <title>Welcome to i-Contract</title>
      </head>
      <main className='landing'>
        <h1 className='landing__title'>iContract</h1>
        <p className='landing__text'>The most trusted platform on home renovation</p>
        <div className="landing__buttons">
            <Link to='/homeowner'><button className='landing__button'>Homeowner</button></Link>
            <Link to='/contractor'><button className='landing__button'>Contractor</button></Link>
        </div>
      </main>
    </>
  );
}

export default Landing;
