// check the letters
const gameLogic = () => {
  createAlphabetFields();
  const checkItem = [];

  const alphabetLetters = document.querySelectorAll(".alphabet-letter");
  alphabetLetters.forEach((letter) => {
    letter.addEventListener("click", () => {
      letter.classList.add("clicked-letter");
      const actualLetter = letter.innerHTML;
      letterIds.forEach((item) => {
        checkItem.push(item.dataset.id);
        if (actualLetter === item.dataset.id) {
          item.innerHTML = actualLetter;
        }
      });

      checkItem.includes(actualLetter)
        ? (matchLetter = true)
        : (matchLetter = false);
      life();
      winGame();
    });
  });
};

// creat the alphabet
const createAlphabetFields = () => {
  for (const letterItem of alpahabetAll) {
    const alphabet = document.createElement("div");
    alphabetContainer.append(alphabet);
    alphabet.classList.add("letter", "alphabet-letter");
    alphabet.innerHTML = letterItem;
  }
};

// create the field based on the specified word
const createGameField = () => {
  for (let i = 0; i < inputWordLetter.length; i++) {
    let createLetterCube = document.createElement("div");
    gameField.append(createLetterCube);
    if (inputWordLetter[i] !== " ") {
      createLetterCube.dataset.id = inputWordLetter[i];
      if (
        (inputWordLetter[i] === "c" && inputWordLetter[i + 1] === "s") ||
        (inputWordLetter[i] === "d" && inputWordLetter[i + 1] === "z") ||
        (inputWordLetter[i] === "d" &&
          inputWordLetter[i + 1] === "z" &&
          inputWordLetter[i + 2] === "s") ||
        (inputWordLetter[i] === "g" && inputWordLetter[i + 1] === "y") ||
        (inputWordLetter[i] === "l" && inputWordLetter[i + 1] === "y") ||
        (inputWordLetter[i] === "n" && inputWordLetter[i + 1] === "y") ||
        (inputWordLetter[i] === "s" && inputWordLetter[i + 1] === "z") ||
        (inputWordLetter[i] === "t" && inputWordLetter[i + 1] === "y") ||
        (inputWordLetter[i] === "z" && inputWordLetter[i + 1] === "s")
      ) {
        createLetterCube.classList.add("letter-id", "letter");
        let double = document.createElement("div");
        gameField.append(double);
        double.innerHTML = "&#x23DD";
        double.style.color = "white";
      } else {
        createLetterCube.classList.add("letter-id", "letter");
      }
    } else {
      createLetterCube.classList.add("whitespace");
    }
  }
};

// get the spcified letters of word
const getLetterId = () => {
  letterIds = document.querySelectorAll(".letter-id");
};

// count the wrong letter
const life = () => {
  if (!matchLetter) {
    hangingMan.style.display = "block";
    const partOfHangman = document.createElement("div");
    hangingMan.append(partOfHangman);
    partOfHangman.classList.add(gallows[lifeCounter]);
    lifeCounter++;
  }
  if (lifeCounter >= 11) {
    endGame();
  }
};

// check if win the player
const winGame = () => {
  const specifiedWordLetter = document.querySelectorAll(".letter-id");
  const findAllLetters = [];
  specifiedWordLetter.forEach(letterItem => {
    if (letterItem.textContent != "") {
      findAllLetters.push(letterItem.textContent);
    }
  });
  if (specifiedWordLetter.length === findAllLetters.length) {
    newGameCard();
  }
};

const newGameCard = () => {
  endGameCard.style.display = "flex";
  endGameCard.firstElementChild.children[0].textContent = "Congratulation!";
  endGameCard.firstElementChild.children[1].innerHTML =
    "You WIN!!!	&#128526";
  lifeCounter = 0;
};

// end game
const endGame = () => {
  endGameCard.style.display = "flex";
  endGameCard.firstElementChild.children[0].textContent = "Sorry!";
  endGameCard.firstElementChild.children[1].innerHTML =
    "You're hanging	&#128565";
  lifeCounter = 0;
};

const newGame = () => {
  gameField.innerHTML = "";
  alphabetContainer.innerHTML = "";
  hangingMan.innerHTML = "";
  hangingMan.style.display = "none";
  endGameCard.style.display = "none";
  textInput.style.display = "block";
  inputWord.value = "";
};
