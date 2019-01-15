const Game = require("./game");


function MovingObject(pos, vel, r, color, game) {
    this.pos = pos;
    this.vel = vel;
    this.r = r;
    this.color = color;
    this.game = game;
  }

  MovingObject.prototype.draw = function (context) {
    this.context.beginPath();
    this.context.arc(this.pos[0], this.pos[1], this.r, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.lineWidth = 0.5;
    this.context.strokeStyle = 'black';
    this.context.stroke();
  }

  MovingObject.prototype.handlePossibleCollision = function (other) {
  }

  MovingObject.prototype.wrap = function (pos) {
    pos[0] = Math.min(pos[0], this.game.RIGHT_BOUND - this.width);
    pos[0] = Math.max(pos[0], this.game.LEFT_BOUND);
    pos[1] = Math.min(pos[1], this.game.LOWER_BOUND);
    pos[1] = Math.max(pos[1], this.game.UPPER_BOUND);
  }

module.exports = MovingObject;