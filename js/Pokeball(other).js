class Pokeball {
  constructor(theRoot, ballSpot) {
    this.root = theRoot;
    this.spot = ballSpot;

    this.x = ballSpot * ENEMY_WIDTH;

    this.y = -ENEMY_HEIGHT + 120;
    this.destroyed = false;

    this.domElement = document.createElement("img");

    this.domElement.src = "./images/pokeball.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.zIndex = 5;
    this.domElement.style.height = "45px";

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);

      this.destroyed = true;
    }
  }

  pokeThrow = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    this.pokeball.forEach((ball) => {
      ball.update(timeDiff);
    });

    this.pokeball = this.pokeball.filter((ball) => {
      return !ball.destroyed;
    });

    while (this.pokeball.length < MAX_ENEMIES) {
      const spot = nextPokeballSpot(this.pokeball);
      this.pokeball.push(new Pokeball(this.root, spot));
    }
    console.log(this.y);
    const timeout = setTimeout(this.pokeThrow, 15);

    if (this.y < 40) {
      this.y = 500;
      console.log("ALLO");
      clearTimeout(timeout);
      this.domElement.remove();
    }
  };
}

//   throwPokeball = () => {
//     if (this.throw === false) {
//       this.domElement.style.display = "";
//       if (this.lastFrame === undefined) {
//         this.lastFrame = new Date().getTime();
//       }

//       let timeDiff = new Date().getTime() - this.lastFrame;

//       this.lastFrame = new Date().getTime();

//       this.y = this.y - timeDiff * this.speed;
//       this.domElement.style.top = `${this.y}px`;

//       console.log(this.y);

//       const timeout = setTimeout(this.throwPokeball, 20);

//       if (this.y < -40) {
//         this.y = 500;
//         console.log("ALLO");
//         clearTimeout(timeout);
//         this.domElement.remove();
//       }
//     }
//   };

//   pokeball = () => {
//     this.domElement = document.createElement("img");
//     this.domElement.src = "./images/pokeball.png";
//     this.domElement.setAttribute("class", "pokeball");
//     this.domElement.style.position = "absolute";
//     this.domElement.style.left = `${this.x}px`;
//     this.domElement.style.top = `${this.y}px`;
//     this.domElement.style.zIndex = 5;
//     this.root.appendChild(this.domElement);
//     this.throwPokeball();
//   };
// }
