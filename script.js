const currquesnum = document.getElementById("cur-ques-num");
const currques = document.getElementById("ques-sentence");
const choices = [
  document.getElementById("option1"),
  document.getElementById("option2"),
  document.getElementById("option3"),
  document.getElementById("option4"),
];

const submit = document.getElementById("submitbtn");
const previous = document.getElementById("prevbtn");
previous.addEventListener("click", showPrevQues);
const next = document.getElementById("nextbtn");
next.addEventListener("click", showNextQues);
const clear = document.getElementById("clearbtn");
clear.addEventListener("click", handleClear);
const mainBody = document.getElementById("bodyyy");
const startbtn = document.getElementById("startbtn");
startbtn.addEventListener("click", startQuiz);
let visited = new Array(15).fill(0);
let checked = new Array(15).fill(0);
var curct = 0;

function startQuiz() {
  startbtn.classList.add("hide");
  document.getElementById("bodyyy").classList.remove("hide");
  timerstart();
  populateData(curct);
  createOptions();
  for (let k = 1; k <= 4; k++) {
    document.getElementById(`choice-1-${k}`).style.display = "inline-block";
  }
}
function showNextQues() {
  if (curct <= 14) {
    console.log("next");

    curct++;
    for (let k = 1; k <= 4; k++) {
      document.getElementById(`choice-${curct}-${k}`).style.display = "none";
    }
    for (let k = 1; k <= 4; k++) {
      document.getElementById(`choice-${curct + 1}-${k}`).style.display =
        "inline-block";
    }
    populateData(curct);
  }
}

function showPrevQues() {
  if (curct >= 1) {
    console.log("prev");
    curct = curct - 1;
    for (let k = 1; k <= 4; k++) {
      document.getElementById(`choice-${curct + 2}-${k}`).style.display =
        "none";
    }
    for (let k = 1; k <= 4; k++) {
      document.getElementById(`choice-${curct + 1}-${k}`).style.display =
        "inline-block";
    }
    populateData(curct);
  }
}
function populateData(k) {
  currquesnum.innerHTML = "Quesiton:" + (k + 1);
  currques.innerHTML = questions[k].question;
  choices[0].innerHTML = questions[k].answers[0].option;
  choices[1].innerHTML = questions[k].answers[1].option;
  choices[2].innerHTML = questions[k].answers[2].option;
  choices[3].innerHTML = questions[k].answers[3].option;
}
function createOptions() {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
      var input = document.createElement("input");
      input.type = "radio";

      input.id = `choice-${i + 1}-${j + 1}`;
      input.name = `ch-${i + 1}`;
      input.style.display = "none";
      choices[j].before(input);
    }
  }
}
function handleClear() {}
function timerstart() {
  var sec = 899;
  var time = setInterval(myTimer, 1000);
  document.getElementById("min").innerHTML = "15";
  function myTimer() {
    document.getElementById("sec").innerHTML =
      sec % 60 > 9 ? sec % 60 : "0" + (sec % 60);
    document.getElementById("min").innerHTML =
      Math.floor(sec / 60) > 9
        ? Math.floor(sec / 60)
        : "0" + Math.floor(sec / 60);
    sec--;
    if (sec == -1) {
      clearInterval(time);
      alert("Time out!!");
      // document.getElementById("bodyyy").style.display = "none";
    }
  }
}

const questions = [
  {
    question: "1Who is the god of cricke1t?",
    answers: [
      { option: "Rohit Sharma", correct: false },
      { option: "Virat Kohli", correct: false },
      { option: "Sachin Tendulkar", correct: true },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "2Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "3Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "4Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "5Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "6Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "7Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "8Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "9Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "10Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "11Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "12Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "13Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "14Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "RohSharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
  {
    question: "15Who is the god of football?",
    answers: [
      { option: "Virat Kohli", correct: true },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: false },
      { option: "Kapil Dev", correct: false },
    ],
  },
];
// startQuiz();
