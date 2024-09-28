// src/SuccessfulStories.js

import React from 'react';
import './Successstories.css';

const stories = [
  {
    title: 'A Reflection on How I Dug Myself Out of the Millennial Mental Health Decline',
    author: 'David Ly Khim',
    description: 'David chronicles the steps he took to improve his mental health after a cross-country move at the age of 23.',
    url: 'https://medium.com/@davidlykhim/a-reflection-on-how-i-dug-myself-out-of-the-millennial-mental-health-decline-831ae56e721c'
  },
  {
    title: 'My Mental Health Toolbelt',
    author: 'Taylor Otwell',
    description: 'This is a straightforward perspective with actionable tips for anyone that works from home or spends most of their time sitting at a desk.',
    url: 'https://medium.com/@taylorotwell/my-mental-health-toolbelt-9b9fdd4ae149'
  },
  {
    title: 'Bipolar Confessions',
    author: 'Alicia T. Rust',
    description: 'Thanks to Alicia for sharing such a heartfelt confession from the perspective of motherhood.',
    url: 'https://medium.com/publishous/bipolar-confessions-4be3eb0243e4'
  },
  {
    title: 'NITAI STORY',
    author: 'Nitai',
    description: '“The most important thing about this journey you’re going through is building a better relationship with yourself.”',
    url: 'https://headsupguys.org/stroke-social-anxiety-depression-nitai/'
  },
  {
    title: 'How People With Depression Interact With The World Differently',
    author: 'Joseph',
    description: 'Nothing about depression is easy. But the way it affects a person’s daily life is arguably the most difficult part of the disorder.',
    url: 'https://www.huffpost.com/entry/depression-interact-with-world_n_594d45e1e4b02734df2a1865'
  },
  {
    title: 'Finding the Face of Depression in a Mirror',
    author: 'Stan Merly',
    description: 'Robin Williams passed away exactly two weeks to the day after I was diagnosed with chronic depression and prescribed an anti-depressant to deal with the problem.',
    url: 'https://www.huffpost.com/entry/finding-the-face-of-depre_b_5672876?ncid=edlinkushpmg00000277'
  }
];

function SuccessfulStories() {
  return (
    <div className="successful-stories">
      <h1 style={{ color: 'black' }}><center>Successful Stories</center></h1>
      <h4><i><center>-"Inspiring journeys that light the path out of darkness!"</center></i></h4>
      <div className="stories-list">
        {stories.map((story, index) => (
          <div className="story-row" key={index}>
            <div className="story-info">
              <h2>{story.title}</h2>
              <p>Author: {story.author}</p>
              <p className="description">{story.description}</p>
            </div>
            <a className="read-more-btn" href={story.url} target="_blank" rel="noopener noreferrer">
              Click here
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessfulStories;

