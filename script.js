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

