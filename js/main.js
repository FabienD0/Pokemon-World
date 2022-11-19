const gameEngine = new Engine(document.getElementById("app"));
const audio = document.getElementById("audio");
let audioPlaying = true;
audio.volume = 0.1;

let spaceActive = false;

const keydownHandler = (event) => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }

  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }

  if (event.code === "ArrowUp") {
    gameEngine.player.moveJump();
  }

  if (!spaceActive && POKEBALL_NUMBER > 0 && START_GAME === true) {
    if (event.code === "Space") {
      spaceActive = true;
      gameEngine.throwPokeball();
      POKEBALL_NUMBER--;
    }
  }
};

const keyUpHandler = (event) => {
  if (event.code === "Space" && START_GAME === true) {
    spaceActive = false;
  }
};

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyUpHandler);
highScore();
pokemonCatched();
startMenu();

////////////PAUSE&PLAY MUSIC//////////////////////////
document.getElementById("stopMusic").addEventListener("click", () => {
  if (audioPlaying === true) {
    audio.pause();
    audioPlaying = false;
    document.getElementById("stopMusic").style.backgroundColor =
      "rgb(91, 92, 92)";
  } else {
    audio.play();
    audioPlaying = true;
    document.getElementById("stopMusic").style.backgroundColor = "";
  }
});
////////////START GAME/////////////////////////////
startButton.addEventListener("click", () => {
  document.getElementById("startMenu").remove();
  START_GAME = true;
  PLAYER_LIVES = 3;
  MAX_ENEMIES = 3;
  POKEMON_CATCH = 0;
  SCORE = 0;
  gameEngine.gameLoop();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && START_GAME === false) {
    document.getElementById("startMenu").remove();
    START_GAME = true;
    PLAYER_LIVES = 3;
    MAX_ENEMIES = 3;
    POKEMON_CATCH = 0;
    SCORE = 0;
    gameEngine.gameLoop();
  }
});
