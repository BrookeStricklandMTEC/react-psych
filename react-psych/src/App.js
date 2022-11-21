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


export default function App() {
  return (
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<div className='start-game-div'> <Start> </Start></div>}> </Route>
          <Route path='/category' element={<div className='category-div'> <CategorySelect> </CategorySelect> </div>}> </Route>
          <Route path='/Sciencequestions'element={<Sciencequestions></Sciencequestions>}> </Route>
          <Route path='/Historyquestions' element={<Historyquestions> </Historyquestions>}> </Route>
          <Route path='/Languagequestions' element={<Languagequestions> </Languagequestions>}> </Route>
          <Route path='/Culturequestions' element={<Culturequestions> </Culturequestions>}> </Route> 
          {/* <Route path='/' element={ brings you back to beginning of cateogry you clicked on }> </Route> */}
          {/* <Route path='/' element={<div className='start-game-div'> <Start> </Start> </div>}> </Route>  */}
        </Routes>
      </Router>
    </>
  );
}




