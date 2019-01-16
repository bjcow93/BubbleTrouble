const MovingObject = require('./moving_object');
const Game = require('./game');
const Util = require('./util');
const Arrow = require('./arrow');
const Images = require('./images');


function MainChar(game) {
  this.extraLives = 2;
  this.width = 25;
  this.height = 37;
  this.game = game;
  this.pos = [this.game.DIM_X / 2, this.game.LOWER_BOUND - this.height];
  this.context = game.context;
  this.frame = 0;
  this.FRAME_LIMIT = 2;
};

MainChar.FRAME_LIMIT = 2;

MainChar.prototype.loseLife = function () {
  if (this.extraLives > 0) {
    this.extraLives--;
    this.game.resetLevel();
  } else {
    this.game.gameOver();
  }
};

  MainChar.prototype.move = function () {
    if (this.walkingLeft) {
      this.pos[0] += -5;
    } else if (this.walkingRight) {
      this.pos[0] += 5;
    }

    this.wrap(this.pos);
  };

  MainChar.prototype.draw = function () {
    if (this.walkingLeft) {
      this.walk("left");
    } else if (this.walkingRight) {
      this.walk("right");
    } else {
      this.stand();
    }
  };

  MainChar.prototype.stand = function () {
    this.drawMain(Images.charWalkUpright, 0);
  };

  MainChar.prototype.walk = function (direction) {
    if (direction == "left") {
      this.drawMain(Images.charWalkLeft, this.width * this.frame);
    } else {
      this.drawMain(Images.charWalkRight, this.width * this.frame);
    }
    this.frame = (this.frame + 1) % this.FRAME_LIMIT;
  };

  MainChar.prototype.drawMain = function (img, startX) {
    this.context.drawImage(
      img,
      startX,
      0,
      this.width,
      this.height,
      this.pos[0],
      this.pos[1],
      this.width,
      this.height);
  };

  MainChar.prototype.fireArrow = function () {
    if (this.game.arrows.length < 1) {
      this.game.addObject(new Arrow(this.pos, this.game));
    }
  };

  MainChar.prototype.collidedWith = function (other) {
    debugger
    return Util.RectCircleCollided(this, other);
  };

  MainChar.prototype.relocate = function () {
    this.pos[0] = Math.rand(this.game.DIM_X);
  };

  MainChar.prototype.wrap = function (pos) {
    pos[0] = Math.min(pos[0], this.game.RIGHT_BOUND - this.width);
    pos[0] = Math.max(pos[0], this.game.LEFT_BOUND);
    pos[1] = Math.min(pos[1], this.game.LOWER_BOUND);
    pos[1] = Math.max(pos[1], this.game.UPPER_BOUND);
  }

MainChar.prototype.handlePossibleCollision = function (other) {
}

module.exports = MainChar;