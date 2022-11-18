import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';
import Questions from './Questions'

const Historyquestions = [
    {
      questionText: 'What is the smallest country in the world?',
      answerOptions: [
        { answerText: 'Texas', isCorrect: false },
        { answerText: 'Russia', isCorrect: false },
        { answerText: 'Vatican City', isCorrect: true },
        { answerText: 'Japan', isCorrect: false }
      ]
    },
    {
      questionText: 'In what year was Alaska sold to the United States of America?',
      answerOptions: [
        { answerText: '2008', isCorrect: false },
        { answerText: '1942', isCorrect: false },
        { answerText: '1867', isCorrect: true },
        { answerText: '1999', isCorrect: false }
      ]
    },
    {
      questionText: 'When was the Declaration of Independence signed?',
      answerOptions: [
        { answerText: 'July 4th, 1708', isCorrect: false },
        { answerText: 'August 2nd, 1776', isCorrect: true },
        { answerText: 'Decemeber 25th, 5 BC', isCorrect: false },
        { answerText: 'September 11th, 2001', isCorrect: false }
      ]
    },
    {
      questionText: 'The United States bought Alaska from which country?',
      answerOptions: [
        { answerText: 'Russia', isCorrect: true },
        { answerText: 'China', isCorrect: false },
        { answerText: 'Canada', isCorrect: false },
        { answerText: 'Vatican City', isCorrect: false }
      ]
    },
    {
      questionText: 'Who was the fourth president of the United States?',
      answerOptions: [
        { answerText: 'George Washington', isCorrect: false },
        { answerText: 'Abraham Lincoln', isCorrect: false },
        { answerText: 'Benjamin Franklin', isCorrect: false },
        { answerText: 'James Madison', isCorrect: true }
      ]
    },
    {
      questionText: 'Fill in the blank: The 19th Amendment guarantees ____ the right to vote',
      answerOptions: [
        { answerText: 'Asians', isCorrect: false },
        { answerText: 'Blacks', isCorrect: false },
        { answerText: 'Women', isCorrect: true },
        { answerText: '18 year olds', isCorrect: false }
      ]
    },
    {
      questionText: 'What was the name of the landmark Supreme Court case that ruled the racial segregation of schools unconstitutional?',
      answerOptions: [
        { answerText: 'Roe v. Wade', isCorrect: false },
        { answerText: 'Brown v. Board of Education', isCorrect: true },
        { answerText: 'United States v. Texas', isCorrect: false },
        { answerText: 'Dobbs v. Jackson Womens Health Organization', isCorrect: false }
      ]
    },
    {
      questionText: 'In what year did child labor laws start in the United States?',
      answerOptions: [
        { answerText: '1938', isCorrect: true },
        { answerText: '2023', isCorrect: false },
        { answerText: '1856', isCorrect: false },
        { answerText: '1989', isCorrect: false }
      ]
    },
    {
      questionText: 'The “shot heard round the world” describes the beginning of which battles in the American Revolution?',
      answerOptions: [
        { answerText: 'The Battles of Lexington and Concord', isCorrect: true },
        { answerText: 'The Battle of the Bulge', isCorrect: false },
        { answerText: 'The Battle of Gettsburg', isCorrect: false },
        { answerText: 'The Battle of Schrute Farms', isCorrect: false }
      ]
    },
    {
      questionText: 'What is considered the largest empire in history?',
      answerOptions: [
        { answerText: 'The Akkadian Empire', isCorrect: false },
        { answerText: 'The Mongolian Empire', isCorrect: false },
        { answerText: 'The Roman Empire', isCorrect: false },
        { answerText: 'The British Empire', isCorrect: true }
      ]
    },
    {
      questionText: 'Who was the first Emperor of Rome?',
      answerOptions: [
        { answerText: 'Augustus', isCorrect: true },
        { answerText: 'Julius Caesar', isCorrect: false },
        { answerText: 'Marcus Junius Brutus', isCorrect: false },
        { answerText: 'Gaius Octavius Thurinus', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the world’s oldest recorded civilization?',
      answerOptions: [
        { answerText: 'Chinese', isCorrect: false },
        { answerText: 'Atlantas', isCorrect: false },
        { answerText: 'Egypt', isCorrect: false },
        { answerText: 'Mesopotamia', isCorrect: true }
      ]
    },
    {
      questionText: 'What dynasty was Cleopatra part of?',
      answerOptions: [
        { answerText: 'The House of Habsburgs dynasty', isCorrect: false },
        { answerText: 'The Ptolemaic dynasty', isCorrect: true },
        { answerText: 'The Imperial Dynasty of Japan', isCorrect: false },
        { answerText: 'The West Saxon dynasty', isCorrect: false }
      ]
    },
    {
      questionText: 'Which fabric was invented in Ancient China?',
      answerOptions: [
        { answerText: 'Silk', isCorrect: true },
        { answerText: 'Denim', isCorrect: false },
        { answerText: 'Leather', isCorrect: false },
        { answerText: 'Linen', isCorrect: false }
      ]
    },
    {
      questionText: 'Which ancient figure is often considered the founder of Western philosophy?',
      answerOptions: [
        { answerText: 'Friedrich Nietzsche', isCorrect: false },
        { answerText: 'Socrates', isCorrect: true },
        { answerText: 'Rick Sanchez', isCorrect: false },
        { answerText: 'René Descartes', isCorrect: false }
      ]
    },
    {
      questionText: 'What was the name of the Ukrainian nuclear power plant that was the site of a nuclear disaster in April 1986?',
      answerOptions: [
        { answerText: 'Three Gorges Dam', isCorrect: false },
        { answerText: 'Belo Monte', isCorrect: false },
        { answerText: 'Chernobyl', isCorrect: true },
        { answerText: 'The Springfield Nuclear Power Plant ', isCorrect: false }
      ]
    },
    {
      questionText: 'Where did Albert Einstein live before moving to the United States?',
      answerOptions: [
        { answerText: 'Chad', isCorrect: false },
        { answerText: 'Switzerland', isCorrect: false },
        { answerText: 'Germany', isCorrect: true },
        { answerText: 'Vietnam', isCorrect: false }
      ]
    },
    {
      questionText: 'What was the first state to legalize same-sex marriage?',
      answerOptions: [
        { answerText: 'Utah', isCorrect: false },
        { answerText: 'California', isCorrect: false },
        { answerText: 'Massachusetts', isCorrect: true },
        { answerText: 'Louisiana', isCorrect: false }
      ]
    },
    {
      questionText: 'Where was Martin Luther King, Jr. born?',
      answerOptions: [
        { answerText: 'Concord, New Hampshire', isCorrect: false },
        { answerText: 'Atlanta, Georgia', isCorrect: true },
        { answerText: 'San Francisco, California', isCorrect: false },
        { answerText: 'Cancún, Mexico', isCorrect: false }
      ]
    },
    {
      questionText: 'In which year did Hitler commit suicide?',
      answerOptions: [
        { answerText: 'He didn’t', isCorrect: false },
        { answerText: '2008', isCorrect: false },
        { answerText: '1939', isCorrect: false },
        { answerText: '1945', isCorrect: true }
      ]
    }
  ]

export default function Historyquestions(){ 

    return <>
        <Questions showScore = {showScore} score = {score} currentQuestion = {currentQuestion} Restart = {Restart} Quit = {Quit} questions = {questions} handleAnswerOptionClick = {handleAnswerOptionClick}/>
    </>

}
