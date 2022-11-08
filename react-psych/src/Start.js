import React, { startTransition } from 'react'; 
import './App.css';


export default function Start(){

    // const [ start, setStart] = useState(false);

    function StartGame (){
     console.log('start game');
    }
    return  <button id='start-game-button' className='button' onClick={StartGame()}> Start Game </button>

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