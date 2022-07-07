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
let clicked = [];

scoreDisplay.textContent = score;

//Helper Functions - Start
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Helper Functions - End

function populateQuestions() {
    //Loop over the questions array and create a new div for each value
    questions.forEach(question => {
        //Create a div
        const questionBox = document.createElement('div');

        //Add a class list(over multiple elements combined) to the div above
        questionBox.classList.add('question-box');

        //Add a logo to each question box
        const logoDisplay = document.createElement("span");
        logoDisplay.innerHTML = "&#9998;";
        logoDisplay.style.fontSize = "40px";
        questionBox.append(logoDisplay);
        
        //Update card text with question
        question.quiz.forEach(tip => {
            const tipText = document.createElement("p");
            tipText.textContent = capitalizeFirstLetter(tip);
            questionBox.append(tipText);
        });

        //Create a div that would hold the buttons
        const questionButtons = document.createElement('div');
        questionButtons.classList.add('question-buttons');
        questionBox.append(questionButtons);

        //Create the buttons (for each option)
        question.options.forEach((option, index) => {
            const questionButton = document.createElement('button');
            questionButton.classList.add('question-button');
            questionButton.textContent = capitalizeFirstLetter(option);

            //Add click event
            questionButton.addEventListener('click', () => checkAnswer(questionButton, answerDisplay, option, index + 1, question.correct));

            //Append the buttons to the parent div created above
            questionButtons.append(questionButton);
        })

        //Put another div for displaying the correct answer
        const answerDisplay = document.createElement('div');
        answerDisplay.classList.add('answer-display');
        questionBox.append(answerDisplay);

        //Put the div on UI
        questionDisplay.append(questionBox);
    })
}

populateQuestions();

function checkAnswer(questionButton, answerDisplay, option, index, correctAnswer) {
    console.log("Option: " + option + " and Index: " + index);

    if(index === correctAnswer) {
        score++;        //Update the score
        addResult(answerDisplay, "Correct!", 'correct');
    }
    else {
        score--;
        addResult(answerDisplay, "Wrong!", 'wrong');
    }

    //Display the updated score
    scoreDisplay.textContent = score;

    //Keep a log of all clicked options
    clicked.push(option);

    //Disable the button if clicked
    questionButton.disabled = clicked.includes(option);  
}

function addResult(answerDisplay, answer, className) {
    //Clear the display first
    answerDisplay.textContent = "";

    //Style the answer
    answerDisplay.classList.remove('wrong');
    answerDisplay.classList.remove('correct');
    answerDisplay.classList.add(className);

    //Display whether the answer is Correct or Wrong (passed from the main logic)
    answerDisplay.textContent = answer;
}