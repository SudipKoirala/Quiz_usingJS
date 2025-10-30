const questionSet = [
    {
    question: "What is the capital city of Japan?",
    ans:[
        {text: " Seoul", correct: false},
        {text: " Beijing", correct: false},
        {text: " Tokyo", correct: true},
        {text: " Bangkok", correct: false},  
    ]
},
{
    question: "Who wrote the play Romeo and Juliet?",
    ans:[
        {text: " William Shakespeare", correct: true},
        {text: " Charles Dickens", correct: false},
        {text: " Jane Austen", correct: false},
        {text: " Mark Twain", correct: false},  
    ]
},
{
    question: "Which planet is known as the Red Planet?",
    ans:[
        {text: " Earth", correct: false},
        {text: " Venus", correct: false},
        {text: " Mars", correct: true},
        {text: " Jupiter", correct: false},  
    ]
},
{
    question: "What is the largest ocean in the world?",
    ans:[
        {text: " Indian Ocean", correct: false},
        {text: " Arctic Ocean", correct: false},
        {text: " Atlantic Ocean", correct: false},
        {text: " Pacific Ocean", correct: true},  
    ]
},
{
    question: "How many continents are there on Earth?",
    ans:[
        {text: " 5", correct: false},
        {text: " 6", correct: false},
        {text: " 7", correct: true},
        {text: " 8", correct: false},  
    ]
},
{
    question: "What is the chemical symbol for water?",
    ans:[
        {text: " O₂", correct: false},
        {text: " CO₂", correct: false},
        {text: " HO₂", correct: false},
        {text: " H₂O", correct: true},  
    ]
},
{
    question: "Which country is known as the Land of the Rising Sun?",
    ans:[
        {text: " China", correct: false},
        {text: " Japan", correct: true},
        {text: " South Korea", correct: false},
        {text: " Thailand", correct: false},  
    ]
},
{
    question: "Who painted the Mona Lisa?",
    ans:[
        {text: " Vincent van Gogh", correct: false},
        {text: " Pablo Picasso", correct: false},
        {text: " Leonardo da Vinci", correct: true},
        {text: " Michelangelo", correct: false},  
    ]
},
{
    question: "What is the largest mammal in the world?",
    ans:[
        {text: " African Elephant", correct: false},
        {text: " Blue Whale", correct: true},
        {text: " Giraffe", correct: false},
        {text: " Hippopotamus", correct: false},  
    ]
},
{
    question: "Which gas do plants use during photosynthesis?",
    ans:[
        {text: " Nitrogen", correct: false},
        {text: " Carbon Dioxide", correct: true},
        {text: " Hydrogen", correct: false},
        {text: " Oxygen", correct: false},  
    ]
},

]

const questionElement = document.getElementsByClassName("question");
const ansElement = document.getElementsByClassName("ans");
const nextButton = document.getElementById("next");

let score = 0;
let currquestionIndex = 0;

const startQuiz = (()=>{
currquestionIndex = 0;
score= 0;
nextButton.innerHTML = "Next";
showQuestion();
})

const showQuestion = (()=>{
let currentQuestion = questionSet[currquestionIndex];
let questionNo = currquestionIndex + 1;
questionElement.innerHTML = `${questionNo} . ${currentQuestion.question} `


})