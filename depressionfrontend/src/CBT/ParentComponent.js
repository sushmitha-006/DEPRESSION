import React, { useState } from 'react';
import EmotionCauseForm from './EmotionCauseForm';
import Level1Quiz from './Level1quiz';
import Level2Quiz from './Level2quiz';

const ParentComponent = () => {
    const [level1Emotion, setLevel1Emotion] = useState(null);
    const [level2Cause, setLevel2Cause] = useState(null);
  
    const startLevel1Quiz = (emotion) => {
      console.log(`Starting Level 1 Quiz with emotion: ${emotion}`);
      setLevel1Emotion(emotion);
    };
  
    const startLevel2Quiz = (cause) => {
      console.log(`Starting Level 2 Quiz with cause: ${cause}`);
      setLevel2Cause(cause);
    };
  
    return (
        <div>
          <h1 style={{ color: 'black' }}>Emotion and Cause Quiz</h1>
          <EmotionCauseForm startLevel1Quiz={startLevel1Quiz} startLevel2Quiz={startLevel2Quiz} />
          {level1Emotion && <Level1Quiz emotion={level1Emotion} />}
          {level2Cause && <Level2Quiz cause={level2Cause} />}
        </div>
      );
    };
    
    export default ParentComponent;

