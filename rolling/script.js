"use strict";

const imgRoll = document.querySelector("img");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const pointPlayer0 = document.getElementById("point-player0");
const pointPlayer1 = document.getElementById("point-player1");
const currentPlayer0 = document.getElementById("roll-player0");
const currentPlayer1 = document.getElementById("roll-player1");

let playing, score, currentScore, activePlayer;

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".new-game");

const switchGame = function () {
  document.getElementById(`roll-player${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle("bg-player");
  player1.classList.toggle("bg-player");
};

const init = function () {
  playing = true;
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  pointPlayer0.textContent = 0;
  pointPlayer1.textContent = 0;
  currentPlayer0.textContent = 0;
  currentPlayer1.textContent = 0;

  imgRoll.classList.add("hidden");
  player0.classList.remove("win");
  player1.classList.remove("win");
  player0.classList.add("bg-player");
  player1.classList.remove("bg-player");
};

init();

roll.addEventListener("click", function () {
  if (playing === true) {
    let numberRoll = Math.trunc(Math.random() * 6 + 1);
    console.log(currentScore);

    imgRoll.src = `./img/rolling${numberRoll}.jpg`;
    imgRoll.classList.remove("hidden");

    if (numberRoll !== 1) {
      currentScore += numberRoll;
      document.getElementById(`roll-player${activePlayer}`).textContent =
        currentScore;
    } else {
      score[`${activePlayer}`] = 0;
      document.getElementById(`point-player${activePlayer}`).textContent = 0;
      switchGame();
    }
  }
});

hold.addEventListener("click", function () {
  if (playing === true) {
    score[`${activePlayer}`] += currentScore;
    document.getElementById(`point-player${activePlayer}`).textContent =
      score[`${activePlayer}`];

    if (score[`${activePlayer}`] >= 20) {
      playing = false;
      document.querySelector(`.player${activePlayer}`).classList.add("win");
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("bg-player");
      imgRoll.classList.add("hidden");
    } else {
      switchGame();
    }
  }
});

newGame.addEventListener("click", init);
