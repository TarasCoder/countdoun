const time = document.querySelector("#time");
const btn = document.querySelector("#btn");
const btnReset = document.querySelector("#btnReset");
btnReset.onclick = function () {
  location.reload();
};
let currentS;
let currentM;
let timerId;

btn.addEventListener("click", getData);

function decreaseTime() {
//   debugger;
  currentS--;
  if (currentS <= 0 && currentM == 0) {
    clearInterval(timerId);
    time.innerHTML = `0:00`;
    return;
  }
  if (currentS < 10 && currentS > 0) {
    currentS = `0${currentS}`;
  }
  if (currentS === 0) {
    //   debugger;
    currentM--;
    currentS = 0;
    time.innerHTML = `${currentM}:${currentS}`;
    currentS = 59;
  }
  time.innerHTML = `${currentM}:${currentS}`;
}
function getData(event) {
  event.preventDefault();
  let min = document.querySelector("#minutes").value;
  let sec = document.querySelector("#seconds").value;
//   debugger;
  if (min == "" || sec == "") {
    alert("Please enter info in both fields!!!");
  } else {
    currentS = sec;
    currentM = min;
    timerId = setInterval(decreaseTime, 1000);
    if (currentS < 10 && currentS > 0) {
      currentS = `0${currentS}`;
    }
    time.innerHTML = `${currentM}:${currentS}`;
  }
}
