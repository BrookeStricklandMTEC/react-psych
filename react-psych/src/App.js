import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'; 

import Questions from './Questions'

import Start from './Start';
import Restart from './Restart';
import Quit from './Quit';

import CategorySelect from './Category';

export default function App() {

  const Sciencequestions = [
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
  // 
  // 
  // 
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
  // 
  // 
  // 
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

  // 
  // 
  // 
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

  // let questions = [...Culturequestions, ...Sciencequestions, ...Historyquestions, ...Languagequestions];
  let questions = [...Sciencequestions];

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
    <>
      <Router> 
        <Routes>
          <Route path='/' element={<div className='start-game-div'> <Start> </Start></div>}> </Route>
          <Route path='/category' element={<div className='category-div'> <CategorySelect> </CategorySelect> </div>}> </Route>
          <Route path='/App/Sciencequestions' element={<Questions showScore = {showScore} score = {score} currentQuestion = {currentQuestion} Restart = {Restart} Quit = {Quit} questions = {questions} handleAnswerOptionClick = {handleAnswerOptionClick}></Questions>}> </Route>
          {/* <Route path='App/Historyquestions' element={<button id='history-select' className='button'> History </button>}> </Route>
          <Route path='App/Languagequestions' element={<button id='language-select' className='button'> Language </button>}> </Route>
          <Route path='App/Culturequestions' element={<button id='culture-select' className='button'> Pop Culture </button>}> </Route>
          <Route path='App/Quit' element={<button id='quit' className='button'> Quit </button>}> </Route>
          <Route path='App/Restart' element={<button id='restart' className='button'> Restart </button>}> </Route> */}
        </Routes>
      </Router>
    </>
  );

  

}




