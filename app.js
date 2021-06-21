const time = document.querySelector("#time");
let currentS = 12;
let currentM = 1;

const timerId = setInterval(decreaseTime, 1000);
if (currentS < 10 && currentS > 0){
    currentS = `0${currentS}`

  }
time.innerHTML = `${currentM}:${currentS}`;

function decreaseTime() {
  // debugger;
  currentS--;
  if (currentS <= 0 && currentM === 0) {
    clearInterval(timerId);
    time.innerHTML = `0:00`;
    return;
  }
  if (currentS < 10 && currentS > 0){
    currentS = `0${currentS}`
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
