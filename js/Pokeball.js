class Pokeball {
  constructor(theRoot, playerX, playerY) {
    this.root = theRoot;
    this.x = playerX;
    this.y = playerY - PLAYER_HEIGHT - 10;
    this.scoreMeter = document.getElementById("logoWhiteBox");
    this.audio = new Audio("sounds/bonus.mp3");
    this.destroyed = false;

    this.domElement = document.createElement("img");

    this.domElement.src = "./images/pokeball.png";
    this.domElement.id = "pokeball";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 20;
    this.domElement.style.height = "45px";
    this.domElement.style.opacity = "90%";

    this.root.appendChild(this.domElement);

    this.speed = 0.5;
  }

  update(timeDiff) {
    this.y = this.y - timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    } else if (this.destroyed === true) {
      POKEMON_CATCH++;
      this.isHighScore();
      document.getElementById("pokemonCatched").innerText =
        "Pokemon catched: " + POKEMON_CATCH;
      const gotcha = document.createElement("img");
      gotcha.setAttribute("id", "gotcha");
      gotcha.src = "./images/gotcha.png";
      gotcha.style.position = "absolute";
      gotcha.style.left = `${this.x}px`;
      gotcha.style.zIndex = 20;
      gotcha.style.height = "20px";
      gotcha.style.opacity = "90%";
      gotcha.style.top = `${this.y}px`;
      this.root.append(gotcha);
      this.root.removeChild(this.domElement);
      this.destroyed = true;
      setTimeout(() => {
        gotcha.remove();
      }, 500);
    }
  }
  //////INSERT HTML IMAGE FOR THE BONUSES IMAGES/////////
  isHighScore() {
    if (POKEMON_CATCH % 5 === 0 && POKEMON_CATCH > 2) {
      if (this.scoreMeter.getAttribute("src") === "images/logopokemon0.png") {
        this.scoreMeter.src = "images/logopokemon1.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon1.png"
      ) {
        this.scoreMeter.src = "images/logopokemon2.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon2.png"
      ) {
        this.scoreMeter.src = "images/logopokemon3.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon3.png"
      ) {
        this.scoreMeter.src = "images/logopokemon4.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon4.png"
      ) {
        this.scoreMeter.src = "images/logopokemon5.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon5.png"
      ) {
        this.scoreMeter.src = "images/logopokemon6.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon6.png"
      ) {
        this.scoreMeter.src = "images/logopokemon7.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon7.png"
      ) {
        this.scoreMeter.src = "images/logopokemon8.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon8.png"
      ) {
        this.scoreMeter.src = "images/logopokemon9.png";
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon9.png"
      ) {
        this.scoreMeter.src = "images/logopokemon10.png";
        this.bonusActive();
      } else if (
        this.scoreMeter.getAttribute("src") === "images/logopokemon10.png"
      ) {
        this.scoreMeter.src = "images/logopokemon0.png";
      }
    }
  }

  /////////////BONUS ACTIVE//////////////////
  bonusActive() {
    let time = 0;
    this.audio.play();
    const bonusTime = setInterval(() => {
      time++;
      POKEBALL_NUMBER = 100;
      if (time === 5) {
        const lifeFull = document.createElement("img");
        lifeFull.setAttribute("id", "life");
        lifeFull.src = "images/lifefull.png";
        document.getElementById("life").replaceWith(lifeFull);
        POKEBALL_NUMBER = 20;
        PLAYER_LIVES = 3;
        BONUS_ACTIVE = false;
        clearInterval(bonusTime);
      }
    }, 1000);
    BONUS_ACTIVE = true;
  }
}
