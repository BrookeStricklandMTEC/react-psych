import React from 'react'; 
import './App.css'

export default function Category (){

    const Wrapper = ({children}) => children; 
    const CategoryFunction = ({category}) => 
    <Wrapper> 
    <h2 className='category-header'> Select a Category </h2>
    <div className='category-selectors'> 
     <button id="science-category-button" className='button'> Science </button> 
     <button id="history-category-button" className='button'> History </button>
     <button id="language-category-button" className='button'> Language </button>
     <button id="culture-category-button" className='button'> Culture </button>
    </div>  
    </Wrapper>

    // return (
    //     <h2 className='category-header'> Select a Category </h2>
    // )

}


