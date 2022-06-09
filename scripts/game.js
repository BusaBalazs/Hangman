//--------------------------------------------------------
//*** Checking the matching letters ********
//--------------------------------------------------------
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

//--------------------------------------------------------
//*** Create the alphabet part ********
//--------------------------------------------------------
const createAlphabetFields = () => {
  for (const letterItem of alpahabetAll) {
    const alphabet = document.createElement("div");
    alphabetContainer.append(alphabet);
    alphabet.classList.add("letter", "alphabet-letter");
    alphabet.innerHTML = letterItem;
  }
};

//--------------------------------------------------------
//*** Create the fields based on the specified word ********
//--------------------------------------------------------
const createGameField = () => {
  for (let i = 0; i < inputWordLetter.length; i++) {
    let createLetterCube = document.createElement("div");
    gameField.append(createLetterCube);
    if (inputWordLetter[i] !== " ") {
      createLetterCube.dataset.id = inputWordLetter[i];
      // Check the double consonant (this is hungarian language specific)
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

//--------------------------------------------------------
//*** Get the specified word of letters's id ********
//--------------------------------------------------------
const getLetterId = () => {
  letterIds = document.querySelectorAll(".letter-id");
};

//--------------------------------------------------------
//*** Counting the remaining life / build the gallows ********
//--------------------------------------------------------
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

//--------------------------------------------------------
//*** Winner issue ********
//--------------------------------------------------------
const winGame = () => {
  const specifiedWordLetter = document.querySelectorAll(".letter-id");
  const findAllLetters = [];
  specifiedWordLetter.forEach((letterItem) => {
    if (letterItem.textContent != "") {
      findAllLetters.push(letterItem.textContent);
    }
  });
  if (specifiedWordLetter.length === findAllLetters.length) {
    newGameCard();
  }
};

//--------------------------------------------------------
//*** Inform the player if winning ********
//--------------------------------------------------------
const newGameCard = () => {
  endGameCard.style.display = "flex";
  endGameCard.firstElementChild.children[0].textContent = "Congratulation!";
  endGameCard.firstElementChild.children[1].innerHTML = "You WIN!!!	&#128526";
  lifeCounter = 0;
};

//--------------------------------------------------------
//*** Inform the player if losing ********
//--------------------------------------------------------
const endGame = () => {
  endGameCard.style.display = "flex";
  endGameCard.firstElementChild.children[0].textContent = "Sorry!";
  endGameCard.firstElementChild.children[1].innerHTML =
    "You're hanging	&#128565";
  lifeCounter = 0;
};

//--------------------------------------------------------
//*** Start new game ********
//--------------------------------------------------------
const newGame = () => {
  gameField.innerHTML = "";
  alphabetContainer.innerHTML = "";
  hangingMan.innerHTML = "";
  hangingMan.style.display = "none";
  endGameCard.style.display = "none";
  textInput.style.display = "block";
  inputWord.value = "";
};
