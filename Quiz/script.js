const quizdata = [
    {
        questions: "What is my name?",
        a: "Chau Ngoc Huy",
        b: "Huy Chau",
        c: "Le Thi Thanh Chung",
        d: "Chau Ngoc Dao",
        correct: "a"
    },
    {
        questions: "How old am I?",
        a: "18",
        b: "19",
        c: "20",
        d: "21",
        correct: "c"
    },
    {
        questions: "Where am I from?",
        a: "American",
        b: "England",
        c: "Thailand",
        d: "Vietnam",
        correct: "d"
    }
];

const answerELs = document.querySelectorAll(".answer");
const QuestionEL = document.getElementById("question");
const a = document.getElementById("a-text");
const b = document.getElementById("b-text");
const c = document.getElementById("c-text");
const d = document.getElementById("d-text");
const submit = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let NumberQ = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQ = quizdata[NumberQ];
    QuestionEL.innerHTML = currentQ.questions;
    a.innerHTML = currentQ.a;
    b.innerHTML = currentQ.b;
    c.innerHTML = currentQ.c;
    d.innerHTML = currentQ.d;
}

function deselectAnswers() {
    answerELs.forEach((answerEL) => {
        answerEL.checked = false;
    });
};
function getSeleted() {
    let answer = undefined;

    answerELs.forEach((answerEL) => {
        if(answerEL.checked){
            answer = answerEL.id;
        }
    });
    return answer;
}
submit.addEventListener("click", () => {
    const answer = getSeleted();
    if (answer === undefined){
        alert("Please select your answer");
    } else{
        if (answer === quizdata[NumberQ].correct) {
            score++;
        }
        NumberQ++;
        if (NumberQ < quizdata.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h1>Your score = ${score}/${quizdata.length}</h1> <button onclick="location.reload()">Reload</button>`;            
        }
    }

});