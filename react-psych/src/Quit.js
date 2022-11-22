import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css'

export default function Quit (){
    return (
        <div className='quit-div'>
            <Link id="quit" className="button" to={'/'}> Quit </Link> 
        </div>
    );
}
