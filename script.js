const quizData = [
    {
        question: "What is the most used programming language in 2023?",
        a: "Java",
        b: "JavaScript",
        c: "C",
        d: "Python",
        correct: "b",
    },
    {
        question: "Which is the most popularly used database?",
        a: "MongoDB",
        b: "My SQL",
        c: "php",
        d: "Oracle Database",
        correct: "d",
    },
    {
        question: "Most popular web frameworks 2023?",
        a: "Angular",
        b: "JQuery",
        c: "React",
        d: "Semantic-UI",
        correct: "c",
    },
    {
        question: "Most popular backend web frameworks 2023?",
        a: "Flask",
        b: "Cakephp",
        c: "Ruby on Rails",
        d: "Django",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const percent = (score/quizData.length)*100;
            quiz.innerHTML = `
                <h2>You answered  ${percent}% questions correctly .</h2>             
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
