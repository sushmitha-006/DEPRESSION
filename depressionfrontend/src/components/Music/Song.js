import React from 'react';

const Song = ({ song }) => {
  return (
    <div>
    <div className="song">
      <img src={song.image} alt="" className="song-image"/>
      <h3>{song.title} by {song.artist}</h3>
      <a href={song.url} target="_blank" rel="noopener noreferrer">
        Play on Spotify
      </a>
    </div>
    <div>
        <br/>
      <br/>
      <br/>
    </div>
    </div>
  );
};

export default Song;