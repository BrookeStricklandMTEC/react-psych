import React from 'react'; 
import './App.css'

export default function Language (){
    const handleClick = event => {
        console.log(event.currentTarget.id);
    };
    return <button id='language-select' className='button' onClick={handleClick}> Language </button>
}