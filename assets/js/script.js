// variables for the quiz
let yaynay = "unanswered";
const quizLength = 10;
let correctNum = 0;
let questionCount = 0;
const newGameSection = document.getElementById("start-game");
const landingSection = document.getElementById("landing-page");
const playButton = document.getElementById("button");

function startNewGame() {
    landingSection.style.display = "none";
    newGameSection.style.display = "inline-flex";
    playerName.focus();
  }
      
playButton.addEventListener("click", startNewGame);