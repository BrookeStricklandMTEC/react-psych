import React, { useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';
import {ResultsContext} from './App.js'; 


// const results = useContext(ResultsContext)
// {results => { return this.map(ResultsContext)}} 

export default function Results () { 
    return <>
    <div className='scrollable'>
        <div className='results-content'>
           <p> results displayed here </p>
        </div>
    </div>  
    </>
}


// add on clicks in category that set a variable, useContext()
// pass in Results to each route 
// display questions and isCorrect{true} highlighted in .correct{} style 
// 