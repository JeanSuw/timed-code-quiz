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

// 
