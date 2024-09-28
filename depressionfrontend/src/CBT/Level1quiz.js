import React, { useState } from 'react';
import "./Levelquiz.css";

  // Define questions and options for each emotion
  const questionsDatabase = {
    loneliness: [
      {
        question: "How do you usually cope with feelings of loneliness?",
        options: [
          "Reach out to friends or family.",
          "Engage in a hobby or activity you enjoy.",
          "Join a social group or community.",
          "Reflect on and write about your feelings."
        ],answer:"Reflect on and write about your feelings.",
      },
      {
        question: "How do you typically cope with feelings of loneliness or isolation?",
        options: [
          "I reach out to friends or loved ones for support.",
          "I distract myself with activities or hobbies.",
          "I avoid addressing my feelings of loneliness.",
          "I seek new social connections to alleviate loneliness."
        ],answer:"I reach out to friends or loved ones for support.",
      },
      {
        question: "What thoughts or beliefs contribute to your experience of loneliness?",
        options: [
          "I believe that nobody understands me.",
          "I feel like I'm not worthy of meaningful relationships.",
          "I assume that others don't want to spend time with me.",
          "I recognize that loneliness is a common human experience."
        ],answer:"I recognize that loneliness is a common human experience.",
      },
      {
        question: "How does loneliness impact your mental and emotional well-being?",
        options: [
          "It leads to feelings of sadness and isolation.",
          "It motivates me to reach out and connect with others.",
          "It triggers negative self-talk and self-doubt.",
          "It encourages me to focus on personal growth and introspection."
        ],answer:"It leads to feelings of sadness and isolation.",
      },
      {
        question: "What strategies do you use to build and maintain meaningful social connections?",
        options: [
          "Actively engaging in social activities and gatherings.",
          "Being vulnerable and open about my feelings.",
          "Assuming others won't be interested in getting to know me.",
          "Taking the initiative to reach out and stay connected."
        ],answer:"Actively engaging in social activities and gatherings.",
      }
    ],
    tension: [
      {
        question: "How do you typically react when facing a stressful situation?",
        options: [
          "I stay calm and approach it methodically.",
          "I feel overwhelmed and struggle to cope.",
          "I avoid the situation or procrastinate.",
          "I seek support and guidance from others."
        ],answer:"I stay calm and approach it methodically.",
      },
      {
        question: "What strategies do you use to manage stress in your daily life?",
        options: [
          "Regular exercise and mindfulness practices.",
          "Escaping through distractions like TV or social media.",
          "Seeking professional help when needed.",
          "Ignoring stress and hoping it will go away.",
        ],answer:"Regular exercise and mindfulness practices.",
      },
      {
        question: "How do you maintain work-life balance and prevent burnout?",
        options: [
          "Setting boundaries and prioritizing self-care.",
          "Constantly working long hours without breaks.",
          "Feeling guilty when taking time off.",
          "Neglecting personal needs for work demands."
        ],answer:"Setting boundaries and prioritizing self-care.",
      },
      {
        question: "What role does perfectionism play in your experience of stress?",
        options: [
          "I strive for excellence but understand perfection isn't realistic.",
          "I set impossibly high standards for myself.",
          "I fear criticism and failure due to imperfections.",
          "I avoid taking risks to prevent mistakes."
        ],
        answer:"I strive for excellence but understand perfection isn't realistic.",
      }
    ],
    anxious: [
      {
        question: "When you think about your fear of public speaking, which of the following thoughts best describes how you feel?",
        options: [
          "If I make a mistake, everyone will think I'm incompetent.",
          "I'll probably do just fine, but it's still nerve-wracking.",
          "I'm always terrible at public speaking, and I'll mess up again.",
          "Most people understand that public speaking is challenging, and they won’t judge me harshly."
        ],
        answer:"Most people understand that public speaking is challenging, and they won’t judge me harshly.",
      },
      {
        question: "How do you usually react when you anticipate something going wrong in a situation?",
        options: [
          "I visualize the worst-case scenario and prepare for it.",
          "I remind myself that things might turn out better than I expect.",
          "I assume that because something went wrong before, it will definitely happen again.",
          "I try to focus on what I can control and stay calm."
        ],answer:"I remind myself that things might turn out better than I expect.",
      },
      {
        question:"When you feel afraid about a future event, which thought process is most familiar to you?",
        options: [
          "I predict that things will go badly without any real evidence.",
          "I think about the steps I can take to improve the situation.",
          "I generalize past failures to assume I’ll fail again.",
          "I remind myself of my successes in similar situations."
        ],
        answer:"I think about the steps I can take to improve the situation.",
      },
      {
        question: "If you’re feeling afraid about an upcoming challenge, how do you describe yourself?",
        options: [
          "I label myself negatively, like 'I'm a failure' or 'I'm weak.'",
          "I recognize that feeling afraid doesn’t define who I am.",
          "I believe that one mistake means I’m completely incapable.",
          "I acknowledge that everyone feels afraid sometimes, and it’s okay."
        ],
        answer:"I recognize that feeling afraid doesn’t define who I am.",
      },
      {
        question: "What strategies do you use to manage your fears?",
        options: [
          "Face the fear head-on and take small steps to overcome it.",
          "Talk to someone you trust about your fears.",
          "Practice relaxation techniques like deep breathing or meditation.",
          "Avoid situations that trigger your fears."
        ],
        answer:"Face the fear head-on and take small steps to overcome it.",
      }
    ]
  };
  
  
  const Level1Quiz = ({ emotion }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
  
    const questions = questionsDatabase[emotion] || [{ question: `No questions available for the cause: ${emotion}`, options: [], answer: "" }];
    const handleAnswerOptionClick = (selectedOption) => {
      const currentQuestion = questions[currentQuestionIndex];
  
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 1);
      }
  
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setShowResults(true);
      }
    };
  
    return (
      <div className="level2-quiz">
        {showResults ? (
          <div className="results-section">
            <h2>Your Score: {score} out of {questions.length}</h2>
          </div>
        ) : (
          <div className="question-section">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="options-section">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="option-button"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Level1Quiz;