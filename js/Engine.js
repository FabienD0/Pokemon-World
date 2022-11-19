class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.candies = [];
    this.pokeball = [];
    this.enemies2 = [];
    this.lives = PLAYER_LIVES;
    addBackground(this.root);
  }

  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;

    this.lastFrame = new Date().getTime();
    //////THROW ENEMIES/////////////////
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });
    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextEnemySpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }
    //////THROW CANDY/////////////////
    this.candies.forEach((candy) => {
      candy.update(timeDiff);
    });

    this.candies = this.candies.filter((candy) => {
      return !candy.destroyed;
    });
    if (POKEBALL_NUMBER < 10) {
      while (this.candies.length < MAX_CANDY) {
        const spot = nextCandySpot(this.candies);
        this.candies.push(new Candy(this.root, spot));
      }
    }

    //////Pokeball Throw
    this.pokeball.forEach((ball) => {
      ball.update(timeDiff);
    });

    this.pokeball = this.pokeball.filter((ball) => {
      return !ball.destroyed;
    });
    //////Enemies Second
    this.enemies2.forEach((enemy2) => {
      enemy2.update(timeDiff);
    });

    this.enemies2 = this.enemies2.filter((enemy2) => {
      return !enemy2.destroyed;
    });

    /////Catch pokemon
    this.isPokemonCatch();
    /////Catch Candy
    this.isCandyCatch();

    //////INCREASE LVL
    if (SCORE > 1000 && SCORE < 1500) {
      MAX_ENEMIES = 4;
    } else if (SCORE > 1500) {
      MAX_ENEMIES = 4;
      while (this.enemies2.length < 1) {
        this.enemies2.push(new Enemy2(this.root));
      }
    } else if (SCORE > 2000) {
      MAX_ENEMIES = 5;
      while (this.enemies2.length < 1) {
        this.enemies2.push(new Enemy2(this.root));
      }
    } else if (SCORE > 3000) {
      MAX_ENEMIES = 6;
      while (this.enemies2.length < 1) {
        this.enemies2.push(new Enemy2(this.root));
      }
    } else if (SCORE > 4000) {
      MAX_ENEMIES = 7;
      while (this.enemies2.length < 1) {
        this.enemies2.push(new Enemy2(this.root));
      }
    } else if (SCORE > 5000) {
      MAX_ENEMIES = 8;
      while (this.enemies2.length < 1) {
        this.enemies2.push(new Enemy2(this.root));
      }
    }
    /////Alert Game Over
    if (this.isPlayerDead() || this.isPlayerDead2()) {
      this.lives = 0;
      const lifeOne = document.getElementById("life");
      const lifeZero = document.createElement("img");
      lifeZero.setAttribute("id", "life");
      lifeZero.src = "images/life0.png";
      lifeOne.replaceWith(lifeZero);
      START_GAME = false;
      endMenu();
      return;
    }
    setTimeout(this.gameLoop, 20);
  };

  /////POKEMON CATCH///////////////
  isPokemonCatch = () => {
    let isCatch = false;
    this.enemies.forEach((enemy) => {
      this.pokeball.forEach((ball) => {
        if (
          ball.x < enemy.x + ENEMY_WIDTH &&
          ball.x + POKEBALL_WIDTH > enemy.x &&
          ball.y < enemy.y + ENEMY_HEIGHT &&
          POKEBALL_HEIGHT + ball.y > enemy.y
        ) {
          enemy.destroyed = true;
          ball.destroyed = true;
          isCatch = true;
        }
      });
    });

    return isCatch;
  };

  /////CANDY CATCH///////////////
  isCandyCatch = () => {
    let isCatch = false;
    this.candies.forEach((candy) => {
      this.pokeball.forEach((ball) => {
        if (
          ball.x < candy.x + CANDY_WIDTH &&
          ball.x + POKEBALL_WIDTH > candy.x &&
          ball.y < candy.y + CANDY_HEIGHT &&
          POKEBALL_HEIGHT + ball.y > candy.y
        ) {
          candy.destroyed = true;
          ball.destroyed = true;
          isCatch = true;
        }
      });
    });

    return isCatch;
  };

  /*
  
  
  METHOD OF CHARACTER LIVES FOR ENNEMIES 1


  */
  isPlayerDead = () => {
    /////ACTIVE BONUS//////
    if (BONUS_ACTIVE === true) {
      const lifeBonus = document.createElement("img");
      lifeBonus.setAttribute("id", "life");
      lifeBonus.src = "images/lifebonus.png";
      document.getElementById("life").replaceWith(lifeBonus);
      BONUS_ACTIVE === false;
      /////////////////////////////////////
      ///////METHOD 3 LIVES///////////////
    } else if (PLAYER_LIVES === 3) {
      this.enemies.forEach((enemy) => {
        if (
          this.player.x < enemy.x + ENEMY_WIDTH &&
          this.player.x + PLAYER_WIDTH > enemy.x &&
          this.player.y < enemy.y + ENEMY_HEIGHT &&
          PLAYER_HEIGHT + this.player.y > enemy.y
        ) {
          enemy.destroyed = true;
          setTimeout(() => {
            PLAYER_LIVES = 2;
            const lifeFull = document.getElementById("life");
            const lifeTwo = document.createElement("img");
            lifeTwo.setAttribute("id", "life");
            lifeTwo.src = "images/life2.png";
            lifeFull.replaceWith(lifeTwo);
          }, 900);
        }
      });
    }
    ////////////////////////////////////
    ///////METHOD 2 LIVES///////////////
    else if (PLAYER_LIVES === 2) {
      this.enemies.forEach((enemy) => {
        if (
          (this.player.x < enemy.x + ENEMY_WIDTH &&
            this.player.x + PLAYER_WIDTH > enemy.x &&
            this.player.y < enemy.y + ENEMY_HEIGHT &&
            PLAYER_HEIGHT + this.player.y > enemy.y) ||
          BONUS_ACTIVE === true
        ) {
          enemy.destroyed = true;
          setTimeout(() => {
            PLAYER_LIVES = 1;
            const lifeTwo = document.getElementById("life");
            const lifeOne = document.createElement("img");
            lifeOne.setAttribute("id", "life");
            lifeOne.src = "images/life1.png";
            lifeTwo.replaceWith(lifeOne);
          }, 900);
        }
      });
      ////////////////////////////////////
      ///////METHOD 1 LIFE///////////////
    } else if (PLAYER_LIVES === 1) {
      let isDead = false;
      this.enemies.forEach((enemy) => {
        if (
          this.player.x < enemy.x + ENEMY_WIDTH &&
          this.player.x + PLAYER_WIDTH > enemy.x &&
          this.player.y < enemy.y + ENEMY_HEIGHT &&
          PLAYER_HEIGHT + this.player.y > enemy.y
        ) {
          enemy.destroyed = true;
          isDead = true;
        }
      });
      return isDead;
    }
  };
  /*
  
  
  METHOD OF CHARACTER LIVES FOR ENNEMIES 2


  */
  isPlayerDead2 = () => {
    ///////METHOD 3 LIVES///////////////
    if (PLAYER_LIVES === 3) {
      this.enemies2.forEach((enemy) => {
        if (
          this.player.x < enemy.x + ENEMY2_WIDTH - 50 &&
          this.player.x + PLAYER_WIDTH > enemy.x &&
          this.player.y < enemy.y + ENEMY2_HEIGHT &&
          PLAYER_HEIGHT + this.player.y > enemy.y
        ) {
          enemy.destroyed = true;
          setTimeout(() => {
            PLAYER_LIVES = 2;
            const lifeFull = document.getElementById("life");
            const lifeTwo = document.createElement("img");
            lifeTwo.setAttribute("id", "life");
            lifeTwo.src = "images/life2.png";
            lifeFull.replaceWith(lifeTwo);
          }, 900);
        }
      });
    }
    ////////////////////////////////////
    ///////METHOD 2 LIVES///////////////
    else if (PLAYER_LIVES === 2) {
      this.enemies2.forEach((enemy) => {
        if (
          (this.player.x < enemy.x + ENEMY2_WIDTH - 50 &&
            this.player.x + PLAYER_WIDTH > enemy.x &&
            this.player.y < enemy.y + ENEMY2_HEIGHT &&
            PLAYER_HEIGHT + this.player.y > enemy.y) ||
          BONUS_ACTIVE === true
        ) {
          enemy.destroyed = true;
          setTimeout(() => {
            PLAYER_LIVES = 1;
            const lifeTwo = document.getElementById("life");
            const lifeOne = document.createElement("img");
            lifeOne.setAttribute("id", "life");
            lifeOne.src = "images/life1.png";
            lifeTwo.replaceWith(lifeOne);
          }, 900);
        }
      });
      ////////////////////////////////////
      ///////METHOD 1 LIFE///////////////
    } else if (PLAYER_LIVES === 1) {
      let isDead = false;
      this.enemies2.forEach((enemy) => {
        if (
          this.player.x < enemy.x + ENEMY2_WIDTH - 50 &&
          this.player.x + PLAYER_WIDTH > enemy.x &&
          this.player.y < enemy.y + ENEMY2_HEIGHT &&
          PLAYER_HEIGHT + this.player.y > enemy.y
        ) {
          enemy.destroyed = true;
          isDead = true;
        }
      });
      return isDead;
    }
  };
  //////THROW POKEBAL////////////////////////////
  throwPokeball() {
    this.pokeball.push(new Pokeball(this.root, this.player.x, this.player.y));
  }
  //////ENEMY 2 ATTACK//////////////
  throwEnemy2() {
    this.enemies2.push(new Enemy2(this.root, this.player.x, this.player.y));
  }
}
