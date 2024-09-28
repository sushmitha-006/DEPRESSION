import React, { useState } from 'react';
import Level1Quiz from './Level1quiz';
import Level2Quiz from './Level2quiz';
import EmotionCauseForm from './PredictKeywords.js';
import "./Quiz.css" // Ensure the file name matches

function Quiz() {
  const [showLevel1Quiz, setShowLevel1Quiz] = useState(false);
  const [showLevel2Quiz, setShowLevel2Quiz] = useState(false);
  const [emotionDetected, setEmotionDetected] = useState('');
  const [causeDetected, setCauseDetected] = useState('');

  const startLevel1Quiz = (emotion) => {
    <h1>Starting Level 1 quiz for emotion:{emotion}</h1>
    setEmotionDetected(emotion);
    setShowLevel1Quiz(true);
    setShowLevel2Quiz(false);
  };

  const startLevel2Quiz = (cause) => {
    <h1>Starting Level 2 quiz for cause:{cause}</h1>
    setCauseDetected(cause);
    setShowLevel1Quiz(false);
    setShowLevel2Quiz(true);
  };

  return (
    <div className="quiz">
      <header className="App-header">
        <h1>Emotion and Cause Detection</h1>
      </header>
      {!showLevel1Quiz && !showLevel2Quiz && (
        <main className="App-content">
          <EmotionCauseForm startLevel1Quiz={startLevel1Quiz} startLevel2Quiz={startLevel2Quiz} />
        </main>
      )}
      {showLevel1Quiz && (
        <main className="App-content">
          <Level1Quiz emotion={emotionDetected} />
        </main>
      )}
      {showLevel2Quiz && (
        <main className="App-content">
          <Level2Quiz cause={causeDetected} />
        </main>
      )}
    </div>
  );
}

export default Quiz;
