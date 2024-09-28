import React, { useState } from 'react';
import "./Levelquiz.css";

  // Define questions and options for each cause
  const questionsDatabase = {
    money: [
      {
        question: "How do you currently manage your finances, and what strategies do you use to budget or save money?",
        options: [
          "Creating a budget and tracking expenses regularly.",
          "Spending impulsively without a clear financial plan.",
          "Seeking financial advice or assistance when needed.",
          "I struggle to manage my finances effectively."
        ]
      },
      {
        question: "What are your short-term and long-term financial goals, and how are you working towards them?",
        options: [
          "Saving for specific expenses or investments.",
          "Paying off debt and improving financial stability.",
          "Investing in personal or professional development.",
          "I haven't set clear financial goals for myself."
        ]
      },
      {
        question: "What financial challenges or setbacks have you faced recently, and how have you dealt with them?",
        options: [
          "Managing unexpected expenses or emergencies.",
          "Navigating changes in income or employment.",
          "Dealing with debt or financial stress.",
          "I haven't faced significant financial challenges recently."
        ]
      },
      {
        question: "How do your attitudes and behaviors towards money align with your values and goals in life?",
        options: [
          "I prioritize financial security and long-term planning.",
          "I focus on enjoying life and spending money on experiences.",
          "I struggle to balance financial responsibilities with personal desires.",
          "I haven't thought much about the connection between money and my values/goals."
        ]
      }
    ],
    career: [
      {
        question: "When thinking about your career goals, how do you usually handle setbacks or challenges?",
        options: [
          "I see setbacks as opportunities to learn and grow.",
          "I feel discouraged and doubt my abilities.",
          "I tend to blame external factors for setbacks.",
          "I get anxious and avoid taking risks."
        ]
      },
      {
        question: "How do you prioritize tasks and manage your time when working towards your career aspirations?",
        options: [
          "I set clear goals and create a plan to achieve them.",
          "I often feel overwhelmed and procrastinate.",
          "I rely on others to guide my career decisions.",
          "I struggle to stay focused and motivated."
        ]
      },
      {
        question: "How do you handle feedback and criticism in your professional life?",
        options: [
          "I use feedback as an opportunity to improve.",
          "I take criticism personally and feel defensive.",
          "I avoid seeking feedback to avoid negative comments.",
          "I compare myself to others and feel inadequate."
        ]
      },
      {
        question: "What motivates you the most in your career journey?",
        options: [
          "Achieving personal growth and development.",
          "External recognition and rewards.",
          "Fear of failure and disappointing others.",
          "Feeling fulfilled by my work and its impact."
        ]
      }
    ],
    Relationship: [
      {
        question: "How do you currently communicate and resolve conflicts with your family members or partner?",
        options: [
          "Openly discussing issues and finding solutions together.",
          "Avoiding conflicts or keeping feelings bottled up.",
          "Seeking outside help or mediation when conflicts arise.",
          "I'm not sure how to effectively handle conflicts."
        ],
        answer:4,
      },
      {
        question: "What aspects of your relationships with family members or your partner bring you the most joy or fulfillment?",
        options: [
          "Shared experiences and quality time together.",
          "Feeling supported and understood by each other.",
          "Having common goals and working towards them together.",
          "I struggle to find joy or fulfillment in these relationships."
        ],
        answer:3,
      },
      {
        question: "How do you balance individual needs and desires with those of your family or partner?",
        options: [
          "Open communication and compromise.",
          "Putting others' needs before my own.",
          "Struggling to find a balance and feeling overwhelmed.",
          "Avoiding conflicts by not expressing my needs."
        ],
        answer:1,
      },
      {
        question: "What challenges or conflicts have you faced recently in your relationships, and how have you dealt with them?",
        options: [
          "Handling disagreements or differences in opinions.",
          "Dealing with misunderstandings or lack of communication.",
          "Navigating changes or transitions in the relationship.",
          "I haven't faced significant challenges or conflicts recently.",
        ],
        answer:2,
      },
      {
        question: "What are your long-term goals or hopes for your relationships with family members or your partner?",
        options: [
          "Building stronger bonds and deeper connections.",
          "Improving communication and resolving conflicts more effectively.",
          "Creating a supportive and nurturing environment.",
          "I'm not sure what my long-term goals are in these relationships."
        ],
        answer:2,
      }
    ]
  };

  const Level2Quiz = ({ cause }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
  
    const questions = questionsDatabase[cause] || [{ question: `No questions available for the cause: ${cause}`, options: [], answer: "" }];

  
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
    console.log("Cause received:", cause);
    console.log("Questions:", questions);
    if (questions.length === 0) {
      return (
        <div className="level2-quiz">
          <p>No questions available for the cause: {cause}</p>
        </div>
      );
    }
  
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
  
  export default Level2Quiz;