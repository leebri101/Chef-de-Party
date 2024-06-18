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
const startBtn = document.getElementById("start-btn");
const quitBtn = document.getElementById("quit-btn");
const nextBtn = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz-section");
const question = document.getElementById("question-box");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answerBox = document.getElementById("answer-box");
const answerOptions = document.getElementsByClassName(".answer");
const resultSection = document.getElementById("result");
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
    shuffle(quizQuestions);
    buildQuizQuestion(questionCount);
    progressBar(questionCount);
    startTimer();
  }
}

// Left click and enter event listener for player to interact to start quiz
startBtn.addEventListener("click", startGame);
playerName.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    startGame();
  }
});


