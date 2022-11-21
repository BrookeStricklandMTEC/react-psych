import React from 'react'; 
import './App.css'

export default function Restart (){ 
    
    const restartFunction = event => {
    //  this.back()
    //  or
    // .reload()
    };

   
    return (

        <div>
            <button id="restart" className="button" onClick={restartFunction}>
                Restart
            </button>
        </div>
    );
}