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
    }
    curct = elem.innerHTML - 1;
  });
});

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
    } else if (
      document.getElementById(`grid-item-${i + 1}`).style.backgroundColor ==
      "red"
    ) {
      ++notans;
    } else if (
      document.getElementById(`grid-item-${i + 1}`).style.backgroundColor ==
      "darkviolet"
    ) {
      ++flaged;
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

    ++curct;
    if (quesState[curct] != 1) {
      if (quesState[curct] != 3) {
        setState(curct, 2);
      }
    }
    document.getElementById(`question-${curct}`).classList.add("hide");
    document.getElementById(`question-${curct + 1}`).classList.remove("hide");
  }
}

function showPrevQues() {
  if (curct >= 1) {
    console.log("prev");
    if (quesState[curct] != 1) {
      if (quesState[curct] != 3) {
        setState(curct, 2);
      }
    }

    --curct;
    document.getElementById(`question-${curct + 2}`).classList.add("hide");
    document.getElementById(`question-${curct + 1}`).classList.remove("hide");
    // populateData(curct);
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
    }
  }
}
function confirmSubmit(num) {
  if (num == 1) {
    let text = "Are You sure you want to submit?";
    let val = confirm(text);
    if (val == true) {
      console.log("confirm submitted");
      showResult();
    }
  }
}
let score = 0;
let wrongg = 0;
function showResult() {
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 4; j++) {
      // console.log("gi");
      let tst = document.getElementById(`choice-${i + 1}-${j + 1}`);

      if (tst.checked) {
        {
          if (tst.value == "true") {
            ++score;
          } else ++wrongg;
        }
        // console.log(tst);
        console.log("correct");
      }
    }
  }

  document.getElementById("bodyyy").classList.add("hide");
  document.getElementById("mainpage").classList.add("hide");
  document.getElementById("bodyyy").style.display = "flex";
  document.getElementById("result").classList.remove("hide");
  document.getElementById("score-score").innerHTML = `${score}/15`;
  document.getElementById("attemptedct").innerHTML += `${score + wrongg}`;
  document.getElementById("correctct").innerHTML += `${score}`;
  document.getElementById("wrongct").innerHTML += `${wrongg}`;
}

async function setQuesFromAPI() {
  let url =
    "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function startQuiz() {
  document.getElementById("startwin").style.display = "none";
  document.getElementById("bodyyy").style.display = "flex";
  setQuesFromAPI().then((data) => {
    let questions = [];
    for (let c = 0; c < 15; c++) {
      questions[c] = {
        question: {},
        answers: [
          { option: {}, correct: {} },
          { option: {}, correct: {} },
          { option: {}, correct: {} },
          { option: {}, correct: {} },
        ],
      };
    }
    for (let i = 0; i < 15; i++) {
      questions[i].question = data.results[i].question;
      let rnd = Math.floor(Math.random() * 4);
      let k = 0;
      for (let j = 0; j < 4; j++) {
        if (j == rnd) {
          questions[i].answers[j].option = data.results[i].correct_answer;
          questions[i].answers[j].correct = true;
        } else {
          questions[i].answers[j].option = data.results[i].incorrect_answers[k];
          questions[i].answers[j].correct = false;
          ++k;
        }
      }
    }
    createQuestions(questions);
    timerstart();
  });
}

function createQuestions(questions) {
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
    ques_area.appendChild(formx);
    for (let j = 0; j < 4; j++) {
      var input = document.createElement("input");
      input.type = "radio";
      input.id = `choice-${i + 1}-${j + 1}`;
      input.value = questions[i].answers[j].correct;
      input.name = `ch-${i + 1}`;
      input.addEventListener("click", () => {
        document.getElementById(
          `grid-item-${curct + 1}`
        ).style.backgroundColor = "limegreen";
        quesState[curct] = 1;
      });
      formx.appendChild(input);
      let lbl = document.createElement("label");
      lbl.htmlFor = "`choice-${i + 1}-${j + 1}`";
      lbl.innerHTML = questions[i].answers[j].option;
      formx.appendChild(lbl);
    }
    var resetbtn = document.createElement("input");
    resetbtn.type = "reset";
    resetbtn.style.display = "none";
    resetbtn.name = `ch-${i + 1}`;
    resetbtn.id = `reset-${i + 1}`;
    formx.appendChild(resetbtn);
    ques_area.classList.add("hide");
  }
  document.getElementById("question-1").classList.remove("hide");
  if (quesState[curct] != 1) {
    if (quesState[curct] != 3) {
      setState(curct, 2);
    }
  }
}
