const questions = [
  {
    question: "Who is the god of cricket?",
    answers: [
      { option: "Virat Kohli", correct: false },
      { option: "Rohit Sharma", correct: false },
      { option: "Sachin Tendulkar", correct: true },
      { option: "Kapil Dev", correct: false },
    ],
  },
];
function startQuiz() {}

var sec = 599;
var time = setInterval(myTimer, 1000);
document.getElementById("min").innerHTML = "01";
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
