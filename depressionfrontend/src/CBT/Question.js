import React from 'react';
import "./Question.css"
const QuizQuestion = ({ question }) => {
  return (
    <div className="quiz-question">
      <h3>{question.question}</h3>
      <br/>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>{option}
          <br/>
          <br/>
          <br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;




