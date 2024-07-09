/* jshint esversion: 8 */

// variables for the quiz
let yaynay = "unanswered";
const quizLength = 10;
let correctNum = 0;
let questionCount = 0;
const headerSection = document.getElementById("header");
const footerSection = document.getElementById("footer");
const landingSection = document.getElementById("landing-page");
const playButton = document.getElementById("play-btn");
const newGameSection = document.getElementById("start-game");
const playerName = document.getElementById("player-name");
const startGameBtn = document.getElementById("start-game-button");
const quitGameBtn = document.getElementById("quit-game-button");
const nextButton = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz");
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

quitGameBtn.addEventListener("click", leaveQuiz);

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
    shuffle(quizQuestions);
    buildQuizQuestion(questionCount);
    progressBar(questionCount);
    startTimer();
  }
}

// Left click and enter event listener for player to interact to start quiz
startGameBtn.addEventListener("click", startGame);
playerName.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    startGame();
  }
});

// Time variables 
let timeLeft;
const counter = document.getElementById("counter");
let timer;

/**
  * Duration for the each question to be answered for the quiz
  * every second a loop is placed.
  * Functions with the countdown function.
  */
function startTimer() {
  timeLeft = 30;
  timer = setInterval(function () {
    countdown();
  }, 1000); // Decrease time every second
}


/**
 * 
 */
function countdown(seconds) {
  if (seconds === 0) {
  counter.innerHTML = `0`;
  nextQuestion();
  } else {
    timeLeftWidth = timeLeftWidth -(100 / 30);
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

/**
 * 
 */
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
    startTimer();
    progressBar(questionCount);
  } else {
    counter.innerHTML = ``;
    endOfQuiz();
  }
}

nextButton.addEventListener("click", nextQuestion);

/**
 * 
 * 
 */
function buildQuizQuestion(questionID){
  let currentQuestionNum = document.getElementById("current-question");
  let totalQuestions = document.getElementById("total-questions");
  currentQuestionNum.innerHTML = questionCount + 1;
  totalQuestions.innerHTML = quizLength;
  question.innerHTML = quizQuestions[questionID].questionText;
  choiceOne.innerHTML = quizQuestions[questionID].choices[0];
  choiceTwo.innerHTML = quizQuestions[questionID].choices[1];
  choiceThree.innerHTML = quizQuestions[questionID].choices[2];
  choiceFour.innerHTML = quizQuestions[questionID].choices[3];
}

//
function resetAnswerStyles() {
  for(let answer of answerOptions){
    answer.setAttribute("class", "answer");
  }
}

// a yellow dot will indicate to the user which question they are on.
function progressBar(questionCount){
  document.getElementsByClassName("dot")[questionCount]
  .style.backgroundColor = "rgb(248, 183, 0)";
}
/**
 * 
 */
for (let answer of answerOptions){
  answer.addEventListener("click", choiceAnswer);
}

/**
 * 
 */
function choiceAnswer(event){
  resetAnswerStyles();
  this.setAttribute("class", "answer-selected");
  let targetID = event.target.id;
  evaluateAnswer(targetID);
}

/**
 * 
 * 
 */
function evaluateAnswer(targetID){
  let playerAnswer = document.getElementById(targetID).innerText;
  let correctAnswer = quizQuestions[questionCount].correctAns;
  
  if (correctAnswer == playerAnswer ){
    correctNum++;
    yaynay = "correct";
  } else {
    yaynay = "incorrect";
  }
}

/**
 * The score tracker changes the color of the dot to indicate the player's progress
 * whether the player answered correctly, incorrectly or left unanswered.
 * Which is set by teh evaluateAnswer function.
 * if not answered the color will be a custom shade of grey.
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


  const playerFeedback = document.querySelector("#player-feedback");
  let player = playerName.value;

  // Custom gifs for the feedback depending on score levels
  const gifs ={
    "awful": "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzV3NXMwbnBjN3EzeHN0c3h0djdoOG44dG03MjB4dDJoOGJoamdncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xnoIXebk3xYx4Q/giphy.gif",
    "average": "https://media.giphy.com/media/1jdXypkkQJtm41T74W/giphy.gif?cid=790b76117wjx5jb4zltahfielt9miy6yjn1o8px12wnb7xoz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "good": "https://media.giphy.com/media/WOYEEd2zPDEqS9r0Xx/giphy.gif?cid=790b76117wjx5jb4zltahfielt9miy6yjn1o8px12wnb7xoz&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "excellent": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3VuYnJxZDF2NHVpenQ5ZGd6NDU0eTJuaXU4NXFraGxwbDFvcGY5bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/w4g8JSKEkCmpwfMiRU/giphy.gif"
  };
  
  // Feedback display showing the player's name and message of their score with a custom gif.
  const gifContainer = document.querySelector("#gif-container");
  if (correctNum <= 2){
    playerFeedback.innerHTML = `WHAT ARE YOU AN IDIOT SANDWICH, YOU DONKEY!!!!!! ${player}!`;
    const gif = document.createElement("img");
    gif.src = gifs.awful;
    gif.alt = "Gordon Ramsay idiot sandwich";
    gifContainer.appendChild(gif);
  } else if (correctNum <= 5){
    playerFeedback.innerHTML = `Well that was nuts ${player}!`;
    const gif = document.createElement("img");
    gif.src = gifs.average;
    gif.alt = "Carmen complimenting from the bear";
    gifContainer.appendChild(gif);
  } else if (correctNum <= 8){
    playerFeedback.innerHTML = `You're a decent cook, but you're not a chef ${player}!`;
    const gif = document.createElement("img");
    gif.src = gifs.good;
    gif.alt = "Carmen praising from The Bear";
    gifContainer.appendChild(gif);
  } else if (correctNum >= 10){
    playerFeedback.innerHTML = `Très bon vraiment un chef étoilé Michelin, bravo ${player}!`
    const gif = document.createElement("img");
    gif.src = gifs.excellent;
    gif.alt = "Good soup Adam Driver";
  }
}
