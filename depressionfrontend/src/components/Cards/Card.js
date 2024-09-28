import React, { useState } from 'react';
import './Cards.css';

const Card = ({ frontUrl, backUrl }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="card-inner">
        <div className="card-front" style={{ backgroundImage: `url(${frontUrl})` }} />
        <div className="card-back" style={{ backgroundImage: `url(${backUrl})` }} />
      </div>
    </div>
  );
};

export default Card;
