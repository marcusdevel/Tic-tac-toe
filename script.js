let Positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let Choice;

let Player = "X";
let WinsX = parseInt(localStorage.getItem("WinsX")) || 0;

let LossesX = parseInt(localStorage.getItem("LossesX")) || 0;

let WinsO = parseInt(localStorage.getItem("WinsO")) || 0;

let LossesO = parseInt(localStorage.getItem("LossesO")) || 0;

let Nextplayer = document.querySelector(".nextplayer");

function startGame() {
  Choice = [];

  Nextplayer.innerHTML = `Jogador: ${Player}`;
  document.querySelectorAll(".cubs button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", nextMove);
  });
}

startGame();

function nextMove(e) {
  let value = e.target.getAttribute("data-i");
  e.target.innerHTML = Player;
  e.target.removeEventListener("click", nextMove);
  Choice[value] = Player;

  setTimeout(() => {
    check();
  }, 100);

  Player = Player === "X" ? "O" : "X";

  Nextplayer.innerHTML = `Jogador: ${Player}`;
}
function check() {
  let playermove = Player === "X" ? "O" : "X";
  const items = Choice.map((item, i) => [item, i])
    .filter((item) => item[0] === playermove)
    .map((item) => item[1]);

  for (pos of Positions) {
    if (pos.every((item) => items.includes(item))) {
      alert(`${playermove} venceu`);
      if (playermove === "X") {
        WinsX++;
        localStorage.setItem("WinsX", WinsX);
        LossesO++;
        localStorage.setItem("LossesO", LossesO);
      } else {
        WinsO++;
        localStorage.setItem("WinsO", WinsO);
        LossesX++;
        localStorage.setItem("LossesX", LossesX);
      }

      updateStatsX();
      updateStatsO();
      startGame();
      return;
    }
  }

  if (Choice.filter((item) => item).length === 9) {
    alert("Empate");

    startGame();
  }
}
function updateStatsX() {
  console.log(`X tem: ${WinsX} vitórias e ${LossesX} derrotas`);
}
function updateStatsO() {
  console.log(`O tem: ${WinsO} vitórias e ${LossesO} derrotas`);
}