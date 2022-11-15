import React from 'react'; 
import './App.css'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 


export default function CategorySelect (){
    const CategorySelect = event => {
        
    }
    return <>
    <div className='category-content'>
     <h2 className='category-header'> Select a Category </h2>
     <Link id="science-button" className="button" to={'/App/Sciencequestions'}> Science </Link>
     <Link id="science-button" className="button" to={'/App/Historyquestions'}> History </Link>
     <Link id="science-button" className="button" to={'/App/Languagequestions'}> Language </Link>
     <Link id="science-button" className="button" to={'/App/Culturequestions'}> Pop Culture </Link>
    </div>
    </>
}


