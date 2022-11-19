class Player {
  constructor(root) {
    this.x = 8 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;

    this.domElement = document.createElement("img");
    this.domElement.src = "images/Ash.png";
    this.domElement.setAttribute("id", "ash");
    this.domElement.style.position = "absolute";
    this.domElement.style.height = "100px";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = ` ${this.y - 38}px`;
    this.domElement.style.zIndex = "10";
    root.appendChild(this.domElement);

    this.pokeball = document.createElement("img");
    this.pokeball.src = "images/pokeball.png";
    this.pokeball.style.position = "absolute";
  }

  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }

    this.domElement.style.left = `${this.x}px`;
  }
  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH - 3) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }
  moveJump() {
    this.domElement.style.top = `450px`;
    this.y = 450;
    setTimeout(() => {
      this.domElement.style.top = `${GAME_HEIGHT - PLAYER_HEIGHT - 48}px`;
      this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
    }, 300);
  }
}
