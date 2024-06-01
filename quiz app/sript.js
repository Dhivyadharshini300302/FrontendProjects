

const questions=[
    {
        question: "which is the largest animal in the world?",
        answers:[
            
            { text: "Shark" , correct: false },
            { text: "Blue whale" , correct: true },
            { text: "Elephant" , correct: false },
            { text: "Giraffe" , correct: false },
        ]
    },
    {
        question: "What is the capital of France?",
        answers:[
            
            { text: "Rome" , correct: false },
            { text: "Paris" , correct: true },
            { text: "London" , correct: false },
            { text: "Berlin" , correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers:[
            
            { text: "Jupiter" , correct: false },
            { text: "Venus" , correct: false },
            { text: "Mars" , correct: true },
            { text: "Saturn" , correct: false },
        ]
    },
    {
        question: "Who is the author of To Kill a Mockingbird?",
        answers:[
            
            { text: "Harper Lee" , correct: true },
            { text: "Ernest Hemingway" , correct: false },
            { text: "J.K. Rowling" , correct: false },
            { text: "F. Scott Fitzgerald" , correct: false },
        ]
    },
    
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerbutton");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
      const button =document.createElement("button");
      button.innerHTML=answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
      if(answer.correct){
        button.dataset.correct =answer.correct;
      }
      button.addEventListener("click",selectAnswer);
        
    });
}
function resetState(){
    nextButton.style.display="none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextButton.style.display="block"

}
startQuiz();
