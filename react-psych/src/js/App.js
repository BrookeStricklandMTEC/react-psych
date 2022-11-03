import React, {useState} from 'react'; 
import '../style/App.css';


export default function App() {
const Sciencequestions = [
  {
    questionText: 'How many teeth does an adult human have?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '32', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What is the rarest blood type?', 
    answerOptions:[
      {answerText: 'AB Negative', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Diabetes develops as the result of a problem with which specific organ in the body?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Pancreas', isCorrect: true}
    ],
    questionText: 'How many elements are there in the periodic table?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '118', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'The oldest living tree is 4,843 years old and can be found where?', 
    answerOptions:[
      {answerText: 'California', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'How long does a human red blood cell survive?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '120 days', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What is the tallest type of grass?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Bamboo', isCorrect: true}
    ],
    questionText: 'What type of animal was Laika, the first animal to orbit the Earth?', 
    answerOptions:[
      {answerText: 'Dog', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Monkey', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What is the hardest known natural material?', 
    answerOptions:[
      {answerText: 'Netherite', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Diamond', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Dolly was the first ever living creature to be cloned. What type of animal was she?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Sheep', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'How many bones do sharks have in total?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'Zero', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Discovered by Alexander Fleming, this is now used to treat infections and is considered one of the most important discoveries in the field of medical science. What is it?', 
    answerOptions:[
      {answerText: 'Stomach acid', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Penicillin', isCorrect: true}
    ],
    questionText: 'What is a geiger counter used to measure?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'Radiation', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'From what tree do acorns come from?', 
    answerOptions:[
      {answerText: 'Oak trees', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'This theory aims to explain how Pangea became separate continents, suggesting that the movement of tectonic plates caused the mass to break off and drift into different places.', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'The Continental Drift Theory', isCorrect: true}
    ],
    questionText: 'Where can you find the smallest bone in the human body?', 
    answerOptions:[
      {answerText: 'Middle ear', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'This planet spins the fastest, completing one whole rotation in just 10 hours. Which planet is it?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'Jupiter', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'True or false: sound travels faster in air than in water.', 
    answerOptions:[
      {answerText: 'True', isCorrect: false},
      {answerText: 'False', isCorrect: true},
    ],
    questionText: 'Which of Newton’s Laws state that ‘for every action, there is an equal and opposite reaction?’', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'The third law of motion', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Animals that eat both plants and meat are called what?', 
    answerOptions:[
      {answerText: 'Omnivores', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ]
  }
]
// 
// 
// 
const Historyquestions = [
  { 
    questionText: 'What is the smallest country in the world?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Vatican City', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
  questionText: 'In what year was Alaska sold to the United States of America?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '1867', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'When was the Declaration of Independence signed?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'August 2, 1776', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'The United States bought Alaska from which country?', 
    answerOptions:[
      {answerText: 'Russia', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Who was the fourth president of the United States?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'James Madison', isCorrect: true}
    ],
    questionText: 'Fill in the blank: The 19th Amendment guarantees ____ the right to vote', 
    answerOptions:[
      {answerText: 'Asians', isCorrect: false},
      {answerText: 'Blacks', isCorrect: false},
      {answerText: 'Women', isCorrect: true},
      {answerText: '18 year olds', isCorrect: false}
    ],
    questionText: 'What was the name of the landmark Supreme Court case that ruled the racial segregation of schools unconstitutional?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'Brown v. Board of Education', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In what year did child labor laws start in the United States?', 
    answerOptions:[
      {answerText: '1938', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'The “shot heard round the world” describes the beginning of which battles in the American Revolution?', 
    answerOptions:[
      {answerText: 'The Battles of Lexington and Concord', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What is considered the largest empire in history?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'The Mongol Empire', isCorrect: true}
    ],
    questionText: 'Who was the first Emperor of Rome?', 
    answerOptions:[
      {answerText: 'Augustus', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What is the world’s oldest recorded civilization?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Mesopotamia', isCorrect: true}
    ],
    questionText: 'What dynasty was Cleopatra part of?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'The Ptolemaic dynasty', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Which fabric was invented in Ancient China?', 
    answerOptions:[
      {answerText: 'Silk', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Which ancient figure is often considered the founder of Western philosophy?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'Socrates', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What was the name of the Ukrainian nuclear power plant that was the site of a nuclear disaster in April 1986?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Chernobyl', isCorrect: true}
    ],
    questionText: 'Where did Albert Einstein live before moving to the United States?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Germany', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'What was the first state to legalize same-sex marriage?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: 'Massachusetts', isCorrect: true},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'Where was Martin Luther King, Jr. born?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: 'Atlanta, Georgia', isCorrect: true},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '1945', isCorrect: true}
    ]
  }
]
// 
// 
const Languagequestions = [
  {
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ]
  }
]
const Culturequestions = [
  {
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ],
    questionText: 'In which year did Hitler commit suicide?', 
    answerOptions:[
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false},
      {answerText: '', isCorrect: false}
    ]
  }
]
}

export default App;
