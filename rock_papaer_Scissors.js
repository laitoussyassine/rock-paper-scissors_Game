const resultDisplay = document.getElementById("result");
const playButton = document.getElementById("play");
const PossibleChoises = ["rock", "paper", "scissors"];
const computerScore = document.getElementById("computerScore");
const userScore = document.getElementById("userScore");
const resetGame = document.getElementById("resetGame");
const allChoises = document.querySelectorAll(".radios-field .item-choise");
const getItemHover = document.querySelectorAll(".radios-field .img-box");
const startGameBtn = document.getElementById("btn-start-game");
const welcomeContainer = document.querySelector(".welcome-container");
const gameContainer = document.querySelector(".game-container");
const resultChoise = document.querySelector(".user-choise");

let score = {
  computerScore: 0,
  userScore: 0,
};

let playerMove = null;

startGameBtn.addEventListener("click", () => {
  gameContainer.classList.add("animate");
});

getItemHover.forEach((ele) => {
  ele.addEventListener("click", () => {
    getItemHover.forEach((ele) => {
      ele.classList.remove("fix-hover");
    });
    ele.classList.add("fix-hover");
  });
});


allChoises.forEach((choise) => {
  choise.addEventListener("click", () => {
    playButton.disabled = false;
    playerMove = choise.getAttribute("data-move");
    console.log(playerMove);
  });
});

// reset game function
resetGame.addEventListener("click", () => {
  score.computerScore = 0;
  score.userScore = 0;
  userScore.textContent = 0;
  computerScore.textContent = 0;
  resultDisplay.textContent = "";
  
});

//
playButton.addEventListener("click", () => {
  const computerChoice = generateComputerChoice();
  showResult(playerMove, computerChoice);
});

// Add Text To Span Element
function addTextToSpan(choiseControl, text) {
  choiseControl.textContent = text;
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * PossibleChoises.length);
  const computerChoice = PossibleChoises[randomNumber];
  return computerChoice;
}

function showResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    addTextToSpan(resultDisplay, "tied");
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissors")
    ) {
      addTextToSpan(resultDisplay, "You Win");
      score.userScore = score.userScore + 1;
      userScore.textContent = score.userScore;
    } else {
      addTextToSpan(resultDisplay, "You Lost");
      score.computerScore = score.computerScore + 1;
      computerScore.textContent = score.computerScore;
    }
    document.querySelector('.computer-choice').src = `images/${computerChoice}.png`;
    document.querySelector('.player-choice').src = `images/${userChoice}.png`;
}
