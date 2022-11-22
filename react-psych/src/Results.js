import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';

export default function Results () { 
    const Viewresults = () => {
        <div className='results-content'>
           <div> results displayed here </div>
        </div>
    } 
    return <>
       <Link id="results" className="button" to={'/Results'} onClick={Viewresults}> View Results </Link>
    </>
}