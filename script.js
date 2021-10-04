const quizData = [
  {
    question: "Who is creator of C?",
    a: "Dennis Ritchie",
    b: "Bjarne Stroustrup",
    c: "James Gosling",
    d: "Guido van Rossum",
    correct: "a",
  },

  {
    question: "Who is creator of C++?",
    a: "Tonny Robins",
    b: "Bjarne Stroustrup",
    c: "Guido van Rossum",
    d: "James Gosling",
    correct: "b",
  },

  {
    question: "Who is creator of Java?",
    a: "Dennis Ritchie",
    b: "Tonny Robins",
    c: "James Gosling",
    d: "Bjarne Stroustrup",
    correct: "c",
  },

  {
    question: "Who is creator of Python?",
    a: "Robert James",
    b: "Bjarne Stroustrup",
    c: "James Gosling",
    d: "Guido van Rossum",
    correct: "d",
  },

  {
    question: "Who is creator of JavaScript?",
    a: "Dennis Ritchie",
    b: "Bjarne Stroustrup",
    c: "James Gosling",
    d: "None of the above",
    correct: "d",
  },
];

let questionNumber = 0;
let score = 0;
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const qNoText = document.getElementById("quesNoText");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const quizQuesData = quizData[questionNumber];
  question.innerText = quizQuesData.question;
  a_text.innerText = quizQuesData.a;
  b_text.innerText = quizQuesData.b;
  c_text.innerText = quizQuesData.c;
  d_text.innerText = quizQuesData.d;
  qNoText.innerText = questionNumber + 1;
}

function nextQuestion() {}

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

function nextQuestion() {}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[questionNumber].correct) {
      score++;
    }

    questionNumber++;
    if (questionNumber < quizData.length) {
      if (questionNumber === quizData.length - 1) {
        submitBtn.textContent = "Show Result";
        console.log("button text changed");
      }
      loadQuiz();
    }

    if (questionNumber === quizData.length) {
      quiz.innerHTML = `
        <div class="sub-container">
        <h2>Total number of Questions: ${quizData.length}</h2>
        <h2>You answered correctly ${score} questions</h2>
        </div>
    `;
    }
  }
});
