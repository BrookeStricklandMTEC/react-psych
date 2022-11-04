import React from 'react'; 
import './App.css';


export default function App() {
  return <div className={error}> Error </div> 
}

// export default function App() {
// const Sciencequestions = [
//   {
//     questionText: 'How many teeth does an adult human have?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '32', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the rarest blood type?', 
//     answerOptions:[
//       {answerText: 'AB Negative', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Diabetes develops as the result of a problem with which specific organ in the body?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Pancreas', isCorrect: true}
//     ],
//     questionText: 'How many elements are there in the periodic table?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '118', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'The oldest living tree is 4,843 years old and can be found where?', 
//     answerOptions:[
//       {answerText: 'California', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'How long does a human red blood cell survive?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '120 days', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the tallest type of grass?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Bamboo', isCorrect: true}
//     ],
//     questionText: 'What type of animal was Laika, the first animal to orbit the Earth?', 
//     answerOptions:[
//       {answerText: 'Dog', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Monkey', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the hardest known natural material?', 
//     answerOptions:[
//       {answerText: 'Netherite', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Diamond', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Dolly was the first ever living creature to be cloned. What type of animal was she?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Sheep', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'How many bones do sharks have in total?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Zero', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Discovered by Alexander Fleming, this is now used to treat infections and is considered one of the most important discoveries in the field of medical science. What is it?', 
//     answerOptions:[
//       {answerText: 'Stomach acid', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Penicillin', isCorrect: true}
//     ],
//     questionText: 'What is a geiger counter used to measure?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Radiation', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'From what tree do acorns come from?', 
//     answerOptions:[
//       {answerText: 'Oak trees', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'This theory aims to explain how Pangea became separate continents, suggesting that the movement of tectonic plates caused the mass to break off and drift into different places.', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'The Continental Drift Theory', isCorrect: true}
//     ],
//     questionText: 'Where can you find the smallest bone in the human body?', 
//     answerOptions:[
//       {answerText: 'Middle ear', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'This planet spins the fastest, completing one whole rotation in just 10 hours. Which planet is it?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Jupiter', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'True or false: sound travels faster in air than in water.', 
//     answerOptions:[
//       {answerText: 'True', isCorrect: false},
//       {answerText: 'False', isCorrect: true},
//     ],
//     questionText: 'Which of Newton’s Laws state that ‘for every action, there is an equal and opposite reaction?’', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'The third law of motion', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Animals that eat both plants and meat are called what?', 
//     answerOptions:[
//       {answerText: 'Omnivores', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ]
//   }
// ]
// // 
// // 
// // 
// const Historyquestions = [
//   { 
//     questionText: 'What is the smallest country in the world?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Vatican City', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//   questionText: 'In what year was Alaska sold to the United States of America?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '1867', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'When was the Declaration of Independence signed?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'August 2, 1776', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'The United States bought Alaska from which country?', 
//     answerOptions:[
//       {answerText: 'Russia', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Who was the fourth president of the United States?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'James Madison', isCorrect: true}
//     ],
//     questionText: 'Fill in the blank: The 19th Amendment guarantees ____ the right to vote', 
//     answerOptions:[
//       {answerText: 'Asians', isCorrect: false},
//       {answerText: 'Blacks', isCorrect: false},
//       {answerText: 'Women', isCorrect: true},
//       {answerText: '18 year olds', isCorrect: false}
//     ],
//     questionText: 'What was the name of the landmark Supreme Court case that ruled the racial segregation of schools unconstitutional?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Brown v. Board of Education', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'In what year did child labor laws start in the United States?', 
//     answerOptions:[
//       {answerText: '1938', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'The “shot heard round the world” describes the beginning of which battles in the American Revolution?', 
//     answerOptions:[
//       {answerText: 'The Battles of Lexington and Concord', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is considered the largest empire in history?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'The Mongol Empire', isCorrect: true}
//     ],
//     questionText: 'Who was the first Emperor of Rome?', 
//     answerOptions:[
//       {answerText: 'Augustus', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the world’s oldest recorded civilization?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Mesopotamia', isCorrect: true}
//     ],
//     questionText: 'What dynasty was Cleopatra part of?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'The Ptolemaic dynasty', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which fabric was invented in Ancient China?', 
//     answerOptions:[
//       {answerText: 'Silk', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which ancient figure is often considered the founder of Western philosophy?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Socrates', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What was the name of the Ukrainian nuclear power plant that was the site of a nuclear disaster in April 1986?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Chernobyl', isCorrect: true}
//     ],
//     questionText: 'Where did Albert Einstein live before moving to the United States?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Germany', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What was the first state to legalize same-sex marriage?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Massachusetts', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Where was Martin Luther King, Jr. born?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Atlanta, Georgia', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'In which year did Hitler commit suicide?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '1945', isCorrect: true}
//     ]
//   }
// ]
// // 
// // 
// const Languagequestions = [
//   {
//     questionText: 'Which of the following languages has no alphabet?', 
//     answerOptions:[
//       {answerText: 'Chinese', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which continent has the most languages?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Asia', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'The expression “oy vey” comes from what language?', 
//     answerOptions:[
//       {answerText: 'French', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Yiddish', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which is the most widely spoken language in the world?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Hindi', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Mandarin Chinese', isCorrect: true}
//     ],
//     questionText: 'What is the national language of India?', 
//     answerOptions:[
//       {answerText: 'Hindi', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'The term “déjà vu” comes from what language?', 
//     answerOptions:[
//       {answerText: 'French', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the official language of Nigeria?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'English', isCorrect: true},
//       {answerText: 'French', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What country has the most official languages?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Zimbabwe', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'When would you say namaste to someone?', 
//     answerOptions:[
//       {answerText: 'When you leave their house', isCorrect: false},
//       {answerText: 'If you want them to leave you alone', isCorrect: false},
//       {answerText: 'To show respect', isCorrect: false},
//       {answerText: 'When greeting them', isCorrect: true}
//     ],
//     questionText: 'According to dictionary entries, which language has the largest number of words (more than 200,000 words)?', 
//     answerOptions:[
//       {answerText: 'English', isCorrect: true},
//       {answerText: 'Hindi', isCorrect: false},
//       {answerText: 'Hebrew', isCorrect: false},
//       {answerText: 'Chinese', isCorrect: false}
//     ],
//     questionText: 'Which of the following languages is related to Spanish the most?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Italian', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Approximately how many languages are currently spoken in the world today?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Around 7,000', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which of the following languages is constructed by J. R. R. Tolkien, the author of The Lord of the Rings?', 
//     answerOptions:[
//       {answerText: 'Klingon', isCorrect: false},
//       {answerText: 'High Valyrian', isCorrect: false},
//       {answerText: 'Pig-Latin', isCorrect: false},
//       {answerText: 'Valarin', isCorrect: true}
//     ],
//     questionText: 'What was the first language Jesus spoke?', 
//     answerOptions:[
//       {answerText: 'Aramaic', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the hardest language to learn?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Mandarin', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ]
//     ]
//   }
// ]
// const Culturequestions = [
//   {
//     questionText: 'Which Avenger other than Captain America was able to pick up Thor's Mjolnir in the Marvel movies?', 
//     answerOptions:[
//       {answerText: 'Vision', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which movie kicked off the Skywalker saga in 1977?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'A New Hope', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is Kramer's first name on Seinfeld?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Cosmo', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Who is the half-blood prince in Harry Potter?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Severus Snape', isCorrect: true}
//     ],
//     questionText: 'What movie in 2019 topped Avatar as the highest-grossing film of all time?', 
//     answerOptions:[
//       {answerText: 'Avengers: Endgame', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Who is the antagonist in the 1988 film “Die Hard”?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Hans Gruber', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What film did the phrase “I see dead people” come from?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'The Sixth Sense', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Which female artist is often referred to as the “Princess of Pop”?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Britney Spears', isCorrect: true}
//     ],
//     questionText: 'Which of Stephen King’s novels was the first to be adapted into a film?', 
//     answerOptions:[
//       {answerText: 'Carrie', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'Who is Marvel’s first superhero in the comic books?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'The Human Torch', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the name of the mountain in “Lord of the Rings” which the One Ring must be thrown into?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Mount Doom', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'According to Billboard, who is the best-selling boy band of all time?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Backstreet Boys', isCorrect: true}
//     ],
//     questionText: 'What movie has the best selling soundtrack of all time', 
//     answerOptions:[
//       {answerText: 'The Bodyguard', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'How many languages can C-3PO speak in Star Wars?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Six Million', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What is the longest running adult animated series in Television History', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'The Simpsons', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'In 2021 who changed his name to Ye?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Kanye West', isCorrect: true}
//     ],
//     questionText: 'In Rich and Morty: What sauce is Rick obsessed with?', 
//     answerOptions:[
//       {answerText: 'Szechuan sauce', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What’s Spider-Man’s middle name?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: 'Benjamin', isCorrect: true},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'In The Matrix: What software company did Neo work for?', 
//     answerOptions:[
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'MetaCortex', isCorrect: true},
//       {answerText: '', isCorrect: false}
//     ],
//     questionText: 'What was the first phrase sent by SMS?', 
//     answerOptions:[
//       {answerText: 'Hello World', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: '', isCorrect: false},
//       {answerText: 'Merry Christmas', isCorrect: true}
//     ]
//   }
// ]
// }

// <div className='answer-section'>
// 	{questions[currentQuestion].answerOptions.map((answerOption) => (
// 		<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 	))}
// </div>


