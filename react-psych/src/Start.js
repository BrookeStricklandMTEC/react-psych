import React, { startTransition } from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';


export default function Start(){

    const StartGame = event => {
        // hide #start-game-screen
        // show category
    }
    <body onLoad={StartGame}> </body>
    return <Link id="start" className="button" to={'/category'}> Start Game </Link>
}   




