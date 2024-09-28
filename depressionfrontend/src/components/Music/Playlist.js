import React from 'react';
import { useParams } from 'react-router-dom';
import Song from "./Song.js"


const Playlist = () => {
  const { mood } = useParams();

  const playlists = {
    fear: [
      { id: 1, title: 'In the Morning Light', artist: 'Artist 1', url: 'https://open.spotify.com/track/4NXcyycHaTGW8Gzn87awrm?si=313bac688ad84826', image: 'https://media.istockphoto.com/id/1284856826/photo/happy-woman-stretching-in-bed-after-waking-up-happy-young-girl-greets-good-day.jpg?s=612x612&w=0&k=20&c=MKdF0T5N_fY1YG8YVCi1DUKaKwmO_WKOy-CMzjVFAJ8=' },
      { id: 2, title: 'Deep Forest', artist: 'Artist 2', url: 'https://open.spotify.com/track/2T06eImgWRU4Lq6gdoShOo?si=9bf4eda9f4a64c82', image: 'https://media.istockphoto.com/id/1051360314/photo/tunnel-of-love.jpg?s=612x612&w=0&k=20&c=XyUYdNmBUCQl7p_8m7xXKnden_FLef0MdBWLUgNqlvI='}
    ],
    anxiety: [
      { id: 3, title: 'Natural Hypnosis', artist: 'Artist 3', url: 'https://open.spotify.com/track/4XFtIuzWTrswC1howKnMxd?si=f9a3dc75363f4798', image: 'https://media.istockphoto.com/id/1317362753/photo/double-exposure-shape-music-relaxation-girl-by-sea.jpg?s=1024x1024&w=is&k=20&c=vmP2VtbARU5633zvNaJcnj52Fs4UM6t8f0IU8y3ik8A=' },
      { id: 4, title: 'Waters Edge', artist: 'Artist 4', url: 'https://open.spotify.com/track/66oKT3dzLhHuYLFq9aO1JQ?si=77aa022acab34ae1', image:'https://media.istockphoto.com/id/969085876/photo/soft-wave-lapped-the-sandy-beach-summer-background.jpg?s=612x612&w=0&k=20&c=GCi6UvQwxiW1Cy78et_5jBpRTkWIYxAKVTTU5qid3Vg=' }
    ],
    calm: [
      { id: 5, title: 'Walking on Sunshine', artist: 'Artist 5', url: 'https://open.spotify.com/track/61E23kcxSufjDPd2AKOqqw?si=0870311f850a48d2', image: 'https://media.istockphoto.com/id/1459285153/photo/caucasian-woman-hiking-in-the-nature-during-sunset.jpg?s=612x612&w=0&k=20&c=aOG6-joE0EhY5XLbW4MN2LCesmZfz_Y65ag1ws9ONPI=' },
      { id: 6, title: 'Serene Sounds', artist: 'Artist 6', url: 'https://open.spotify.com/track/45Lk0InHOavdt1BkYCeHgP?si=47d44b4dacfe4db6', image: 'https://media.istockphoto.com/id/1294500868/photo/relaxed-woman-listening-to-music-with-headphones-at-home.jpg?s=612x612&w=0&k=20&c=y3alC3QT5EU5NdJZVTi8mTxS0uXI0mbDDwqhsXOjNGg='}
    ],
    Binauralbeats: [
      { id: 7, title: 'Binaural beats 7Hz-Theta waves', artist: 'Artist 7', url: 'https://open.spotify.com/track/0gCQDcEcN36kbX273Df01O?si=f2f50c07d3684074', image: 'https://media.istockphoto.com/id/1133883348/photo/turntable-vinyl-record-player-on-the-background-of-a-sunset-over-the-lights-city-sound.jpg?s=612x612&w=0&k=20&c=yCA5xf6QQeb4xLhES2e_JwkIP6I9oR5Yu-PPEpU3fBQ=' },
      { id: 8, title: 'Volkn-Solo version', artist: 'Artist 8', url: 'https://open.spotify.com/track/2dtfGfidL6w9dXCehcmUji?si=521feb76086b41e6', image: 'https://media.istockphoto.com/id/1363865216/photo/female-breathing-listening-to-music-in-a-lavender-field.jpg?s=612x612&w=0&k=20&c=y6K73TLX5dc3Sb9erjaw19mqdsRzMRjZQa_nrSNPSJY=' }
    ]
  };

  return (
    <div className="playlist">
      <h2>{mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h2>
      {playlists[mood]?.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
};

export default Playlist;
