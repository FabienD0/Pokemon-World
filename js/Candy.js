class Candy {
  constructor(theRoot, candySpot) {
    this.root = theRoot;
    this.spot = candySpot;
    this.audio = new Audio("sounds/candy.mp3");

    this.x = candySpot * ENEMY_WIDTH;

    this.y = -ENEMY_HEIGHT + 120;
    this.destroyed = false;

    this.domElement = document.createElement("img");
    this.domElement.src = "images/rarecandy.png";
    this.domElement.id = "candy";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;

    theRoot.appendChild(this.domElement);
    this.speed = 0.25;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    } else if (this.destroyed === true) {
      this.audio.play();
      SCORE += 200;
      POKEBALL_NUMBER += 20;
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  }
}
