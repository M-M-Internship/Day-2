const questions =["What is the capital of France?", "What is 2 + 2?", "Who is Prime Minister of India?"];
const options = [["Paris", "London", "Berlin", "Madrid"], ["3", "4", "5", "6"], ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Sonia Gandhi"]];
const correctAnswers = [options[0][0], options[1][1], options[2][0]];
import React, { useState } from 'react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answer) => {
    if (answer === correctAnswers[currentQuestion]) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion]}</div>
          </div>
          <div className='answer-section'>
            {options[currentQuestion].map((option) => (
              <button onClick={() => handleAnswerOptionClick(option)}>{option}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;