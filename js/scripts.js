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

var maxTime, timeLeft, timesUp, viewHighScoreDiv, startDiv, questionDiv, currentQuestion, startBTN, choiceA, choiceB, choiceC, choiceD, currentAnswer, highScoreRef, scoreSummary, finalScoreRef, groupList, initialInput;

maxTime = 90;
timeLeft = document.getElementById("timeRemaining");
timesUp = document.getElementById("stopTime");
viewHighScoreDiv = document.getElementById("viewHighScoreLink");

startDiv = document.getElementById("startingPage");
questionDiv = document.getElementById("problems");
currentQuestion = document.getElementById("currentQuestion");
currentAnswer = document.getElementById("answerCheck");


// List of HighScores and summary report
highScoreRef = document.getElementById("highScoresSection");
scoreSummary = document.getElementById("reportUserScore");
finalScoreRef = document.getElementById("userScore");
groupList = document.getElementById("listOfPeopleScores");
initialInput = document.getElementById("userInitials");

//buttons
startBTN = document.getElementById("startButtonRef");
submitNameBTN = document.getElementById("submitInitialButton");

// multiple choice buttons references
choiceA = document.getElementById("buttonA");
choiceB = document.getElementById("buttonB");
choiceC = document.getElementById("buttonC");
choiceD = document.getElementById("buttonD");

// Start Quiz function and time the user
function startQuiz(){
    timeLeft.textContent = maxTime; // Set time
    initialInput.textContent = ""; // Reset to empty string

    // Close title card when user press start by disable starting page (Title page)
    startDiv.style.display = "none";
    timesUp.style.display = "none";
    // Display a container that holds one problem at a time
    questionDiv.style.display = "block";

    var startTimer = setInterval( function(){
        maxTime--;
        timeLeft.textContent = maxTime;
        if (maxTime <= 0){
            clearInterval(startTimer);
            if (problemIndex < problems.length-1){
                // End the game
                endGame();
            }
        }
    }, 1000);

    // Present with the next question
    nextProblem();
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
function isCorrect(answerParam){
    currentAnswer.style.display = "block";

    if (problems[problemIndex].answer === problems[problemIndex].choices[answerParam]){
        // isCorrect, then add 5 points
        correctCounts++;
        currentAnswer.textContent = "Your answer (" + problems[problemIndex].choices[answerParam] + ") is Correct!";
    }else{
        // if not isCorrect, then subtract by 5 on the timer
        maxTime -= 5;
        correctCounts = 0;
        timeLeft.textContent = maxTime;
        currentAnswer.textContent = "Wrong! Your time is deduct \n" + "The correct answer is " + problems[problemIndex].answer;
    }
    
    // increment index for the next question
    problemIndex++; 
    if (problemIndex < problems.length){
        nextProblem();
    }else{
        // end the game
        endGame();
    }

}

// These clicker function is used to check users when they click collectly on one of the choices below
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

function endGame(){
    startDiv.style.display = "none";
    // Get rid of questions and muliple choice page all together
    questionDiv.style.display = "none";
    timeLeft.style.display = "none";
    timesUp.style.display = "block";
    // Display the summary of the final score
    scoreSummary.style.display = "block";

    // add final score to finish the sentence "Your final score is ..."
    finalScoreRef.textContent = correctCounts;
}

// Storing user's initial and highscore to local storage
function recordScores(event){
    event.preventDefault();
    // alert user when they did not add initials
    if (initialInput.value === ""){
        alert("Don't forget to enter your initials!");
        return;
    }
    // Display the highscore
    startDiv.style.display = "none";
    timeLeft.style.display = "none";
    timesUp.style.display = "none";
    // block summary
    highScoreRef.style.display = "block";

    // store User's scores to local storage
    var currentHighScore = localStorage.getItem("high scores");
    var scoreList;
    console.log(scoreList);
    // if scoreList is empty 
    if(scoreList === undefined){ // Need help
        //Set an empty array list 
        console.log("It went here");
        scoreList = [];
    }else{
        // Get old saves
        scoreList = JSON.parse(currentHighScore);
    }

    var userInfo = {
        initials: initialInput.value,
        finalScore: finalScoreRef.textContent
    };
    console.log(typeof userInfo);
    
    // Pushing object list to Scorelist
    scoreList.push(userInfo); // It does not let me push the object

    // stringify the input for local storage
    var stringScoreList = JSON.stringify(scoreList);
    window.localStorage.setItem("high scores", stringScoreList);

    // Show history
    getScoreHistory();
}

function getScoreHistory(){
    // only highscoreref (Hall of fame)
    startDiv.style.display = "none";
    questionDiv.style.display = "none";
    timeLeft.style.display = "none";
    timesUp.style.display = "none";
    scoreSummary.style.display = "none";
    highScoreRef.style.display = "block";

    // Pull old history if any
    var getOldScores = localStorage.getItem("high scores",);
    if (getOldScores === null){
        return;
    }

    var tempList = JSON.parse(getOldScores);

    for (var i = 0; i <getOldScores.length; i++){
        var newLine = document.createElement("p");
        newLine.innerHTML = getOldScores[i].initials + ": " + getOldScores[i].finalScore;
        groupList.appendChild(newLine);
    }
}

// Quiz event

// Click Start button
startBTN.addEventListener("click", startQuiz);

// Click any buttons
choiceA.addEventListener("click", clickA);
choiceB.addEventListener("click", clickB);
choiceC.addEventListener("click", clickC);
choiceD.addEventListener("click", clickD);

submitNameBTN.addEventListener("click", function(event){recordScores(event);});

viewHighScoreDiv.addEventListener("click", function(event){getScoreHistory(event);});