const time = document.querySelector("#time");
let currentTime = 5;

const timerId = setInterval(decreaseTime, 1000);

if (currentTime < 10) {
  current = `0${currentTime}`;
}
time.innerHTML = `00:0${currentTime}`;

function decreaseTime() {
  let current = --currentTime;
  if (current <= 0) {
    clearInterval(timerId);
  }
  if (current < 10) {
    current = `0${current}`;
  }

  time.innerHTML = `00:${current}`;
}
// function ifLessTen(){
    
// }