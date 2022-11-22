import React from 'react'; 
import './App.css'

export default function Restart (){ 
    return (
        <div>
            <button id="restart" className="button" onClick={() => window.location.reload(false)}>
                Restart
            </button>
        </div>
    );
}