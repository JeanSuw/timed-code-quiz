// Quiz Questions (All values are fixed)
const problems = [
    {
        question: "Where is the correct place to insert the JavaScript",
        choices: ["a. <head> or <body>", "b. <head>", "c. <body>", "d. <ul>"],
        answer: "a. <head> or <body>"
    },
    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js?\"",
        choices: ["a. <script href=\"xxx.js\">", "b. <script value=\"xxx.js\">", "c. <script name=\"xxx.js\">", "d. <script src=\"xxx.js\">"],
        answer: "d. <script src=\"xxx.js\">"
    },
    {
        question: "How do you create a function?",
        choices: ["a. myFunction():function", "b. function myFunction()", "c. function:myFunction()", "d. function=myFunction()"],
        answer: "b. function myFunction()"
    }
];

// Score recorded variables
var correctCounts = 0, problemIndex = 0;

// Reference Elements

var maxTime, timeLeft, startDiv, questionDiv, currentQuestion, choiceA, choiceB, choiceC, choiceD, currentAnswer;

maxTime = 90;
timeLeft = document.getElementById("timeRemaining");

startDiv = document.getElementById("startingPage");
questionDiv = document.getElementById("problems");
currentQuestion = document.getElementById("currentQuestion");
currentAnswer = document.getElementById("answerCheck");


choiceA = document.getElementById("buttonA");
choiceB = document.getElementById("buttonB");
choiceC = document.getElementById("buttonC");
choiceD = document.getElementById("buttonD");

// Start Quiz function and time the user
function startQuiz(){
    timeLeft.textContent = maxTime; // Set time

    // Close title card when user press start by disable starting page (Title page)
    startDiv.style.display = "none";
    // Display a container that holds one problem at a time
    questionDiv.style.display = "block";

    var startTimer = setInterval( function(){
        maxTime--;
        timeLeft.textContent = maxTime;
        if (maxTime <= 0){
            clearInterval(startTimer);
            if (problemIndex < problems.length-1){
                // End the game
            }
        }
    }, 1000);

    // Present with the next question
};

// Show the next question and choices on the screen
function nextProblem(){
    currentQuestion.textContent = problems[problemIndex].question;
    choiceA.textContent = problems[problemIndex].choices[0];
    choiceB.textContent = problems[problemIndex].choices[1];
    choiceC.textContent = problems[problemIndex].choices[2];
    choiceD.textContent = problems[problemIndex].choices[3];
}

// Check answers by showing if the user choose correct or incorrect answers
function isCorrect(){
    currentAnswer.style.display = "block";

    if (problems[problemIndex].answer === problems[problemIndex].choices[answer]){
        // isCorrect, then add 5 points
        currentAnswer.textContent = "Your answer (" + problems[problemIndex].choices[answer] + ") is Correct!";
    }else{
        // if not isCorrect, then subtract by 5 on the timer
        maxTime -= 5;
        timeLeft.textContent = maxTime;
        currentAnswer.textContent = "Wrong! Your time is deduct \n" + "The correct answer is " + problems[problemIndex].answer;
    }
    
    // increment index for the next question
    problemIndex++; 
    if (problemIndex < problems.length){
        nextProblem();
    }else{
        // end the game
    }

}

function clickA(){
    isCorrect(0);
}

function clickB(){
    isCorrect(1);
}

function clickC(){
    isCorrect(2);
}

function clickD(){
    isCorrect(3);
}



// Quiz event

// Click Start button
// Click any buttons
