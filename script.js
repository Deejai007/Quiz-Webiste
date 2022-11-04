const currquesnum = document.getElementById("cur-ques-num");
const currques = document.getElementById("ques-sentence");
const choice1 = document.getElementById("option1");
const choice2 = document.getElementById("option2");
const choice3 = document.getElementById("option3");
const choice4 = document.getElementById("option4");
const submit = document.getElementById("submitbtn");
const previous = document.getElementById("prevbtn");
previous.addEventListener("click", showPrevQues);
const next = document.getElementById("nextbtn");
next.addEventListener("click", showNextQues);
const clear = document.getElementById("clearbtn");
const mainBody = document.getElementById("bodyyy");
const startbtn = document.getElementById("startbtn");
startbtn.addEventListener("click", startQuiz);
// startQuiz();
var curct = 0;

function startQuiz() {
  startbtn.classList.add("hide");
  document.getElementById("bodyyy").classList.remove("hide");
  timerstart();

  populateData(curct);
}
function showNextQues() {
  console.log("next");
  if (curct <= 14) {
    curct++;
    populateData(curct);
  }
}
function showPrevQues() {
  console.log("prev");
  if (curct > 0) {
    curct--;
    populateData(curct);
  }
}
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
function populateData(k) {
  currquesnum.innerHTML = "Quesiton:" + (k + 1);
  currques.innerHTML = questions[k].question;
  choice1.innerHTML = questions[k].answers[0].option;
  choice2.innerHTML = questions[k].answers[1].option;
  choice3.innerHTML = questions[k].answers[2].option;
  choice4.innerHTML = questions[k].answers[3].option;
}

const questions = [
  {
    question: "Who is the god of cricke1t?",
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
