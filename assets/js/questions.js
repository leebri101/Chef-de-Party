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

const quizQuestions = [
    {
        questionNum: "1",
        questionText: "How many different ways can you ingredients?",
        choices: ["6", "4", "8", "2"],
        correctAns: "8"
    },
    {
        questionNum: "2",
        questionText: "How many knives does a professional chef use?",
        choices: ["2", "8", "3", "Just the one"],
        correctAns: "8"
    },
    {
        questionNum: "3",
        questionText: "Why is it called a Pain au Chocolat?",
        choices: ["Because of the Pain in my life", "Bread + Chocolate from french", 
        "Chocolat Croissant", "Because a french person decided to add chocolate in a croissant for a joke."],
        correctAns: "Bread + Chocolate from french"
    },
    {
        questionNum: "4",
        questionText: "How long should you fry a steak for to get it medium rare?",
        choices: ["2 minutes each side", "3-4 minutes each side", 
        "Til you can hear the meat start Mooing", "5-6 minutes each side"],
        correctAns: "3-4 minutes each side"
    },
    {
        questionNum: "5",
        questionText: "What do you need to make a roux?",
        choices: ["Flour/Butter/Milk", "Some sort of stock/flour/Milk", 
        "Red Wine?? It sounds french?", "Maybe buy it from the store?"],
        correctAns: "Flour/Butter/Milk"
    },
    {
        questionNum: "6",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "7",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "8",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "9",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "10",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "11",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "12",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "13",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "14",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "15",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "16",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "17",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "18",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "19",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "20",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "21",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "22",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
    {
        questionNum: "23",
        questionText: "",
        choices: ["", "", "", ""],
        correctAns: ""
    },
];
