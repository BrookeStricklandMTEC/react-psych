import React, { startTransition } from 'react'; 
import './App.css';


export default function Start(){

    const StartGame = event => {
    //     // return <div id='startdiv'> </div>
    //     // return <div id='canvas'> </div>
        
    //     // startdiv.style.display = 'none'; 
    //     // canavs.style.display = 'block';
    //     // start(); 

        console.log(event.currentTarget.id);
    }
    return <button id="start" className="button" onClick={StartGame}> Start Game</button>
  

    // const [ start, setStart] = useState(false);
    // window.onload = function() {
    // } 
    // let Gameloop = new Gameloop(); 

    // function StartGame() {
    //     console.log('game started');
    //     // gameloop.start();
    // }

    // toggleScreen(id,toggle){
    // let element = document.getElementById(id);
    // let display = (toggle) ? 'block' : 'none';
    // element.style.display = display; 
    // }

    // start(){
    //     this.toggleScreen('start-screen', false); 
    //     this.toggleScreen('canvas', true); 
    // }

    // end game brings back to start screen
}