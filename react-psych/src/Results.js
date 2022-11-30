import React, { useContext } from 'react'; 
import './App.css';
import {ResultsContext} from './App.js'; 
import Quit from './Quit';


export default function Results () { 

const {selectedCategory} = useContext(ResultsContext)
// const results = selectedCategory.map([selectedCategory (questionText, answerOptions)]); 
return <>
    <div className='scrollable'>
        <div className='results-content'>
           <p> results displayed: {selectedCategory} </p>
        </div>
    </div> 
     
    <div className='align-button'>
            <Quit></Quit>
    </div>
</>
}


// map science questions 
// => map and display the questionText with the answerOptions 
// => isCorrect: true => colored in .correct{}

 