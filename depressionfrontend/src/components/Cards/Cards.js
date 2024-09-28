import React from 'react';
import Card from './Card'; // Assuming Card.js is in the same directory

const cardData = [
  {
    id: 1,
    frontUrl: 'https://i.pinimg.com/564x/bb/e7/4d/bbe74de787948b39be8e03cd08c6b374.jpg',
    backUrl: "https://i.pinimg.com/564x/92/cd/7d/92cd7d28b523e9fa86d980bd9175408d.jpg",
  },
  {
    id: 2,
    frontUrl: 'https://i.pinimg.com/564x/7f/94/72/7f9472aec44afd1ec3be6382ccd379ae.jpg',
    backUrl: 'https://i.pinimg.com/564x/54/56/60/545660e075906b91da25ea1955087664.jpg',
  },
  {
    id: 3,
    frontUrl: 'https://i.pinimg.com/564x/40/c7/a7/40c7a7544716a13bad63e37f2ef449bc.jpg',
    backUrl: 'https://i.pinimg.com/564x/24/8b/41/248b41ff7814763141f9630606829ddc.jpg',
  },
  {
    id: 4,
    frontUrl: 'https://i.pinimg.com/564x/46/1d/a3/461da3fc4ce3534d2192f9d4087f71a9.jpg',
    backUrl: 'https://i.pinimg.com/564x/07/33/81/0733814291350e95f5e25179c811f7cd.jpg',
  },
  {
    id: 5,
    frontUrl: 'https://i.pinimg.com/564x/ba/7f/9c/ba7f9c744ec91d6e2209316965e0dc6e.jpg',
    backUrl: 'https://i.pinimg.com/564x/43/29/b0/4329b04e0866182d6b52dda1e7a8d347.jpg',
  },
  {
    id: 6,
    frontUrl: 'https://i.pinimg.com/736x/0d/89/0c/0d890cd8c1500f724384f96c9d0241ef.jpg',
    backUrl: 'https://i.pinimg.com/564x/94/9b/82/949b821851f968a98c56da6bb5a216e6.jpg',
  },
  {
    id: 7,
    frontUrl: 'https://i.pinimg.com/564x/aa/7a/73/aa7a73a9cddae24300e73c74466b5cb5.jpg',
    backUrl: 'https://i.pinimg.com/564x/59/71/4f/59714f74f11ecbf1533320e576394612.jpg',
  },
  {
    id: 8,
    frontUrl: 'https://i.pinimg.com/564x/af/50/f5/af50f5b320601d5a62b9fd37d3bf746d.jpg',
    backUrl: '',
  },


  // Add more objects for each card
];

const Cards = () => {
  return (
    <div>
      <div>
      <h2>Cards!! A word of Affirmation</h2>
      </div>
      <div className="cards-container">
      {cardData.map(card => (
        <Card key={card.id} frontUrl={card.frontUrl} backUrl={card.backUrl} />
      ))}
      </div>
    </div>
  );
};

export default Cards;


