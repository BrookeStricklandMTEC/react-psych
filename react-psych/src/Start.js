import React, { startTransition } from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';


export default function Start(){
    return <>
        <div className='start-title'>
            <h1> PSYCH!</h1>
        </div>
        <Link id="start" className="button" to={'/category'} > Start Game </Link> 
    </>
    
   
}   




