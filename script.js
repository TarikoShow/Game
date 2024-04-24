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
  //createTarget();
  target.onclick = function () {
    result += 10;
    score.innerHTML = `Счет ${result}`;
  };
}

function increaseTime() {
  time.innerHTML = `Время: ${seconds}`;
  seconds++;
}

// function createTarget() {
//   const { x, y} = getRandomLocation();
//   const target = document.createElement("img");
//   target.src = "Image/target.webp";
//   target.style.display = "block";
//   target.style.top =`${y}px`;
//   target.style.left = `${x}px`;
//   gameNode.appendChild(target);
// }

// function getRandomLocation() {
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   const x = (Math.random() * width) -250;
//   const y = (Math.random() * height) - 50;
//   return {x, y};
// }

let step = 0;
let flag = true;
function posForTarget() {
  if (window.innerWidth - 250 > step && flag == true) {
    target.style.transform = "scaleX(1)";
    step += 10;
  } else {
    target.style.transform = "scaleX(-1)";
    step -= 10;
    flag = step == 0 ? true : false;
  }
  target.style.left = step + "px";
}
setInterval(function () {
  posForTarget();
}, 30);

// function catchTarget() {
//   increaseScore();

//addTarget();
//this.remove();
// }

//function addTarget() {
//setTimeout(createTarget, 1000)
//}

// уже реальзованно в старт функции. но сохранено для реализации событий

// function increaseScore() {
//   score = + 10;
//   score.innerHTML = `Счет ${score}`;
// }
