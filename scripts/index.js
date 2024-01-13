import { questionsArray } from "./Questions.js";

let questionsHtml = document.querySelector('.Questions')
    ;
let answerInput = document.querySelector('.answer-input-el');
let asnwerBtn = document.querySelector('.answer-btn');
let skipBtn = document.querySelector('.skip-btn');
let scoreHtml = document.querySelector('.score')
let score = 0;
let randomIndex = 0;
let i = questionsArray.length, random, temp;
let timeoutEl = document.querySelector('.time-js')
let time = 60;


// using fisher yate shuffling algorithm to shuffle the array 

let shufflingArray = (questionsArray) => {
    while (--i > 0) {
        random = Math.floor(Math.random() * (i + 1));
        temp = questionsArray[random];
        questionsArray[random] = questionsArray[i];
        questionsArray[i] = temp
    }
    return questionsArray;
}

// Rendering the Questions in the DOM

let questionsRendering = () => {
    questionsHtml.innerHTML = `${(questionsArray[i].question)}`

}


//  rendering the score in the DOM
let scoreRendering = () => {

    scoreHtml.innerHTML = `<p>Score:${score}</span>`
}

// Function That will Validate the user input and Increase the score 
// converting the user input and questions to lowercase 
// increasing the score when answer is right and rendering the score in DOm 
// moving the next question in the shuffled array then rendering the next question
// moving the next question when the answer is wrong 
// then run the the gameOver function after whne th condition have been met 
let answerValidation = () => {
    if (answerInput.value === ' ' || answerInput.value === '') {

            //if filed is empty the input field will be block then unbloced after 1s  
        let interval = setInterval(() => {
            answerInput.classList.add('answer-input-block-js')
            clearInterval(interval);
            answerInput.classList.remove('answer-input-block-js')
        }, 1000)

    }
    else if (answerInput.value.toLowerCase() === questionsArray[i].answer.toLowerCase()) {
        alert('good');
        score++
        scoreRendering();
        i++;
        questionsRendering();
        answerInput.value = '';


    }
    else {
        alert('wrong answer')
        i++;
        questionsRendering();
        answerInput.value = '';
        console.log(i)
    }

}

// game over function will run after 60s 
const gameOver = () => {

    time = 60;

    let interval = setTimeout(() => {
        if (score > questionsArray.length / 2) {
            questionsHtml.innerHTML = ` Congrat Your Score is ${score} you're a nerd 🤓`
        }
        else {
            questionsHtml.innerHTML = `Your Score is ${score} Try again Malaka!!! 😆`
        }
        clearInterval(interval);
        asnwerBtn.textContent = 'Play Again';

        answerInput.classList.add('answer-input-js')
        // adding the styling answer-input to make the input disappear 
        skipBtn.classList.add('skip-btn-js');
        // dsiplaying the skip button 


    }, 60000)



}



//countdown 

const timeOut = () => {

    timeoutEl.textContent = time;

    const interval = setInterval(() => {
        time--;

        if (time >= 0) {
            timeoutEl.textContent = time;
        } else {
            clearInterval(interval);
            time = 60; // Reset the time to 45 seconds when it becomes negative
            timeoutEl.textContent = time;
        }
    }, 1000);
};



// function to  restart the game 
const playAgain = () => {
    shufflingArray(questionsArray);
    asnwerBtn.textContent = 'Answer';
    answerInput.classList.remove('answer-input-js');
    skipBtn.classList.remove('skip-btn-js');
    questionsRendering(questionsArray);
    answerValidation();
    score = 0;
    scoreRendering();
    timeOut();
    gameOver();
}







//code that runs when the page load
shufflingArray(questionsArray);
questionsRendering();
timeOut();
gameOver();

// window event listener when we press enter answerValidation hould run
window.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        answerValidation();

    }
    else if (asnwerBtn.textContent === 'Play Again') {
        return 0
    }

})

// answer button event listener
asnwerBtn.addEventListener('click', () => {
    answerValidation();


    if (asnwerBtn.textContent === 'Play Again') {
        playAgain();
    }


})


// skip button event listener
skipBtn.addEventListener('click', () => {
    questionsRendering();
    i++
})




