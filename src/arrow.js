// const mainChar = require('./main_char')
const MovingObject = require('./moving_object');
const Game = require('./game');
const Util = require('./util');
const Images = require('./images');


function Arrow(pos, game) {
    this.width = 4;
    this.height = 368;
    this.pos = pos.slice(0);
    this.pos[0] += game.player1.width * .40;
    this.game = game;
    this.context = game.context;
    this.Y_DELTA = 10;
  }

  Arrow.Y_DELTA = 10;
  // Arrow.inherits(MovingObject);

  Arrow.prototype.move = function () {
    this.pos[1] -= this.Y_DELTA;

    if (this.pos[1] < this.game.UPPER_BOUND) {
      this.game.remove(this);
    }
  }

  Arrow.prototype.draw = function () {
    this.context.drawImage(
      Images.arrow,
      0,
      0,
      this.width,
      this.height,
      this.pos[0],
      this.pos[1],
      this.width,
      this.height);
  }

  Arrow.prototype.collidedWith = function (other) {
    return Util.RectCircleCollided(this, other);
  }

  Arrow.prototype.wrap = function (pos) {
    pos[0] = Math.min(pos[0], this.game.RIGHT_BOUND - this.width);
    pos[0] = Math.max(pos[0], this.game.LEFT_BOUND);
    pos[1] = Math.min(pos[1], this.game.LOWER_BOUND);
    pos[1] = Math.max(pos[1], this.game.UPPER_BOUND);
  }

Arrow.prototype.handlePossibleCollision = function (other) {
}


module.exports = Arrow;