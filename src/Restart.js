import React from 'react'; 
import './App.css'

export default function Restart (){
    const handleClick = event => {
    console.log(event.currentTarget.id);
    };
    return (
        <div>
            <button id="restart" className="button" onClick={handleClick}>
                Restart
            </button>
        </div>
    );
}