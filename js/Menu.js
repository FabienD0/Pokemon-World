////////////MENU START//////////////////////////
const startMenu = () => {
  const startMenu = document.createElement("div");
  const pokemonWorld = document.createElement("p");
  const startButton = document.createElement("button");
  const keyboardDiv = document.createElement("div");
  const menuMoveDiv = document.createElement("div");
  const menuJumpDiv = document.createElement("div");
  const menuShootDiv = document.createElement("div");
  const footerMenu = document.createElement("footer");
  const keyArrowLeft = document.createElement("img");
  const keyArrowRight = document.createElement("img");
  const keyArrowUp = document.createElement("img");
  const keyArrowSpace = document.createElement("img");
  const keyArrowRightText = document.createElement("p");
  const keyArrowUpText = document.createElement("p");
  const keyArrowSpaceText = document.createElement("p");
  const hpText = document.createElement("p");
  const powerText = document.createElement("p");
  const scoreFooterText = document.createElement("p");

  startMenu.id = "startMenu";
  startMenu.style.width = "100%";
  startMenu.style.height = "100%";

  startButton.id = "startButton";
  startButton.innerText = "START GAME";
  keyboardDiv.id = "keyboardDiv";
  menuMoveDiv.id = "menuKeyDiv";
  menuJumpDiv.id = "menuKeyDiv";
  menuShootDiv.id = "menuKeyDiv";
  keyArrowLeft.id = "keys";
  keyArrowRight.id = "keys";
  keyArrowUp.id = "keys";
  keyArrowSpace.id = "keys";
  keyArrowLeft.src = "images/leftarrow.png";
  keyArrowRight.src = "images/rightarrow.png";
  keyArrowUp.src = "images/uparrow.png";
  keyArrowSpace.src = "images/space.png";
  keyArrowRightText.id = "keysText";
  keyArrowUpText.id = "keysText";
  keyArrowSpaceText.id = "keysText";
  keyArrowRightText.innerText = "Move";
  keyArrowUpText.innerText = "Jump";
  keyArrowSpaceText.innerText = "Throw Pokeball";

  footerMenu.id = "footerMenu";

  pokemonWorld.id = "pokemonWorld";
  hpText.id = "textFooter";
  powerText.id = "textFooter";
  scoreFooterText.id = "textFooter";

  pokemonWorld.innerText = "POKEMON WORLD";
  hpText.innerText = "Whatch your life";
  powerText.innerText = "Catch Pokemon to unlock ultimate power ";
  scoreFooterText.innerText = "Catch or avoid Pokemon to increase score";

  document.getElementById("app").append(startMenu);
  startMenu.append(pokemonWorld);
  startMenu.append(startButton);
  startMenu.append(keyboardDiv);
  keyboardDiv.append(menuMoveDiv, menuJumpDiv, menuShootDiv);
  menuMoveDiv.append(keyArrowRightText, keyArrowLeft, keyArrowRight);
  menuJumpDiv.append(keyArrowUpText, keyArrowUp);
  menuShootDiv.append(keyArrowSpaceText, keyArrowSpace);
  startMenu.append(footerMenu);
  footerMenu.append(hpText, powerText, scoreFooterText);
};

////////////HIGH SCORE//////////////////////////
const highScore = () => {
  const highScore = document.createElement("p");
  highScore.id = "highScore";
  highScore.innerText = "Highscore: " + HIGH_SCORE;

  //document.querySelector("body").append(highScore);
  document.getElementById("container").append(highScore);
};

////////////POKEMON CATCHED//////////////////////////
const pokemonCatched = () => {
  const pokemonCatched = document.createElement("p");
  pokemonCatched.id = "pokemonCatched";
  pokemonCatched.innerText = "Pokemon catched: " + POKEMON_CATCH;

  //document.querySelector("body").append(highScore);
  document.getElementById("container").append(pokemonCatched);
};

///////////CALCULATE FINAL SCORE/////////////////
const finalScore = () => {
  const calcScore = setInterval(() => {
    FINALE_SCORE++;
    document.getElementById("scoreEnd").innerText =
      "Final score: " + FINALE_SCORE;
    if (FINALE_SCORE === SCORE && FINALE_SCORE > HIGH_SCORE) {
      const newHighScore = document.createElement("p");
      newHighScore.id = "newHighScore";
      newHighScore.innerText = "NEW HIGHSCORE!";
      document.getElementById("endMenu").append(newHighScore);
      document.getElementById("highScore").innerText =
        "Highscore: " + FINALE_SCORE;
      HIGH_SCORE = FINALE_SCORE;
      clearInterval(calcScore);
      resetGame();
    } else if (FINALE_SCORE === SCORE || SCORE === 0) {
      clearInterval(calcScore);
      resetGame();
    }
  }, 1);
};
/////////RESET STATS/////////////
const resetAll = () => {
  START_GAME = true;
  PLAYER_LIVES = 3;
  MAX_ENEMIES = 3;
  POKEMON_CATCH = 0;
  SCORE = 0;
  FINALE_SCORE = 0;
  document.getElementById("life").src = "images/lifefull.png";
  document.getElementById("logoWhiteBox").src = "images/logopokemon0.png";
};
/////////////RESET GAME MOUSE & SPACE/////////////
const resetGame = () => {
  resetButton.addEventListener("click", () => {
    document.getElementById("endMenu").remove();
    resetAll();
    gameEngine.gameLoop();
  });
};
/////////////END MENU//////////////////////
const endMenu = () => {
  const endMenu = document.createElement("div");
  endMenu.id = "endMenu";
  endMenu.style.width = "100%";
  endMenu.style.height = "100%";
  document.getElementById("app").append(endMenu);

  const resetButton = document.createElement("button");
  resetButton.id = "resetButton";
  resetButton.innerText = "RESET GAME";
  endMenu.append(resetButton);

  const pokemonCatchEnd = document.createElement("p");
  pokemonCatchEnd.id = "pokemonCatchEnd";
  pokemonCatchEnd.innerText = "Pokemon catched: " + POKEMON_CATCH;

  const scoreText = document.createElement("p");
  scoreText.id = "scoreEnd";
  endMenu.append(pokemonCatchEnd);
  scoreText.innerText = "Final score: " + finalScore();
  endMenu.append(scoreText);
};
