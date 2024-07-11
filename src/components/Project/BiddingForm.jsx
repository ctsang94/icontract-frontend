import React, { useState } from 'react';

const BiddingForm = ({ onBidSubmit }) => {
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBidSubmit({ amount, comment });
    setAmount('');
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comment: </label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit">Submit Bid</button>
    </form>
  );
};

export default BiddingForm;
