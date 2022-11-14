import React from 'react'; 
import './App.css'

export default function Science (){
    const handleClick = event => {
        console.log(event.currentTarget.id);
    };
    return <button id='science-select' className='button'onClick={handleClick}> Science </button>
}