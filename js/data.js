const GAME_WIDTH = 1277;
const GAME_HEIGHT = 649;

const ENEMY_WIDTH = 75;
const ENEMY_HEIGHT = 110;
let MAX_ENEMIES = 3;

const ENEMY2_WIDTH = 10;
const ENEMY2_HEIGHT = 110;
let MAX_ENEMIES2 = 3;

const CANDY_WIDTH = 75;
const CANDY_HEIGHT = 110;
const MAX_CANDY = 1;

const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 54;
let PLAYER_LIVES = 3;
let BONUS_ACTIVE = false;

const POKEBALL_WIDTH = 75;
const POKEBALL_HEIGHT = 50;
let POKEBALL_NUMBER = 20;
let POKEMON_CATCH = 0;

setInterval(() => {
  if (POKEBALL_NUMBER < 20) {
    POKEBALL_NUMBER++;
  }
}, 1000);

setInterval(() => {
  document.getElementById("pokeballRemainText").innerText = POKEBALL_NUMBER;
}, 300);

let SCORE = 0;
let HIGH_SCORE = 0;
let FINALE_SCORE = 0;

let START_GAME = false;
