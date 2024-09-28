// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1 style={{ color: 'black' }}>Mood Playlists</h1>
      <div className="buttons">
        <Link to="/playlist/fear"><button>Fear</button></Link>
        <Link to="/playlist/anxiety"><button>Anxiety</button></Link>
        <Link to="/playlist/calm"><button>Calm</button></Link>
        <Link to="/playlist/Binauralbeats"><button>Binauralbeats</button></Link>
      </div>
    </div>
  );
};

export default Home;