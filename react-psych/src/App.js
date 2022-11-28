import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 

import Start from './Start';
import Restart from './Restart';
import Quit from './Quit';

import CategorySelect from './Category';

import Sciencequestions from './Sciencequestions';
import Historyquestions from './Historyquestions';
import Languagequestions from './Languagequestions';
import Culturequestions from './Culturequestions';
import Results from './Results';

export const ResultsContext = React.createContext()

export default function App() {
  // [Results] = useState(true)

  // function settingResults(){
  //   setResults()
  // }

  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<div className='start-game-div'> <Start> </Start></div>}> </Route>
          <Route path='/category' element={<div className='category-div'> <CategorySelect> </CategorySelect> </div>}> </Route>
          <Route path='/Sciencequestions'element={<Sciencequestions></Sciencequestions>}> </Route>
          <Route path='/Historyquestions' element={<Historyquestions> </Historyquestions>}> </Route>
          <Route path='/Languagequestions' element={<Languagequestions> </Languagequestions>}> </Route>
          <Route path='/Culturequestions' element={<Culturequestions> </Culturequestions>} > </Route> 
          <Route path='/Results' element={<Results> </Results>}> </Route>
          <Route path='/' element={<div className='start-game-div'> <Start> </Start> </div>}> </Route> 
        </Routes>
      </Router>

    </>
  );
}

// onClick={ResultsContext}


