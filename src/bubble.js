const MovingObject = require('./moving_object');
const Game = require('./game');
const MainChar = require('./arrow');
const Arrow = require('./arrow');
const Util = require('./util');

Bubble.MIN_RADIUS = 6;
Bubble.GRAVITY = 0.6125;
Bubble.inherits(MovingObject);

function Bubble(pos, vel, r, color, game) {
    this.context = game.context;
    MovingObject.call(this, pos, vel, r, color, game);
    this.MIN_RADIUS = 6;
    this.GRAVITY = 0.6125;
  }

  Bubble.prototype.move = function () {
    this.vel[1] += Bubble.GRAVITY;
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.wrap(this.pos);
  }

  Bubble.prototype.wrap = function (pos) {
    this.wrapY(pos);
    this.wrapX(pos);
  }

  Bubble.prototype.wrapY = function (pos) {
    if (pos[1] > this.game.LOWER_BOUND - this.r) {
      pos[1] = this.game.LOWER_BOUND - this.r;
      this.vel[1] *= -1;
    }

    if (pos[1] < this.game.UPPER_BOUND + this.r) {
      this.game.remove(this);
    }
  }

  Bubble.prototype.wrapX = function (pos) {
    if (pos[0] < this.game.LEFT_BOUND + this.r) {
      pos[0] = this.game.LEFT_BOUND + this.r;
      this.vel[0] *= -1;
    }

    if (pos[0] > this.game.RIGHT_BOUND - this.r) {
      pos[0] = this.game.RIGHT_BOUND - this.r;
      this.vel[0] *= -1;
    }
  }

  Bubble.prototype.handlePossibleCollision = function (other) {
    if (!this.collidedWith(other)) return;
    if (other.constructor.name == 'MainChar') {
      this.game.remove(this);
      other.loseLife();
    } else if (other instanceof Arrow) {
      this.game.remove(other);
      this.pop();
    }
  }

  Bubble.prototype.collidedWith = function (other) {
    return Util.RectCircleCollided(other, this);
  }

  Bubble.prototype.pop = function () {
    this.r > this.MIN_RADIUS ? this.split() : this.game.remove(this);
  }

  Bubble.prototype.split = function () {
    var leftPos = this.pos.slice(0);
    var rightPos = this.pos.slice(0);
    this.game.addObject(new Bubble(leftPos, [-3.5, -12], this.r / 2, this.color, this.game));
    this.game.addObject(new Bubble(rightPos, [3.5, -12], this.r / 2, this.color, this.game));
    this.game.remove(this);
  }



module.exports = Bubble;