import React from 'react'; 
import './App.css'

export default function History (){
    const handleClick = event => {
        console.log(event.currentTarget.id);
    };
    return <button id='history-select' className='button' onClick={handleClick}> History </button>
}