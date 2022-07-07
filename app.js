const scoreDisplay = document.getElementById("score-display");
const questionDisplay = document.getElementById("question-display");

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2  //Could use indexes but more suitable for APIs by numbering
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacency'],
        correct: 2  
    },
    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2  
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forcast', 'sustainable'],
        correct: 1  
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2  
    }
];

let score = 0;

scoreDisplay.textContent = score;

function populateQuestions() {
    //Loop over the questions array and create a new div for each value
    questions.forEach(question => {
        //Create a div
        const questionBox = document.createElement('div');

        //Add a class list(over multiple elements combined) to the div above
        questionBox.classList.add('question-box');

        const logoDisplay = document.createElement("span");
        logoDisplay.innerHTML = "&#9998;";
        logoDisplay.style.fontSize = "40px";
        questionBox.append(logoDisplay);
        
        //Update card text with question
        question.quiz.forEach(tip => {
            const tipText = document.createElement("p");
            tipText.textContent = tip;
            questionBox.append(tipText);
        });

        //Put the div on UI
        questionDisplay.append(questionBox);
    })
}

populateQuestions();