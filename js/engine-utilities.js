////SPOT AVALIABLE FOR ENEMIES////
const nextEnemySpot = (enemies) => {
  const enemySpots = GAME_WIDTH / ENEMY_WIDTH;

  const spotsTaken = [false, false, false, false, false];
  enemies.forEach((enemy) => {
    spotsTaken[enemy.spot] = true;
  });

  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * enemySpots);
  }
  return candidate;
};
////SPOT AVALIABLE FOR CANDIES////
const nextCandySpot = (candies) => {
  const candySpots = GAME_WIDTH / ENEMY_WIDTH;

  const spotsTaken = [false, false, false, false, false];
  candies.forEach((candy) => {
    spotsTaken[candy.spot] = true;
  });

  let candidate = undefined;
  while (candidate === undefined || spotsTaken[candidate]) {
    candidate = Math.floor(Math.random() * candySpots);
  }
  return candidate;
};

const addBackground = (root) => {
  const bg = document.createElement("img");

  bg.src = "images/background.png";
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;
  bg.setAttribute("class", "background");
  root.append(bg);

  /////CREATE ELEMENT HTML////////////////////
  const whiteBox = document.createElement("div");
  const whiteBoxUp = document.createElement("div");
  const logoWhiteBox = document.createElement("img");
  const lifeFull = document.createElement("img");
  const lifeOne = document.createElement("img");
  const lifeZero = document.createElement("img");
  const score = document.createElement("img");
  const containerScorePokeball = document.createElement("div");
  const containerPokeball = document.createElement("div");
  const containerScore = document.createElement("div");
  const pokeballRemain = document.createElement("img");
  const pokeballRemainText = document.createElement("p");
  const scoreText = document.createElement("p");
  const logoScoreOne = document.createElement("img");
  const logoScoreTwo = document.createElement("img");
  const logoScoreThree = document.createElement("img");
  const logoScoreFour = document.createElement("img");
  const logoScoreFive = document.createElement("img");
  const logoScoreSix = document.createElement("img");
  const logoScoreSeven = document.createElement("img");
  const logoScoreEight = document.createElement("img");
  const logoScoreNine = document.createElement("img");
  const logoScoreTen = document.createElement("img");
  const stopMusic = document.createElement("button");

  whiteBoxUp.style.zIndex = "100";
  whiteBoxUp.style.position = "absolute";
  whiteBoxUp.style.top = `60px`;
  whiteBoxUp.style.height = `${POKEBALL_HEIGHT + 10}px `;
  whiteBoxUp.style.width = `${GAME_WIDTH}px`;
  whiteBoxUp.style.background = "rgb(8, 2, 27)";
  whiteBoxUp.setAttribute("class", "whiteBoxUp");

  whiteBox.style.zIndex = 100;
  // whiteBox.style.position = "absolute";
  whiteBox.style.bottom = `${GAME_HEIGHT}px`;
  whiteBox.style.left = `5px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  // whiteBox.style.background = "rgba(8, 2, 27)";
  // whiteBox.style.borderTop = "3px solid rgb(121, 166, 207)";
  whiteBox.setAttribute("id", "whiteBox");

  logoWhiteBox.setAttribute("id", "logoWhiteBox");
  logoWhiteBox.src = "images/logopokemon0.png";

  score.setAttribute("id", "scoreImg");
  score.src = "images/score.png";

  lifeFull.setAttribute("id", "life");
  lifeFull.src = "images/lifefull.png";
  lifeOne.src = "images/life1.png";
  lifeZero.src = "images/life0.png";

  /////////POKEMON BONUS IMAGES///////////////
  logoScoreOne.setAttribute("id", "score1");
  logoScoreTwo.setAttribute("id", "score2");
  logoScoreThree.setAttribute("id", "score3");
  logoScoreFour.setAttribute("id", "score4");
  logoScoreFive.setAttribute("id", "score5");
  logoScoreSix.setAttribute("id", "score6");
  logoScoreSeven.setAttribute("id", "score7");
  logoScoreEight.setAttribute("id", "score8");
  logoScoreNine.setAttribute("id", "score9");
  logoScoreTen.setAttribute("id", "score10");
  logoScoreOne.src = "images/logopokemon1.png";
  logoScoreTwo.src = "images/logopokemon2.png";
  logoScoreThree.src = "images/logopokemon3.png";
  logoScoreFour.src = "images/logopokemon4.png";
  logoScoreFive.src = "images/logopokemon5.png";
  logoScoreSix.src = "images/logopokemon6.png";
  logoScoreSeven.src = "images/logopokemon7.png";
  logoScoreEight.src = "images/logopokemon8.png";
  logoScoreNine.src = "images/logopokemon9.png";
  logoScoreTen.src = "images/logopokemon10.png";

  containerScorePokeball.setAttribute("class", "containerScorePokeball");
  containerScore.setAttribute("class", "containerScore");
  containerPokeball.setAttribute("class", "containerPokeball");
  pokeballRemain.setAttribute("class", "pokeballRemain");
  pokeballRemain.src = "images/pokeball.png";
  pokeballRemainText.setAttribute("id", "pokeballRemainText");
  pokeballRemainText.innerText = POKEBALL_NUMBER;
  scoreText.setAttribute("id", "scoreText");
  scoreText.innerText = SCORE;

  stopMusic.setAttribute("id", "stopMusic");
  stopMusic.innerText = "♫";
  //document.querySelector("body").append(whiteBoxUp);
  // root.append(whiteBox);
  document.getElementById("container").append(whiteBox);
  root.append(stopMusic);
  whiteBox.append(lifeFull);
  whiteBox.append(logoWhiteBox);
  whiteBox.append(containerScorePokeball);
  containerScorePokeball.append(containerPokeball);
  containerScorePokeball.append(containerScore);
  containerScore.append(score);
  containerScore.append(scoreText);
  containerPokeball.append(pokeballRemain);
  containerPokeball.append(pokeballRemainText);
};
