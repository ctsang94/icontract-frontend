import React, { useState } from 'react';
import BiddingForm from './BiddingForm';
import BidList from './BidList';

const Project = ({ project }) => {
  const [bids, setBids] = useState([]);

  const handleBidSubmit = (bid) => {
    setBids([...bids, bid]);
  };

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <BiddingForm onBidSubmit={handleBidSubmit} />
      <BidList bids={bids} />
    </div>
  );
};

export default Project;