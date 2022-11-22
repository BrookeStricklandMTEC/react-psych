import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './App.css';
import Questions from './Questions'

export default function Languagequestions(){ 
  const Languagequestions = [
    {
      questionText: 'Which of the following languages has no alphabet?',
      answerOptions: [
        { answerText: 'Arabic', isCorrect: false },
        { answerText: 'English', isCorrect: false },
        { answerText: 'Chinese', isCorrect: true },
        { answerText: 'Japanese', isCorrect: false }
      ]
    },
    {
      questionText: 'Which continent has the most languages?',
      answerOptions: [
        { answerText: 'Africa', isCorrect: false },
        { answerText: 'Australia', isCorrect: false },
        { answerText: 'Antartica', isCorrect: false },
        { answerText: 'Asia', isCorrect: true }
      ]
    },
    {
      questionText: 'The expression “oy vey” comes from what language?',
      answerOptions: [
        { answerText: 'Yiddish', isCorrect: true },
        { answerText: 'Korean', isCorrect: false },
        { answerText: 'French', isCorrect: false },
        { answerText: 'Geonosian', isCorrect: false }
      ]
    },
    {
      questionText: 'Which is the most widely spoken language in the world?',
      answerOptions: [
        { answerText: 'English', isCorrect: false },
        { answerText: 'Hindi', isCorrect: false },
        { answerText: 'Russian', isCorrect: false },
        { answerText: 'Mandarin Chinese', isCorrect: true }
      ]
    },
    {
      questionText: 'What is the national language of India?',
      answerOptions: [
        { answerText: 'Swiss', isCorrect: false },
        { answerText: 'Mandarin Chinese', isCorrect: false },
        { answerText: 'Hindi', isCorrect: true },
        { answerText: 'Vietnamese', isCorrect: false }
      ]
    },
    {
      questionText: 'The term “déjà vu” comes from what language?',
      answerOptions: [
        { answerText: 'French', isCorrect: true },
        { answerText: 'Turkish', isCorrect: false },
        { answerText: 'Italian', isCorrect: false },
        { answerText: 'Persian', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the official language of Nigeria?',
      answerOptions: [
        { answerText: 'Persian', isCorrect: false },
        { answerText: 'English', isCorrect: true },
        { answerText: 'French', isCorrect: false },
        { answerText: 'German', isCorrect: false }
      ]
    },
    {
      questionText: 'What country has the most official languages?',
      answerOptions: [
        { answerText: 'Afghanistan', isCorrect: false },
        { answerText: 'Zimbabwe', isCorrect: true },
        { answerText: 'Canada', isCorrect: false },
        { answerText: 'Guinea', isCorrect: false }
      ]
    },
    {
      questionText: 'When would you say namaste to someone?',
      answerOptions: [
        { answerText: 'When greeting them', isCorrect: true },
        { answerText: 'If you want them to leave you alone', isCorrect: false },
        { answerText: 'To show respect', isCorrect: false },
        { answerText: 'When you leave their house', isCorrect: false }
      ]
    },
    {
      questionText: 'According to dictionary entries, which language has the largest number of words (more than 200,000 words)?',
      answerOptions: [
        { answerText: 'Chinese', isCorrect: false },
        { answerText: 'Hindi', isCorrect: false },
        { answerText: 'Hebrew', isCorrect: false },
        { answerText: 'English', isCorrect: true }
      ]
    },
    {
      questionText: 'Which of the following languages is related to Spanish the most?',
      answerOptions: [
        { answerText: 'Italian', isCorrect: true },
        { answerText: 'Portugese', isCorrect: false },
        { answerText: 'Malay', isCorrect: false },
        { answerText: 'Lahnda', isCorrect: false }
      ]
    },
    {
      questionText: 'Approximately how many languages are currently spoken in the world today?',
      answerOptions: [
        { answerText: 'Around 500', isCorrect: false },
        { answerText: 'Perhaps 2,000', isCorrect: false },
        { answerText: 'Maybe 2 ', isCorrect: false },
        { answerText: 'Around 7,000', isCorrect: true }
      ]
    },
    {
      questionText: 'Which of the following languages is constructed by J. R. R. Tolkien, the author of The Lord of the Rings?',
      answerOptions: [
        { answerText: 'Klingon', isCorrect: false },
        { answerText: 'Valarin', isCorrect: true },
        { answerText: 'Pig-Latin', isCorrect: false },
        { answerText: 'High Valyrian', isCorrect: false }
      ]
    },
    {
      questionText: 'What was the first language Jesus spoke?',
      answerOptions: [
        { answerText: 'Hebrew', isCorrect: false },
        { answerText: 'English', isCorrect: false },
        { answerText: 'Aramaic', isCorrect: true },
        { answerText: 'Arabic', isCorrect: false }
      ]
    },
    {
      questionText: 'What is the hardest language to learn?',
      answerOptions: [
        { answerText: 'Mandarin', isCorrect: true },
        { answerText: 'Spanish', isCorrect: false },
        { answerText: 'Turkish', isCorrect: false },
        { answerText: 'Russian', isCorrect: false }
      ]
    }
  ]
  let questions = [...Languagequestions];
    
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Questions showScore = {showScore} score = {score} currentQuestion = {currentQuestion} questions = {questions} handleAnswerOptionClick = {handleAnswerOptionClick}></Questions>
)
}