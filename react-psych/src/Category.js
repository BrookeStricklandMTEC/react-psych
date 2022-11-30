import React, { useContext } from 'react'; 
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 
import { ResultsContext } from './App';


export default function CategorySelect (){
    const {setSelectedCategory} = useContext(ResultsContext)  

    return <>
    <div className='category-content'>
        <h2 className='category-header'> Select a Category </h2>
        <Link id="science-button" className="button" to={'/Sciencequestions'} onClick={() => setSelectedCategory('Science')}> Science </Link>
        <Link id="history-button" className="button" to={'/Historyquestions'} onClick={() => setSelectedCategory('History')}> History </Link>
        <Link id="language-button"className="button" to={'/Languagequestions'} onClick={() => setSelectedCategory('Language')}> Language </Link>
        <Link id="culture-button" className="button" to={'/Culturequestions'} onClick={() => setSelectedCategory('Culture')}> Pop Culture </Link>
    </div>
    </>
}


