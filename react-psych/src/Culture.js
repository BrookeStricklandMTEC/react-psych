import React from 'react'; 
import './App.css'

export default function Culture (){
    const handleClick = event => {
        console.log(event.currentTarget.id);
    };
    return <button id='culture-select' className='button' onClick={handleClick}> Pop Culture </button>
}