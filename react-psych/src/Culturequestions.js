import React from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';
import Questions from './Questions'

const Culturequestions = [
    {
      questionText: 'Which Avenger other than Captain America was able to pick up Thors Mjolnir in the Marvel movies?',
      answerOptions: [
        { answerText: 'Batman', isCorrect: false },
        { answerText: 'Hulk', isCorrect: false },
        { answerText: 'Spider-Man', isCorrect: false },
        { answerText: 'Vision', isCorrect: true }
      ]
    },
    {
      questionText: 'Which movie kicked off the Skywalker saga in 1977?',
      answerOptions: [
        { answerText: 'A New Hope', isCorrect: true },
        { answerText: 'Return of the Jedi ', isCorrect: false },
        { answerText: 'Lego Star Wars: The Force Awakens', isCorrect: false },
        { answerText: 'Rogue One: A Star Wars Story', isCorrect: false }
      ]
    },
    {
      questionText: 'What is Kramers first name on Seinfeld?',
      answerOptions: [
        { answerText: 'Wanda', isCorrect: false },
        { answerText: 'Cosmo', isCorrect: true },
        { answerText: 'Joe', isCorrect: false },
        { answerText: 'Derek', isCorrect: false }
      ]
    },
    {
      questionText: 'Who is the half-blood prince in Harry Potter?',
      answerOptions: [
        { answerText: 'Harry Potter', isCorrect: false },
        { answerText: 'Hermione Granger', isCorrect: false },
        { answerText: 'Voldemort', isCorrect: false },
        { answerText: 'Severus Snape', isCorrect: true }
      ]
    },
    {
      questionText: 'What movie in 2019 topped Avatar as the highest-grossing film of all time?',
      answerOptions: [
        { answerText: 'Joker ', isCorrect: false },
        { answerText: 'Alita Battle Angel', isCorrect: false },
        { answerText: 'Avengers: Endgame', isCorrect: true },
        { answerText: 'Frozen 2', isCorrect: false }
      ]
    },
    {
      questionText: 'Who is the antagonist in the 1988 film “Die Hard”?',
      answerOptions: [
        { answerText: 'Patrick Bateman', isCorrect: false },
        { answerText: 'Viggo Tarasov ', isCorrect: false },
        { answerText: 'Hannibal Lecter', isCorrect: false },
        { answerText: 'Hans Gruber', isCorrect: true }
      ]
    },
    {
      questionText: 'What film did the phrase “I see dead people” come from?',
      answerOptions: [
        { answerText: 'The Walking Dead', isCorrect: false },
        { answerText: 'The Sixth Sense', isCorrect: true },
        { answerText: 'The Shining', isCorrect: false },
        { answerText: 'Ash Vs Evil Dead', isCorrect: false }
      ]
    },
    {
      questionText: 'Which female artist is often referred to as the “Princess of Pop”?',
      answerOptions: [
        { answerText: 'Amy Schumer', isCorrect: false },
        { answerText: 'Ariana Grande', isCorrect: false },
        { answerText: 'Michael Jackson', isCorrect: false },
        { answerText: 'Britney Spears', isCorrect: true }
      ]
    },
    {
      questionText: 'Which of Stephen King’s novels was the first to be adapted into a film?',
      answerOptions: [
        { answerText: 'Carrie', isCorrect: true },
        { answerText: 'American Psycho', isCorrect: false },
        { answerText: 'Us', isCorrect: false },
        { answerText: 'Doctor Sleep', isCorrect: false }
      ]
    },
    {
      questionText: 'Who is Marvel’s first superhero(s) in the comic books?',
      answerOptions: [
        { answerText: 'Ghost Rider', isCorrect: false },
        { answerText: 'Thanos', isCorrect: false },
        { answerText: 'The Human Torch', isCorrect: true },
        { answerText: 'Guardians of the Galaxy', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the name of the mountain in “Lord of the Rings” which the One Ring must be thrown into?',
      answerOptions: [
        { answerText: 'Mount Death', isCorrect: false },
        { answerText: 'Mount Doom', isCorrect: true },
        { answerText: 'Mount Rushmore', isCorrect: false },
        { answerText: 'Pompeii', isCorrect: false }
      ]
    },
    {
      questionText: 'According to Billboard, who is the best-selling boy band of all time?',
      answerOptions: [
        { answerText: 'One Direction', isCorrect: false },
        { answerText: 'Slipknot', isCorrect: false },
        { answerText: 'Backstreet Boys', isCorrect: true },
        { answerText: 'Big Time Rush', isCorrect: false }
      ]
    },
    {
      questionText: 'What movie has the best selling soundtrack of all time',
      answerOptions: [
        { answerText: 'The Bodyguard', isCorrect: true },
        { answerText: 'Top Gun', isCorrect: false },
        { answerText: 'The Garbage Pail Kids Movie', isCorrect: false },
        { answerText: 'The Avengers', isCorrect: false }
      ]
    },
    {
      questionText: 'How many languages can C-3PO speak in Star Wars?',
      answerOptions: [
        { answerText: 'Six Million', isCorrect: true },
        { answerText: 'One', isCorrect: false },
        { answerText: 'Two', isCorrect: false },
        { answerText: 'Sixteen Thousand Five Hundred and Three', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the longest running adult animated series in Television History',
      answerOptions: [
        { answerText: 'Family Guy', isCorrect: false },
        { answerText: 'Game of Thrones', isCorrect: false },
        { answerText: 'The Cleveland Show', isCorrect: false },
        { answerText: 'The Simpsons', isCorrect: true }
      ]
    },
    {
      questionText: 'In 2021 who changed his name to Ye?',
      answerOptions: [
        { answerText: 'Barack Obama', isCorrect: false },
        { answerText: 'Samuel L Jackson', isCorrect: false },
        { answerText: 'Tupac', isCorrect: false },
        { answerText: 'Kanye West', isCorrect: true }
      ]
    },
    {
      questionText: 'In Rich and Morty: What sauce is Rick obsessed with?',
      answerOptions: [
        { answerText: 'Szechuan sauce', isCorrect: true },
        { answerText: 'Popeyes™ Mardi Gras Mustard', isCorrect: false },
        { answerText: 'Mayonnaise', isCorrect: false },
        { answerText: 'Garlic', isCorrect: false }
      ]
    },
    {
      questionText: 'What’s Spider-Man’s middle name?',
      answerOptions: [
        { answerText: 'May', isCorrect: false },
        { answerText: 'MJ', isCorrect: false },
        { answerText: 'Parker', isCorrect: false },
        { answerText: 'Benjamin', isCorrect: true }
      ]
    },
    {
      questionText: 'In The Matrix: What software company did Neo work for?',
      answerOptions: [
        { answerText: 'MetaCortex', isCorrect: true },
        { answerText: 'Electronic Arts', isCorrect: false },
        { answerText: 'Twitter', isCorrect: false },
        { answerText: 'SpaceMonkey', isCorrect: false }
      ]
    },
    {
      questionText: 'What was the first text sent by SMS?',
      answerOptions: [
        { answerText: 'Hello World', isCorrect: false },
        { answerText: 'Merry Christmas', isCorrect: true },
        { answerText: 'Hey, just wondering if you got your photos printed?', isCorrect: false },
        { answerText: 'Happy Hanukkah', isCorrect: false }
      ]
    }
  ]

export default function Languagequestions(){ 
    return <>
        <Questions showScore = {showScore} score = {score} currentQuestion = {currentQuestion} Restart = {Restart} Quit = {Quit} questions = {questions} handleAnswerOptionClick = {handleAnswerOptionClick}/>
    </>
}