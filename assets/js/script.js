/* jshint esversion: 8 */

// variables for the quiz
let yaynay = "unanswered";
const quizLength = 10;
let correctNum = 0;
let questionCount = 0;
const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
const landingSection = document.getElementById("landing-page");
const playButton = document.getElementById("play-button");
const newGameSection = document.getElementById("start-game");
const playerName = document.getElementById("player-name");
const startBtn = document.getElementById("start-button");
const quitBtn = document.getElementById("quit-button");
const nextBtn = document.getElementById("next-button");
const quizSection = document.getElementById("quiz-section");
const question = document.getElementById("question-box");
const choiceOne = document.getElementById("answer1");
const choiceTwo = document.getElementById("answer2");
const choiceThree = document.getElementById("answer3");
const choiceFour = document.getElementById("answer4");
const resultSection = document.getElementById("result");
const answerBox = document.getElementById("answer-box");
const answerOptions = answerBox.querySelectorAll(".answer");
const timeBar = document.getElementById("time-left");


/**
 * The CSS styling elements that are used in the script is to hide sections of the site for a cleaner/smoother look.
 * Except for the home-page which has a Call To Action (CTA) play button, which prompts the user click to start the quiz.
 * When clicking the CTA button it displays a text-box to tell the user to enter a name within the placeholder box,
 * which players are instructed to enter their name and click the start button to begin the quiz.
 * Players are also given the option to quit the quiz at any time by clicking the quit button. 
 */
function startNewGame() {
    landingSection.style.display = "none";
    newGameSection.style.display = "inline-flex";
    playerName.focus();
  }
      
playButton.addEventListener("click", startNewGame);

function leaveQuiz() {
    playerName.value = "";
    newGameSection.style.display = "none";
    landingSection.style.display = "inline-flex";
  }

quitBtn.addEventListener("click", leaveQuiz);

/**
 * Once the user has clicked on teh CTA button, the user is prompted to enter their name and click start to begin the quiz.
 * If there is no input from the player an errorhandler is in place to prompt the player to input their name in the placeholder. 
 * Once the player inputs their name, the questions will be randomized, built and will display the first question at random, 
 * (which will be taken from the questions.js file).
 * The timer will start and the player will be given  set amount fo time to answer the question.
 */
function startGame() {
  if (playerName.value == "" || playerName == null || playerName == undefined){
    playerName.style.borderBlockColor = "red";
  } else{
    quizSection.style.display = "inline-flex";
    newGameSection.style.display = "none";
    headerSection.style.display = "none";
    footerSection.style.display = "none";
    shuffle(quizQuestion);
    buildQuizQuestion(questionCount);
    progressBar(questionCount);
    startTimer();
  }
}

// Left click and enter event listener for player to interact to start quiz
startBtn.addEventListener("click", startGame);
playerName.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    startGame();
  }
});

// Time variables 
let timeLeft;
const counter = document.getElementById("counter");
let timer;

function startTimer() {
  timeLeft = 30; // Countdown from 30 seconds
  timer = setInterval(function () {
    countdown();
  }, 1000); // Decrease time every second
}

function countdown() {
  if (timeLeft === 0) {
    counter.innerHTML = `0`;
    nextQuestion();
  } else {
    timeLeftWidth = timeLeftWidth -(100 - 30);
    timeLeft -= 1;
    counter.innerHTML = timeLeft;
    timeBar.style.width = timeLeftWidth + "%";
    if (timeLeft >= 20) {
      timeBar.style.backgroundColor = "rgb(85, 107, 47)";
    } else if (timeLeft <= 10) {
      timeBar.style.backgroundColor = "rgb(217, 53, 6)";
    } else {
      timeBar.style.backgroundColor = "rgb(248, 183, 0)";
    }
  }
}

let timeLeftWidth = 100;

function resetTimer () {
  counter.innerHTML = `30`;
  timeLeftWidth = 100;
  timeBar.style.width  = "100%";
  timeBar.style.backgroundColor = "rgb(85, 107, 47)";
  clearInterval(timer);
}

