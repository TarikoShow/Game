const startButton = document.getElementById("start-btn");
const screens = document.querySelectorAll(".screen");
const gameCont = document.getElementById("game-container");
const time = document.getElementById("time");
const score = document.getElementById("score");
let target = document.getElementById("target");

let seconds = 0;
let result = 0;

startButton.addEventListener("click", () => {
  screens[0].classList.remove("visible");
  screens[1].classList.add("visible");
  startGame();
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  time.innerHTML = `Время: ${seconds}`;
  seconds++;
}

function createTarget() {}

let step = 0;
let flag = true;
function posForTarget() {
  if (window.innerWidth - 50 > step && flag == true) {
    target.style.transform = "scaleX(1)";
    step += 10;
  } else {
    target.style.transform = "scaleX(-1)";
    step -= 10;
    flag = step == 0 ? true : false;
  }
  target.style.left = step + "px";
}
//setInterval(function () {posForTarget()}, 8);

function catchTarget() {}

function addTatget() {}

function increaseScore() {}
