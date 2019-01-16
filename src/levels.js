const Images = require('./images');
const Game = require("./game");

function Levels() {};

  Levels.LAST_LEVEL = 4;

  Levels.load = function (level, game) {
    var options = {};

    switch (level) {
      case 1:
        this.levelOne(game, options);
        break;
      case 2:
        this.levelTwo(game, options);
        break;
      case 3:
        this.levelThree(game, options);
        break;
      case 4:
        this.levelFour(game, options);
        break;
      default:
        game.win();
        break;
    }
  };

  Levels.levelOne = function (game, options) {
    game.backgroundImg = Images.level1;
    options.NumOfBubbles = 1;
    options.color = "red";
    options.posArr = [
      this.makePosition(game, 0.5, 0.5),
      this.makePosition(game, 0.5, 0.5)
    ];
    options.vels = [[-5, 0], [5, 0]];
    options.bubbleMultiplier = 1;
    game.addBubbles(options);
  };

  Levels.levelTwo = function (game, options) {
    game.backgroundImg = Images.level2;
    options.NumOfBubbles = 3;
    options.color = "blue";
    options.posArr = [
      this.makePosition(game, 0, 0.5),
      this.makePosition(game, 1, 0.5),
      this.makePosition(game, 0.5, 0.5)
    ];
    options.vels = [[5, 0], [-5, 0], [0, 0]];
    options.bubbleMultiplier = 1;
    game.addBubbles(options);
  };

  Levels.levelThree = function (game, options) {
    game.backgroundImg = Images.level3;
    options.NumOfBubbles = 2;
    options.color = "#69ef72";
    options.posArr = [
      this.makePosition(game, 0, 0.75),
      this.makePosition(game, 1, 0.75),
    ];
    options.vels = [[5, 0], [-5, 0]];
    options.bubbleMultiplier = 0;
    game.addBubbles(options);

    options.NumOfBubbles = 2;
    options.color = "#d254bb";
    options.posArr = [
      this.makePosition(game, 0, 0.25),
      this.makePosition(game, 1, 0.25),
    ];
    options.vels = [[5, 0], [-5, 0]];
    options.bubbleMultiplier = 2;
    game.addBubbles(options);
  };

  Levels.levelFour = function (game, options) {
    game.backgroundImg = Images.level4;
    options.NumOfBubbles = 5;
    options.color = "#005247";
    options.posArr = [
      this.makePosition(game, 0.2, 0.2),
      this.makePosition(game, 0.4, 0.4),
      this.makePosition(game, 0.6, 0.6),
      this.makePosition(game, 0.8, 0.8),
      this.makePosition(game, 1, 1)
    ];
    options.vels = [[5, 0], [5, 0], [5, 0], [5, 0], [5, 0]];
    options.bubbleMultiplier = 1;
    game.addBubbles(options);
  };

  Levels.makeRandomPosition = function () {
    return [Math.rand(Game.DIM_X), Game.DIM_Y / 2];
  };

  Levels.makePosition = function (game, xPercent, yPercent) {
    return [
      game.DIM_X * xPercent,
      game.DIM_Y * yPercent
    ];
  };


module.exports = Levels;
