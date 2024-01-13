let questionsArray=[{
    question:'WHich contient is south africa',
    answer:'Africa'
},

  {
        question:'How old is Fezeka?',
        answer:'22'
    }
    , {
        question: "What is the capital of Australia?",
        answer: "Canberra"
    },
    {
        question: "Which year did World War I begin?",
        answer: "1914"
    },
    {
        question: "Who discovered penicillin?",
        answer: "Alexander Fleming"
    },
    {
        question: "What is the capital of Australia?",
        answer: "Canberra"
    },
    {
        question: "Which year did World War I begin?",
        answer: "1914"
    },
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue Whale"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answer: "Harper Lee"
    },
    {
        question: "What is the currency of Japan?",
        answer: "Yen"
    },
    {
        question: "What year did the Titanic sink?",
        answer: "1912"
    },
    {
        question: "What is the tallest animal in the world?",
        answer: "Giraffe"
    },
    {
        question: "Who invented the telephone?",
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the smallest country in the world?",
        answer: "Vatican City"
    }


]
let questionsHtml=document.querySelector('.Questions')
;
let answerInput=document.querySelector('.answer-input-el');
let asnwerBtn=document.querySelector('.answer-btn');
let scoreHtml=document.querySelector('.score')
let score=0;
let randomIndex=0;
let i=questionsArray.length,random,temp;
let timeoutEl=document.querySelector('.time-js')
let startGame=()=>{
    asnwerBtn.textContent='Answer';

}

let shufflingArray=()=>{
    while(--i>0){
        random=Math.floor(Math.random()*(i+1));
        temp=questionsArray[random];
        questionsArray[random]=questionsArray[i];
        questionsArray[i]=temp  
    }
  
}


let questionsRendering=()=>{
  questionsHtml.innerHTML=`${(questionsArray[i].question)}`

}



let scoreRendering=()=>{

    scoreHtml.innerHTML=`<p>Score:${score}</span>` 
}


let answerValidation=()=>{

    if (answerInput.value===''){
     alert('field cannot be empty')
    }
    if (answerInput.value===questionsArray[i].answer){
        alert('good');
        score++
        scoreRendering();
        i++;
        questionsRendering();
        answerInput.value='';
        
    }
    else{alert('wrong answer')}
}

// const timeOut=()=>{

//     timeoutEl.innerHTML=setTimeout(() => {
        
//     }, 30000+'S');
// }

shufflingArray();
questionsRendering();


asnwerBtn.addEventListener('click',()=>{
    answerValidation()
    // timeOut();
    
   

})






