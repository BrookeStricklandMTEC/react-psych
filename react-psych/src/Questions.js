import React from 'react'; 
import './App.css';
import Restart from './Restart';
import Quit from './Quit';

export default function Questions ({showScore, score, currentQuestion,Restart,Quit, questions,handleAnswerOptionClick,useState}) { 

<div className='app'>
    {showScore ? (
        <div className='score-section'>
            You scored {score} out of {questions.length}
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
                {questions[currentQuestion].answerOptions.map((answerOptions) => (
                  <button className="button" onClick={() => handleAnswerOptionClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                ))}
              </div>
            </div>
          </>
        )}

    </div>
}