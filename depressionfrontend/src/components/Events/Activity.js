import React from 'react';
import './Activity.css';

const Activity = ({ name, image }) => {
  const handleBookNow = () => {
    alert(`Booking for ${name}`);
    // Redirect to payment page logic goes here
  };

  return (
    <div className="activity">
      <img src={image} alt={name} className="activity-image" />
      <div className="activity-content">
        <h3>{name}</h3>
        <button onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default Activity;
