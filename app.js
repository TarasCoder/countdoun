const time = document.querySelector("#time");
let seconds = 23;
let minutes = 1;
let currentS;

const timerId = setInterval(decreaseTime, 1000);
ifLessTenSeconds();
time.innerHTML = `00:${currentS}`;

function decreaseTime() {
  currentS = --seconds;
  if (currentS <= 0) {
    clearInterval(timerId);
  }
  ifLessTenSeconds();
  time.innerHTML = `00:${currentS}`;
}

function ifLessTenSeconds() {
  if (seconds < 10) {
    return (currentS = `0${seconds}`);
  } else {
    (currentS = `${seconds}`)
  }
}
