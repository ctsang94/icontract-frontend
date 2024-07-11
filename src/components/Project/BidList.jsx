import React from 'react';

const BidList = ({ bids }) => (
  <ul>
    {bids.map((bid, index) => (
      <li key={index}>
        <p>Amount: {bid.amount}</p>
        <p>Comment: {bid.comment}</p>
      </li>
    ))}
  </ul>
);

export default BidList;