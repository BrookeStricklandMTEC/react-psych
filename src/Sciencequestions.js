import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';

import Questions from './Questions'

const questions = [
    {
      questionText: 'How many teeth does an adult human have?',
      answerOptions: [
        { answerText: '55', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '32', isCorrect: true },
        { answerText: '26', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the rarest blood type?',
      answerOptions: [
        { answerText: 'AB Negative', isCorrect: true },
        { answerText: 'A Positive', isCorrect: false },
        { answerText: 'O Negative', isCorrect: false },
        { answerText: 'AB Positive', isCorrect: false }
      ]
    },
    {
      questionText: 'Diabetes develops as the result of a problem with which specific organ in the body?',
      answerOptions: [
        { answerText: 'Spleen', isCorrect: false },
        { answerText: 'Lower Intenstines', isCorrect: false },
        { answerText: 'Gallbladder', isCorrect: false },
        { answerText: 'Pancreas', isCorrect: true }
      ]
    },
    {
      questionText: 'How many elements are there in the periodic table?',
      answerOptions: [
        { answerText: '600+', isCorrect: false },
        { answerText: '89', isCorrect: false },
        { answerText: '118', isCorrect: true },
        { answerText: '55', isCorrect: false }
      ]
    },
    {
      questionText: 'The oldest living tree is 4,843 years old and can be found where?',
      answerOptions: [
        { answerText: 'California', isCorrect: true },
        { answerText: 'Japan', isCorrect: false },
        { answerText: 'Sweden', isCorrect: false },
        { answerText: 'Alaska', isCorrect: false }
      ]
    },
    {
      questionText: 'How long does a human red blood cell survive?',
      answerOptions: [
        { answerText: 'Forever', isCorrect: false },
        { answerText: '120 days', isCorrect: true },
        { answerText: '14 days', isCorrect: false },
        { answerText: 'Half a day', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the tallest type of grass?',
      answerOptions: [
        { answerText: 'Lawn grass', isCorrect: false },
        { answerText: 'Corn', isCorrect: false },
        { answerText: 'Wheat porridge', isCorrect: false },
        { answerText: 'Bamboo', isCorrect: true }
      ]
    },
    {
      questionText: 'What type of animal was Laika, the first animal to orbit the Earth?',
      answerOptions: [
        { answerText: 'Dog', isCorrect: true },
        { answerText: 'Monkey', isCorrect: false },
        { answerText: 'Fish', isCorrect: false },
        { answerText: 'Donkey', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the hardest known natural material?',
      answerOptions: [
        { answerText: 'Netherite', isCorrect: false },
        { answerText: 'Fiber', isCorrect: false },
        { answerText: 'Diamond', isCorrect: true },
        { answerText: 'Marble', isCorrect: false }
      ]
    },
    {
      questionText: 'Dolly was the first ever living creature to be cloned. What type of animal was she?',
      answerOptions: [
        { answerText: 'Dog', isCorrect: false },
        { answerText: 'Catfish', isCorrect: false },
        { answerText: 'Sheep', isCorrect: true },
        { answerText: 'Gorilla', isCorrect: false }
      ]
    },
    {
      questionText: 'How many bones do sharks have in total?',
      answerOptions: [
        { answerText: 'One', isCorrect: false },
        { answerText: 'Zero', isCorrect: true },
        { answerText: 'Six', isCorrect: false },
        { answerText: 'Fifty', isCorrect: false }
      ]
    },
    {
      questionText: 'Discovered by Alexander Fleming, this is now used to treat infections and is considered one of the most important discoveries in the field of medical science. What is it?',
      answerOptions: [
        { answerText: 'Stomach acid', isCorrect: false },
        { answerText: 'Oxycotin', isCorrect: false },
        { answerText: 'Alcohol', isCorrect: false },
        { answerText: 'Penicillin', isCorrect: true }
      ]
    },
    {
      questionText: 'What is a geiger counter used to measure?',
      answerOptions: [
        { answerText: 'Sonic Waves', isCorrect: false },
        { answerText: 'Radiation', isCorrect: true },
        { answerText: 'Light', isCorrect: false },
        { answerText: 'Magnetic Pull', isCorrect: false }
      ]
    },
    {
      questionText: 'From what tree do acorns come from?',
      answerOptions: [
        { answerText: 'Oak Trees', isCorrect: true },
        { answerText: 'Spruce Trees', isCorrect: false },
        { answerText: 'Coconut Trees', isCorrect: false },
        { answerText: 'Papaya Trees', isCorrect: false }
      ]
    },
    {
      questionText: 'This theory aims to explain how Pangea became separate continents, suggesting that the movement of tectonic plates caused the mass to break off and drift into different places.',
      answerOptions: [
        { answerText: 'The Theory of Relativity', isCorrect: false },
        { answerText: 'The Quantum Field Theory', isCorrect: false },
        { answerText: 'The Big Bang Theory', isCorrect: false },
        { answerText: 'The Continental Drift Theory', isCorrect: true }
      ]
    },
    {
      questionText: 'Where can you find the smallest bone in the human body?',
      answerOptions: [
        { answerText: 'Middle ear', isCorrect: true },
        { answerText: 'Thigh', isCorrect: false },
        { answerText: 'Pelvis', isCorrect: false },
        { answerText: 'Mouth', isCorrect: false }
      ]
    },
    {
      questionText: 'This planet spins the fastest, completing one whole rotation in just 10 hours. Which planet is it?',
      answerOptions: [
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Pluto', isCorrect: false },
        { answerText: 'Earth', isCorrect: false }
      ]
    },
    {
      questionText: 'True or false: sound travels faster in air than in water.',
      answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: true },
      ]
    },
    {
      questionText: 'Which of Newton’s Laws state that ‘for every action, there is an equal and opposite reaction?’',
      answerOptions: [
        { answerText: 'The first law of inertia', isCorrect: false },
        { answerText: 'The second law of force', isCorrect: false },
        { answerText: 'The third law of motion', isCorrect: true },
      ]
    },
    {
      questionText: 'Animals that eat both plants and meat are called what?',
      answerOptions: [
        { answerText: 'Omnivores', isCorrect: true },
        { answerText: 'Herbivores', isCorrect: false },
        { answerText: 'Carnivores', isCorrect: false },
        { answerText: 'Pescetarians', isCorrect: false }
      ]
    }
  ]

 export default function Sciencequestions(){ 
    let showScore, score, currentQuestion, Restart, Quit, handleAnswerOptionClick;
    return (
        <Questions 
          showScore = {showScore} 
          score = {score} 
          currentQuestion = {currentQuestion} 
          Restart = {Restart} 
          Quit = {Quit} 
          questions = {questions} 
          handleAnswerOptionClick = {handleAnswerOptionClick}
        />
    )

}



