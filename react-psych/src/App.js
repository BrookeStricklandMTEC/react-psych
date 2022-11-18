import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 

import Questions from './Questions'

import Start from './Start';
import Restart from './Restart';
import Quit from './Quit';

import CategorySelect from './Category';

export default function App() {


  // let questions = [...Culturequestions, ...Sciencequestions, ...Historyquestions, ...Languagequestions];
  // let questions = [...Sciencequestions];

  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  // const [score, setScore] = useState(0);

  // const handleAnswerOptionClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }

  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < questions.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     setShowScore(true);
  //   }
  // };

  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<div className='start-game-div'> <Start> </Start></div>}> </Route>
          <Route path='/category' element={<div className='category-div'> <CategorySelect> </CategorySelect> </div>}> </Route>
          <Route path='/App/Sciencequestions' 
          element={<Sciencequestions />}> </Route>
          {/* <Route path='App/Historyquestions' element={<button id='history-select' className='button'> History </button>}> </Route>
          <Route path='App/Languagequestions' element={<button id='language-select' className='button'> Language </button>}> </Route>
          <Route path='App/Culturequestions' element={<button id='culture-select' className='button'> Pop Culture </button>}> </Route>
          <Route path='App/Quit' element={<button id='quit' className='button'> Quit </button>}> </Route>
          <Route path='App/Restart' element={<button id='restart' className='button'> Restart </button>}> </Route> */}
        </Routes>
      </Router>
    </>
  );

  

}




