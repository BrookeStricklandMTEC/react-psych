import React from 'react'; 
import './App.css'

export default function Quit (){
    const handleClick = event => {
     console.log(event.currentTarget.id);
     // end game brings back to start screen 
    };
    return (
        <div className='quit-div'>
            <button id="quit" className="button" onClick={handleClick}>
                Quit
            </button>
        </div>
    );
}
