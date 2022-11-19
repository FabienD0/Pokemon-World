class Enemy {
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;
    this.pokemonArray = [
      "./images/pokemon/articuno.png",
      "./images/pokemon/butterfree.png",
      "./images/pokemon/chansey.png",
      "./images/pokemon/charizard.png",
      "./images/pokemon/dragonair.png",
      "./images/pokemon/dragonite.png",
      "./images/pokemon/eevee.png",
      "./images/pokemon/jigglypuff.png",
      "./images/pokemon/lapras.png",
      "./images/pokemon/meowth.png",
      "./images/pokemon/pikachu.png",
      "./images/pokemon/raticate.png",
      "./images/pokemon/squirtle.png",
      "./images/pokemon/venusaur.png",
      "./images/pokemon/zapdos.png",
    ];
    this.x = enemySpot * ENEMY_WIDTH;
    this.y = -ENEMY_HEIGHT + 120;
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = this.pokemonArray[this.randomNumber()];
    this.domElement.id = "pokemon";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }
  ///DESTROY&CATCH ENNEMIES with GIVING SCORE/////
  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      SCORE += 5;
      document.getElementById("scoreText").innerText = SCORE;
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    } else if (this.destroyed === true) {
      this.domElement.src = "images/poof.gif";
      SCORE += 10;
      document.getElementById("scoreText").innerText = SCORE;
      setTimeout(() => {
        this.root.removeChild(this.domElement);
      }, 400);
      this.destroyed = true;
    }
  }
  ///////////////////////////////////////////
  ////////Random Number for POKEMON IMAGE////
  randomNumber() {
    return Math.floor(
      Math.random() * (this.pokemonArray.length - 1 - 0 + 1) + 0
    );
  }
}
