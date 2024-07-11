import React, { useEffect, useState } from 'react';
import Contractor from '../components/Contractor/Contractor';
import AboutMe from '../components/AboutMe/AboutMe';
import Portfolio from '../components/Portfolio/Portfolio';
import BasicTimeline from '../components/Timeline/Timeline';
import ContactMe from '../components/ContactMe/ContactMe';
import Chat from '../components/Chat/Chat.jsx';
import './Contractorpage.scss';
import axios from 'axios';
import { ControlCameraTwoTone } from '@mui/icons-material';

function Contractorpage() {
  const [contractors, setContractors] = useState([]);

  const getContractors = async () => {
    try {
      const response = await axios.get('http://localhost:5050/contractors');
      setContractors(response.data);
    } catch (error) {
      console.error('Error fetching contractors:', error);
    }
  };

  useEffect(() => {
    getContractors();
  }, []);

  return (
    <main className='container'>
      <h1> Contractors </h1>
      <section className='contractors'>
        {contractors.map(contractor => (
          <section className='contractors__card'>
            <img className='contractors__image' src={contractor.image} />
            <h2 className='contractors__title'>{contractor.name}</h2>
            <span className='contractors__review'>{contractor.rating} ({contractor.reviews} reviews) </span>
          </section>
        ))}
      </section>
    </main>
  );
}

export default Contractorpage;
