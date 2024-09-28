import React, { useState } from 'react';
import './PredictKeyword.css';

const EmotionCauseForm = ({ startLevel1Quiz, startLevel2Quiz }) => {
  const [sentence, setSentence] = useState('');
  const [predictedEmotion, setPredictedEmotion] = useState('');
  const [predictedCause, setPredictedCause] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSentence(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { predictedEmotion, predictedCause } = await predictEmotionAndCause(sentence);
      setPredictedEmotion(predictedEmotion);
      setPredictedCause(predictedCause);
    } catch (error) {
      setError('Failed to predict emotion and cause. Please try again.');
      console.error('Error predicting emotion and cause:', error);
    }
  };

  const predictEmotionAndCause = async (sentence) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const data = await response.json();
      console.log('Predicted Emotion:', data.emotion);
      console.log('Predicted Cause:', data.cause);
      return { predictedEmotion: data.emotion, predictedCause: data.cause };
    } catch (error) {
      console.error('Error predicting emotion and cause:', error);
      throw error; // Propagate the error back to the calling function
    }
  };
  
  const handleStartLevel1Quiz = () => {
    if (predictedEmotion) {
      startLevel1Quiz(predictedEmotion);
    }
  };

  const handleStartLevel2Quiz = () => {
    if (predictedCause) {
      startLevel2Quiz(predictedCause);
    }
  };

  return (
    <div className="emotion-cause-form">
      <h2>Share your thoughts</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sentence">Enter your sentence:</label>
        <input
          type="text"
          id="sentence"
          value={sentence}
          onChange={handleInputChange}
          placeholder="Type here..."
          required
        />
        <button type="submit">Predict</button>
      </form>

      {predictedEmotion && predictedCause && (
        <div className="prediction-results">
          <p>Detected Emotion: {predictedEmotion}</p>
          <p>Detected Cause: {predictedCause}</p>
          <button onClick={handleStartLevel1Quiz}>Start Level 1 Quiz</button>
          <br />
          <button onClick={handleStartLevel2Quiz}>Start Level 2 Quiz</button>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EmotionCauseForm;
