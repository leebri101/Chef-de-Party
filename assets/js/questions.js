/* jshint esversion: 8 */

/**
 * Question and Answer structure:
 * Each Q&A object is set up as an array,
 * Each of the objects contain:
 * 1. Question numbers for the user display in the #question-number element in quiz-tracker. 
 * 2. Each question text will fill the #question-box element.
 * 3. Each object contains an array with 4 texted based choices for the user to pick form.
 * 4. The object which contains the correct answer will be compared from the user's selection of 'choices'.
 * (This is a requirement as the indexes start from 0).
 * Unintuitive for casual users or with little to no knowledge.
 */

const quizQuestions = [{
    questionNum: "1",
    questionText: “How many different ways can you ingredients ?”,
    choices: [
      “6”,
      “4”,
      “8”,
      “2”
    ],
    correctAns: “8”
  },
  {
    questionNum: "2",
    questionText: "How many knives does a professional chef use?", 
    choices: [
      “2”,
      “8”,
      “3”,
      “Just the one”
    ],
    correctAns: “8”
  },