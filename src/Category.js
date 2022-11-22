import React from 'react'; 
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 


export default function CategorySelect (){
    return <>
    <div className='category-content'>
        <h2 className='category-header'> Select a Category </h2>
        <Link id="science-button" className="button" to={'/Sciencequestions'}> Science </Link>
        <Link id="history-button" className="button" to={'/Historyquestions'}> History </Link>
        <Link id="language-button"className="button" to={'/Languagequestions'}> Language </Link>
        <Link id="culture-button" className="button" to={'/Culturequestions'}> Pop Culture </Link>
    </div>
    </>
}


