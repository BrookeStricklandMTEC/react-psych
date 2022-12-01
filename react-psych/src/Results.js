import React, { useContext, useMemo } from 'react'; 
import './App.css';
import {ResultsContext} from './App.js'; 
import Quit from './Quit';

import {Sciencequestions} from './Sciencequestions';
import { Historyquestions } from './Historyquestions';
import { Languagequestions } from './Languagequestions';
import { Culturequestions } from './Culturequestions';

export default function Results () { 

const {selectedCategory} = useContext(ResultsContext);
// const results = selectedCategory.map([selectedCategory (questionText, answerOptions)]); 
const questions = useMemo(() => {
    if (selectedCategory === 'Science') {
        return Sciencequestions
    } 
    else if (selectedCategory === 'History') {
        return Historyquestions
    } 
    else  if ( selectedCategory === 'Language'){
        return Languagequestions
    } 
    else  if (selectedCategory === 'Culture'){
        return Culturequestions
    }
}, [selectedCategory]);

return <>
    <div className='scrollable'>
        <div className='results-content'>
           {
            questions.map(questionitem => {
                return (
                    <div className='results-display'>
                         <div className='results-question'> {questionitem.questionText} </div> 
                         {questionitem.answerOptions.map(answerOptionItem => {
                            return (
                                <div className={`results-answer ${answerOptionItem.isCorrect ? 'correct': ''}`}> {answerOptionItem.answerText} </div>
                            )
                         })}
                    </div>
                )
            })

           }
        
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

 