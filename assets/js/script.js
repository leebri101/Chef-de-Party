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