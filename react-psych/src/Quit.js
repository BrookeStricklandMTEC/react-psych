import React from 'react'; 
import './App.css'

export default function Quit (){
    const handleClick = event => {
    console.log(event.currentTarget.id);
    };
    return (
        <div>
            <button id="quit" className="button" onClick={handleClick}>
                Quit
            </button>
        </div>
    );
}
