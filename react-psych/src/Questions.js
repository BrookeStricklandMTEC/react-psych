import React from 'react'; 
import './App.css';
import Restart from './Restart';
import Quit from './Quit';
import Results from './Results';

export default function Questions ({showScore, score, currentQuestion,questions,handleAnswerOptionClick}) { 

return <div className='app'>
    {showScore ? (
        <div className='score-section'>
            You scored {score} out of {questions.length}
               <Results></Results>
               <Restart> </Restart>
               <Quit> </Quit>
        </div>
        ) : (
          <>
        <div className='app-build'>
              <div className='question-section'>
                <div className='question-count'>
                  <span> Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className='question-text'>{questions[currentQuestion].questionText}</div>
              </div>
              <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
                  <button key={index} className="button" onClick={() => handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                ))}
              </div>
            </div>
          </>
        )}
  </div>
}
