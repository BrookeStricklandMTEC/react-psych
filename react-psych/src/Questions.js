import React from 'react'; 
import './App.css';

export default function Questions ({showScore, score, currentQuestion,Restart,Quit, questions,handleAnswerOptionClick}) { 

<div className='app'>
    {showScore ? (

      // return <div className='title'> <h1>🧠PSYCH!🧠</h1> </div>
      

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