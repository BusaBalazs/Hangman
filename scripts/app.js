//--------------------------------------------------------
//*** SELECT DOM ELEMENTS ********
//--------------------------------------------------------

const btn = document.getElementById("start-btn");
const inputWord = document.getElementById("input-word");
const textInput = document.querySelector(".text-input");
const gameField = document.querySelector(".game-field");
const alphabetContainer = document.querySelector(".alphabet-container");
const hangingMan = document.querySelector(".hangman");
const endGameCard = document.querySelector(".end-game-bg");
const newGameBtn = document.getElementById("new-btn");

//--------------------------------------------------------
//*** GAME LOGIC'S VARIABELS *********
//--------------------------------------------------------
const alpahabetAll = [
  "a",
  "á",
  "b",
  "c",
  "d",
  "e",
  "é",
  "f",
  "g",
  "h",
  "i",
  "í",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ó",
  "ö",
  "ő",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "ú",
  "ü",
  "ű",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const gallows = [
  "base",
  "stick",
  "stick-side",
  "stick-cross",
  "stick-down",
  "head",
  "body",
  "left-hand",
  "right-hand",
  "left-leg",
  "right-leg",
];

let letterIds;
let inputWordLetter = [];
let matchLetter;
let lifeCounter = 0;

//--------------------------------------------------------
//*** START GAME EVENT *********
//--------------------------------------------------------
btn.addEventListener("click", () => {
  if (!inputWord.value) {
    alert("Please enter your required word!");
  } else {
    inputWordLetter = inputWord.value.toLowerCase().split("");
    gameLogic();
    createGameField();
    getLetterId();
    textInput.style.display = "none";
  }
});

newGameBtn.addEventListener("click", () => {
  newGame();
});