import './Music.css';
import React from 'react';
import Home from './Home';
import Playlist from './Playlist';
import { useParams } from 'react-router-dom';

const Music = () => {

  const { mood } = useParams();

  return (
    <div>
      {mood ? <Playlist mood={mood} /> : <Home />}
    </div>
  );

  };

export default Music;