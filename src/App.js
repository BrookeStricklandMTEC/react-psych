import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 
import Sciencequestions from './Sciencequestions';
import Questions from './Questions'

import Start from './Start';
import Restart from './Restart';
import Quit from './Quit';


import CategorySelect from './Category';

import Questions from './Questions'
import Sciencequestions from './Sciencequestions';

export default function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<div className='start-game-div'> <Start> </Start></div>}> </Route>
          <Route path='/category' element={<div className='category-div'> <CategorySelect> </CategorySelect> </div>}> </Route>
          <Route path='/Sciencequestions'element={<div className='app'> <Sciencequestions> </Sciencequestions> </div>}> </Route>
          {/* <Route path='App/Historyquestions' element={<button id='history-select' className='button'> History </button>}> </Route> */}
          {/* <Route path='App/Languagequestions' element={<button id='language-select' className='button'> Language </button>}> </Route> */}
          {/* <Route path='App/Culturequestions' element={<button id='culture-select' className='button'> Pop Culture </button>}> </Route> */}
          <Route path='/' element={<div className='button' id='quit'><Start> Quit </Start> </div>}> </Route>
          {/* <Route path='/' element={<div id='restart' className='button'> <Restart> Restart </Restart> </div>}> </Route>  */}
        </Routes>
      </Router>
    </>
  );

  

}