/**
 * "Fisher Yates" method to shuffle questions in any random order for fairness.
 *  Credits go to Mike Bostock. https://bost.ocks.org/mike/shuffle/
*/
function shuffle(array) {
  let m = array.length, 
  t, i;
  
  // While there remain elements to shuffle…
  while (m) {
    
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  
  return array;
}
/**
 * 
 */
function nextQuestion(){
  resetAnswerStyles();
  resetTimer();
  questionCount += 1;
  scoreTracker();
  if (questionCount < quizLength){
    buildQuizQuestion(questionCount);
    progressBar(questionCount);
    startTimer();
  }else{
    counter.innerHTML= ``;
    endOfQuiz();
  }
}

nextBtn.addEventListener("click", nextQuestion);

/**
 * 
 * 
 */
function buildQuizQuestion(questionID){
  let currentQuestionNum = document.getElementById("current-question");
  let totalQuestions = document.getElementById("total-questions");
  currentQuestionNum.innerHTML = questionCount + 1;
  totalQuestions.innerHTML = quizLength;
  question.innerHTML = quizQuestion[questionID].questionText;
  choiceOne.innerHTML = quizQuestion[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestion[questionID].choices[1];
  choiceThree.innerHTML = quizQuestion[questionID].choices[2];
  choiceFour.innerHTML = quizQuestion[questionID].choices[3];
}

//
function resetAnswer() {
  for(let answer of answerOptions){
    answer.setAttribute("class", "answer");
  }
}

//
function progressBar(questionCount){
  document.getElementsByClassName("dot")[questionCount]
.style.backgroundColor = "rgb(235, 137, 33)";
}

for (let answer of answerOptions){
  answer.addEventListener("click", choiceAnswer());
}

function choiceAnswer(event){
  resetAnswer();
  event.target.setAttribute("class", "answer-selected");
  let targetID = event.target.id;
  evaluateAnswer(targetID);
}

function evaluateAnswer(targetID){
  let playerAnswer = document.getElementById(targetID).innerText;
  let correctAnswer = quizQuestion[questionCount].correctAns;
  if (playerAnswer == correctAnswer){
    correctNum++;
    yaynay = "correct";
  } else {
    yaynay = "incorrect";
  }
}

/**
 * The 
 */
function scoreTracker(){
  let trackerColor;
  switch(yaynay){
    case "correct":
      trackerColor = "rgb(85,107,47)";
      break;
    case "incorrect":
      trackerColor = "rgb(217, 53, 6)";
      break;
    case undefined:
    case null:
    case "unanswered":
      trackerColor = "rgb(194, 194, 194)";
      break;
  }
  document.getElementsByClassName("dot")[questionCount - 1].style.backgroundColor = trackerColor;
/**
 * Yaynay variable for "unanswered" questions to a custom color shade of grey.
 * Which resets the feedback for every question.
 * Which can be overridden by the click event listener,
 * passing to choiceAnswer() function which calls evaluateAnswer().
 */
  yaynay = "unanswered";
}

/**
 * Only called once the quiz has reached the quizLength of 10 questions.
 * Which then displays the header & footer,
 * to display the results section.
 */
function endOfQuiz(){
  quizSection.style.display = "none";
  resultSection.style.display = "inline-flex";
    headerSection.style.display = "block";
    footerSection.style.display = "block";
  userResult();
}

/**
 * Called on the endOfQuiz function 
 * which will display the amount of correct answers
 * by the user/the quiz total questions
 */
function userResult(){
  const scoreResult = document.querySelector("#score");
  let resultOutput = `${correctNum} / ${questionCount}`;
  scoreResult.innerHTML = resultOutput; 

  // Feedback display which shows the player's name and message of the total score
  const playerFeedback = document.querySelector("#player-feedback");
  let player = playerName.value;
  if (correctNum <= 2){
    playerFeedback.innerHTML = `WHAT ARE YOU AN IDIOT SANDWICH, YOU DONKEY!!!!!! ${player}!`;
  } else if (correctNum <= 5){
    playerFeedback.innerHTML = `Well that was nuts ${player}!`;
  } else if (correctNum <= 8){
    playerFeedback.innerHTML = `You're a decent cook, but you're not a chef ${player}!`;
  } else if (correctNum >= 10){
    playerFeedback.innerHTML = `Très bon vraiment un chef étoilé Michelin, bravo ${player}!`
  }
}
