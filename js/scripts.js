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

var maxTime, timeLeft, titleCardDiv, choiceA, choiceB, choiceC, choiceD, currentAnswer;

maxTime = 90;
timeLeft = document.getElementById("timeRemaining");

startDiv = document.getElementById("startingPage");
questionDiv = document.getElementById("problems");

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
            if (problemIndex < problems.length -1){
                // End the game
            }
        }
    }, 1000);


};

// Show the current question and choices on the screen

// Check answers by showing if the user choose correct or incorrect answers



// Quiz event

// Click Start button
// Click any buttons
