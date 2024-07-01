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

const quizQuestion = [
    {
        questionNum: "1",
        questionText: "How many different ways can you cut ingredients?",
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
        questionText: "What is the world's most expensive ingredient?",
        choices: ["Edible Gold", "Saffron", "Almas Caviar", "Kobe Beef"],
        correctAns: "Almas Caviar"
    },
    {
        questionNum: "7",
        questionText: "What is the term for cooking food in a vacuum-sealed bag at a low temperature for a long period?",
        choices: ["Sous-vide", "Blanching", "Braising", "Searing"],
        correctAns: "Sous-vide"
    },
    {
        questionNum: "8",
        questionText: "What is the name of the traditional French stew made with beef braised in red wine?",
        choices: ["Coq au vin", "Bouillabaisse", "Ratatouille", "Boeuf Bourguignon"],
        correctAns: "Boeuf Bourguignon"
    },
    {
        questionNum: "9",
        questionText: "Which fruit is known as the 'king of fruits' in many Southeast Asian countries?",
        choices: ["Mango", "Pineapple", "Durian", "Papaya"],
        correctAns: "Durian"
    },
    {
        questionNum: "10",
        questionText: "Which of the following herbs is commonly used in Italian pesto?",
        choices: ["Cilantro", "Basil", "Parsley", "Mint"],
        correctAns: "Basil"
    },
    {
        questionNum: "11",
        questionText: "What type of pastry is used to make a traditional French 'croissant'?",
        choices: ["Puff pastry", "Shortcrust pastry", "Filo pastry", "Choux pastry"],
        correctAns: "Puff pastry"
    },
    {
        questionNum: "12",
        questionText: "What is the name of the process of heating up sugar slowly?",
        choices: ["Melting", "Baking", "Browning", "Caramelization"],
        correctAns: "Caramelization"
    },
    {
        questionNum: "13",
        questionText: "What is the main ingredient in a tiramisu that gives it's notable flavour?",
        choices: ["Espresso", "Amaretto", "Marsala wine", "Limoncello"],
        correctAns: "Espresso"
    },
    {
        questionNum: "14",
        questionText: "Which of the following is NOT a type of mushroom?",
        choices: ["Portobello", "Shiitake", "Chanterelle", "Rutabaga"],
        correctAns: "Rutabaga"
    },
    {
        questionNum: "15",
        questionText: "Which cuisine is known for dishes such as 'pho' and 'banh mi'?",
        choices: ["Thai", "Vietnamese", "Korean", "Japanese"],
        correctAns: "Vietnamese"
    },
    {
        questionNum: "16",
        questionText: "Which country is the origin of the dessert 'Pavlova'?",
        choices: ["Australia", "France", "Italy", "New Zealand"],
        correctAns: "New Zealand"
    },
    {
        questionNum: "17",
        questionText: "Which spice is made from the inner bark of a tree and is commonly used in baking?",
        choices: ["Nutmeg", "Clove", "Cinnamon", "Cardamom"],
        correctAns: "Cinnamon"
    },
    {
        questionNum: "18",
        questionText: "What sauce is made from tomatoes, garlic, onions, and herbs?",
        choices: ["Alfredo", "Pesto", "Marinara", "Béchamel"],
        correctAns: "Marinara"
    },
    {
        questionNum: "19",
        questionText: "Which of these nuts is used to make traditional marzipan?",
        choices: ["Peanuts", "Almonds", "Cashews", "Walnuts"],
        correctAns: "Almonds"
    },
    {
        questionNum: "20",
        questionText: "Which of these is a type of fermented soybean paste used in Korean cuisine?",
        choices: ["Yangnyeomjang", "Doenjang", "Ssamjang", "Gochujang"],
        correctAns: "Doenjang"
    },
    {
        questionNum: "21",
        questionText: "Which type of pastry is used to make a 'Profiterole'?",
        choices: ["Puff pastry", "Shortcrust pastry", "Choux pastry", "Filo pastry"],
        correctAns: "Choux pastry"
    },
    {
        questionNum: "22",
        questionText: "What is the name of the Italian bread that is typically topped with herbs, olive oil, and sometimes other ingredients?",
        choices: ["Ciabatta", "Focaccia", "Baguette", "Panettone"],
        correctAns: "Focaccia"
    },
    {
        questionNum: "23",
        questionText: "Which herb is commonly used to make the French seasoning blend 'Herbes de Provence'?",
        choices: ["Basil", "Oregano", "Lavender", "Cilantro"],
        correctAns: "Lavender"
    },
];
