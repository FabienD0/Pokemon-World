class Enemy2 {
  constructor(theRoot) {
    this.root = theRoot;

    this.x = ENEMY2_WIDTH;

    this.y = GAME_HEIGHT - ENEMY2_HEIGHT + 40;
    this.destroyed = false;

    this.domElement = document.createElement("img");
    this.domElement.src = "images/enemy2.gif";
    this.domElement.id = "rocket";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }

  update(timeDiff) {
    this.x = this.x + timeDiff * this.speed;
    this.domElement.style.left = `${this.x - 100}px`;

    if (this.x > GAME_WIDTH + 50) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    } else if (this.destroyed === true) {
      this.domElement.src = "images/poof.gif";
      setTimeout(() => {
        this.root.removeChild(this.domElement);
      }, 400);
      this.destroyed = true;
    }
  }
}
