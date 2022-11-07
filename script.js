const qsection = document.getElementById("question-part");
const submit = document.getElementById("submitbtn");

const previous = document.getElementById("prevbtn");
previous.addEventListener("click", showPrevQues);
const next = document.getElementById("nextbtn");
next.addEventListener("click", showNextQues);
const flag = document.getElementById("flagbtn");
flag.addEventListener("click", FlagCurQues);
const clear = document.getElementById("clearbtn");
clear.addEventListener("click", handleClear);
const mainBody = document.getElementById("bodyyy");
const startbtn = document.getElementById("startbtn");
startbtn.addEventListener("click", startQuiz);
// let visited = new Array(15).fill(0);
// let checked = new Array(15).fill(0);
let quesState = new Array(15).fill(0);
var curct = 0;
Array.from(document.getElementsByClassName("grid-item")).forEach((elem) => {
  elem.addEventListener("click", () => {
    console.log(elem);
    document.getElementById(`question-${curct + 1}`).classList.add("hide");
    document
      .getElementById(`question-${elem.innerHTML}`)
      .classList.remove("hide");
    if (quesState[curct] != 1) {
      if (quesState[curct] != 3) {
        setState(curct, 2);
      }
      // setState(curct, 1);
    }
    curct = elem.innerHTML - 1;
  });
});
function startQuiz() {
  startbtn.classList.add("hide");
  document.getElementById("bodyyy").classList.remove("hide");
  timerstart();
  // populateData(curct);
  createQuestions();
  document.getElementById("question-1").classList.remove("hide");
  if (quesState[curct] != 1) {
    if (quesState[curct] != 3) {
      setState(curct, 2);
    }
  }
}
function iconCount() {
  var answed = 0;
  var notans = 0;
  var flaged = 0;
  for (let i = 0; i < 15; i++) {
    if (
      document.getElementById(`grid-item-${i + 1}`).style.backgroundColor ==
      "limegreen"
    ) {
      ++answed;
      // console.log("yes");
    } else if (
      document.getElementById(`grid-item-${i + 1}`).style.backgroundColor ==
      "red"
    ) {
      ++notans;
      // console.log("yes");
    } else if (
      document.getElementById(`grid-item-${i + 1}`).style.backgroundColor ==
      "darkviolet"
    ) {
      ++flaged;
      // console.log("yes");
    }
  }
  document.getElementById("green-info").innerHTML = answed;
  document.getElementById("red-info").innerHTML = notans;
  document.getElementById("violet-info").innerHTML = flaged;
  document.getElementById("gray-info").innerHTML =
    15 - answed - notans - flaged;
}
function showNextQues() {
  if (curct < 14) {
    console.log("next");
    // if (quesState[curct] != 1) {
    //   if (quesState[curct] != 3) {
    //     setState(curct, 2);
    //   }
    //   // setState(curct, 1);
    // }
    ++curct;
    if (quesState[curct] != 1) {
      if (quesState[curct] != 3) {
        setState(curct, 2);
      }
      // setState(curct, 1);
    }
    document.getElementById(`question-${curct}`).classList.add("hide");
    document.getElementById(`question-${curct + 1}`).classList.remove("hide");

    // populateData(curct);
  }
}

function showPrevQues() {
  if (curct >= 1) {
    console.log("prev");
    if (quesState[curct] != 1) {
      if (quesState[curct] != 3) {
        setState(curct, 2);
      }
      // setState(curct, 1);
    }

    --curct;
    document.getElementById(`question-${curct + 2}`).classList.add("hide");
    document.getElementById(`question-${curct + 1}`).classList.remove("hide");
    // populateData(curct);
  }
}
// function updateQuesInfo() {}
// function populateData(k) {}
function createQuestions() {
  for (let i = 0; i < 15; i++) {
    let ques_area = document.createElement("div");
    ques_area.id = `question-${i + 1}`;
    qsection.appendChild(ques_area);

    let qnum = document.createElement("p");

    qnum.innerHTML = `Question: ${i + 1}:`;
    qnum.classList.add("ques-num");
    ques_area.appendChild(qnum);
    let qcontent = document.createElement("p");

    qcontent.innerHTML = questions[i].question;
    qcontent.classList.add("ques-ques");
    ques_area.appendChild(qcontent);

    let formx = document.createElement("form");
    formx.id = `form-${i + 1}`;
    formx.classList.add("grid-container");
    // formx.innerHTML = ;
    ques_area.appendChild(formx);
    for (let j = 0; j < 4; j++) {
      var input = document.createElement("input");
      input.type = "radio";
      input.id = `choice-${i + 1}-${j + 1}`;
      input.name = `ch-${i + 1}`;
      // input.style.display = "none";
      input.addEventListener("click", () => {
        document.getElementById(
          `grid-item-${curct + 1}`
        ).style.backgroundColor = "limegreen";
        quesState[curct] = 1;
      });
      formx.appendChild(input);
      // choices[j].before(input);
      let lbl = document.createElement("label");
      lbl.htmlFor = "`choice-${i + 1}-${j + 1}`";
      lbl.innerHTML = questions[i].answers[j].option;
      formx.appendChild(lbl);
    }
    var resetbtn = document.createElement("input");
    resetbtn.type = "reset";
    // resetbtn.value = `clear${i + 1}`;
    resetbtn.style.display = "none";
    resetbtn.name = `ch-${i + 1}`;
    resetbtn.id = `reset-${i + 1}`;
    formx.appendChild(resetbtn);
    ques_area.classList.add("hide");
  }
}

function handleClear() {
  console.log("clear");
  document.getElementById(`reset-${curct + 1}`).click();

  setState(curct, 2);
}
function FlagCurQues() {
  if (quesState[curct] != 1) {
    quesState[curct] = 3;
    setState(curct, 3);
  }
}
function setState(pos, state) {
  if (state == 0) {
    document.getElementById(`grid-item-${pos + 1}`).style.backgroundColor =
      "gray";
  }
  if (state == 1) {
    document.getElementById(`grid-item-${pos + 1}`).style.backgroundColor =
      "limegreen";
    quesState[pos] = 1;
  } else if (state == 2) {
    document.getElementById(`grid-item-${pos + 1}`).style.backgroundColor =
      "red";
    quesState[pos] = 2;
  } else if (state == 3) {
    document.getElementById(`grid-item-${pos + 1}`).style.backgroundColor =
      "darkviolet";
  }
}

function timerstart() {
  var sec = 899;
  var time = setInterval(myTimer, 1000);
  document.getElementById("min").innerHTML = "15";
  function myTimer() {
    iconCount();
    document.getElementById("sec").innerHTML =
      sec % 60 > 9 ? sec % 60 : "0" + (sec % 60);
    document.getElementById("min").innerHTML =
      Math.floor(sec / 60) > 9
        ? Math.floor(sec / 60)
        : "0" + Math.floor(sec / 60);
    sec--;
    if (sec == -1) {
      clearInterval(time);
      // alert("Time out!!");
      console.log("confirm submitted");
      showResult();
      // document.getElementById("bodyyy").style.display = "none";
    }
  }
}
function confirmSubmit(num) {
  // clearInterval(time);
  if (num == 1) {
    let text = "Are You sure you want to submit?";
    let val = confirm(text);
    if (val == true) {
      console.log("confirm submitted");
      showResult();
      // sec = 0;
    }
  }
  // else {
  // sec = 0;
  // console.log("confirm submitted");
  // }
}
function showResult() {
  document.getElementById("bodyyy").classList.add("hide");
  document.getElementById("result").classList.remove("hide");
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
