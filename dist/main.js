/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrow.js":
/*!**********************!*\
  !*** ./src/arrow.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const mainChar = require('./main_char')\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Images = __webpack_require__(/*! ./images */ \"./src/images.js\");\n\n\nfunction Arrow(pos, game) {\n    this.width = 4;\n    this.height = 368;\n    this.pos = pos.slice(0);\n    this.pos[0] += game.player1.width * .40;\n    this.game = game;\n    this.context = game.context;\n    this.Y_DELTA = 10;\n  }\n\n  Arrow.Y_DELTA = 10;\n\n  Arrow.prototype.move = function () {\n    this.pos[1] -= this.Y_DELTA;\n\n    if (this.pos[1] < this.game.UPPER_BOUND) {\n      this.game.remove(this);\n    }\n  }\n\n  Arrow.prototype.draw = function () {\n    this.context.drawImage(\n      Images.arrow,\n      0,\n      0,\n      this.width,\n      this.height,\n      this.pos[0],\n      this.pos[1],\n      this.width,\n      this.height);\n  }\n\n  Arrow.prototype.collidedWith = function (other) {\n    return Util.RectCircleCollided(this, other);\n  }\n\n  Arrow.prototype.wrap = function (pos) {\n    pos[0] = Math.min(pos[0], this.game.RIGHT_BOUND - this.width);\n    pos[0] = Math.max(pos[0], this.game.LEFT_BOUND);\n    pos[1] = Math.min(pos[1], this.game.LOWER_BOUND);\n    pos[1] = Math.max(pos[1], this.game.UPPER_BOUND);\n  }\n\nArrow.prototype.handlePossibleCollision = function (other) {\n}\n\n\nmodule.exports = Arrow;\n\n//# sourceURL=webpack:///./src/arrow.js?");

/***/ }),

/***/ "./src/bubble.js":
/*!***********************!*\
  !*** ./src/bubble.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst MainChar = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\nconst Arrow = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nBubble.MIN_RADIUS = 6;\nBubble.GRAVITY = 0.6125;\nBubble.inherits(MovingObject);\n\nfunction Bubble(pos, vel, r, color, game) {\n    this.context = game.context;\n    MovingObject.call(this, pos, vel, r, color, game);\n    this.MIN_RADIUS = 6;\n    this.GRAVITY = 0.6125;\n  }\n\n  Bubble.prototype.move = function () {\n    this.vel[1] += Bubble.GRAVITY;\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.wrap(this.pos);\n  }\n\n  Bubble.prototype.wrap = function (pos) {\n    this.wrapY(pos);\n    this.wrapX(pos);\n  }\n\n  Bubble.prototype.wrapY = function (pos) {\n    if (pos[1] > this.game.LOWER_BOUND - this.r) {\n      pos[1] = this.game.LOWER_BOUND - this.r;\n      this.vel[1] *= -1;\n    }\n\n    if (pos[1] < this.game.UPPER_BOUND + this.r) {\n      this.game.remove(this);\n    }\n  }\n\n  Bubble.prototype.wrapX = function (pos) {\n    if (pos[0] < this.game.LEFT_BOUND + this.r) {\n      pos[0] = this.game.LEFT_BOUND + this.r;\n      this.vel[0] *= -1;\n    }\n\n    if (pos[0] > this.game.RIGHT_BOUND - this.r) {\n      pos[0] = this.game.RIGHT_BOUND - this.r;\n      this.vel[0] *= -1;\n    }\n  }\n\n  Bubble.prototype.handlePossibleCollision = function (other) {\n    if (!this.collidedWith(other)) return;\n    if (other.constructor.name == 'MainChar') {\n      this.game.remove(this);\n      other.loseLife();\n    } else if (other instanceof Arrow) {\n      this.game.remove(other);\n      this.pop();\n    }\n  }\n\n  Bubble.prototype.collidedWith = function (other) {\n    return Util.RectCircleCollided(other, this);\n  }\n\n  Bubble.prototype.pop = function () {\n    this.r > this.MIN_RADIUS ? this.split() : this.game.remove(this);\n  }\n\n  Bubble.prototype.split = function () {\n    var leftPos = this.pos.slice(0);\n    var rightPos = this.pos.slice(0);\n    this.game.addObject(new Bubble(leftPos, [-3.5, -12], this.r / 2, this.color, this.game));\n    this.game.addObject(new Bubble(rightPos, [3.5, -12], this.r / 2, this.color, this.game));\n    this.game.remove(this);\n  }\n\n\n\nmodule.exports = Bubble;\n\n//# sourceURL=webpack:///./src/bubble.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Images = __webpack_require__(/*! ./images */ \"./src/images.js\");\nconst MainChar = __webpack_require__(/*! ./main_char */ \"./src/main_char.js\");\nconst KeyBindings = __webpack_require__(/*! ./key_bindings */ \"./src/key_bindings.js\");\nconst Levels = __webpack_require__(/*! ./levels */ \"./src/levels.js\");\nconst Bubble = __webpack_require__(/*! ./bubble */ \"./src/bubble.js\");\nconst Arrow = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\n\nfunction Game(context) {\n  this.context = context;\n  this.backgroundImg = Images.level1;\n  this.level = 0;\n  this.arrows = [];\n  this.bubbles = [];\n  this.playing = true;\n  new KeyBindings(this).bindKeys();\n  this.DIM_X = 1000;\n  this.DIM_Y = 600;\n  this.FLOOR = 30;\n  this.WALL = 10;\n  this.UPPER_BOUND = 40;\n  this.LOWER_BOUND = this.DIM_Y - this.FLOOR;\n  this.LEFT_BOUND = this.WALL;\n  this.RIGHT_BOUND = this.DIM_X - this.WALL;\n  this.LEVEL_PAUSE_TIME = 1500;\n  this.player1 = new MainChar(this);\n  this.player2 = new MainChar(this);\n  };\n\n\n  Game.prototype.step = function () {\n    if (!this.playing) {\n      return;\n    }\n\n    if (this.finishedLevel()) {\n      this.startNextLevel();\n    } else {\n      this.moveObjects();\n      this.draw();\n      this.checkCollisions();\n    }\n  };\n\n  Game.prototype.finishedLevel = function () {\n    return this.bubbles.length < 1;\n  };\n\n  Game.prototype.resetLevel = function () {\n    this.arrows = [];\n    this.bubbles = [];\n    Levels.load(this.level, this);\n    \n    var that = this;\n    this.tempPause(this.LEVEL_PAUSE_TIME, function () {\n      that.draw();\n      that.displayLevel();\n    });\n  };\n\n  Game.prototype.startNextLevel = function () {\n    if (this.level + 1 > Levels.LAST_LEVEL) {\n      this.win();\n    } else {\n      var that = this;\n      this.tempPause(this.LEVEL_PAUSE_TIME, function () {\n        that.level++;\n        Levels.load(that.level, that);\n        that.draw();\n        that.displayLevel();\n      });\n    }\n  };\n\n  Game.prototype.tempPause = function (time, callback) {\n    this.playing = false;\n\n    if (callback) {\n      callback();\n    }\n\n    var that = this;\n    setTimeout(function () {\n      that.playing = true;\n    }, time);\n  };\n  \n  Game.prototype.moveObjects = function () {\n    this.allObjects().forEach(function (obj) {\n      obj.move();\n    });\n  };\n  \n  Game.prototype.checkCollisions = function () {\n    var allObjs = this.allObjects().slice(0);\n    allObjs.forEach(function (first) {\n      allObjs.forEach(function (second) {\n        if (first === second) return;\n        \n        first.handlePossibleCollision(second);\n      });\n    });\n  };\n  \n  Game.prototype.draw = function () {\n    var that = this;\n    this.drawBackground();\n    this.allObjects().forEach(function (obj) {\n      obj.draw(that.context);\n    });\n  };\n  \n  Game.prototype.allObjects = function () {\n    return [this.player1].concat(this.bubbles).concat(this.arrows);\n  };\n  \n  Game.prototype.addObject = function (obj) {\n    if (obj instanceof Bubble) {\n      this.bubbles.push(obj);\n    } else if (obj instanceof Arrow) {\n      this.arrows.push(obj);\n    }\n  };\n  \n  Game.prototype.addBubbles = function (options) {\n    var pos, vel, mult, col, bubble;\n    \n    for (var i = 0; i < options.NumOfBubbles; i++) {\n      pos = options.posArr[i];\n      vel = options.vels[i];\n      mult = options.bubbleMultiplier;\n      col = options.color;\n      this.addObject(new Bubble(pos, vel, this.makeRadius(mult), col, this));\n    }\n  };\n\n  Game.prototype.remove = function (obj) {\n    if (obj instanceof Bubble) {\n      this.bubbles.splice(this.bubbles.indexOf(obj), 1);\n    } else if (obj instanceof Arrow) {\n      this.arrows.splice(this.arrows.indexOf(obj), 1);\n    }\n  };\n  \n  Game.prototype.makeRadius = function (multiplier) {\n    return Bubble.MIN_RADIUS * Math.pow(2, multiplier);\n  };\n  \n  Game.prototype.drawBackground = function () {\n    this.context.drawImage(\n      this.backgroundImg,\n      0,\n      0,\n      this.DIM_X,\n      this.DIM_Y\n      );\n      this.drawFloorAndCeiling();\n      this.drawWalls();\n      this.drawLives();\n    };\n    \n  Game.prototype.drawLives = function () {\n    var lifeWidth = Images.life.width;\n    var startX = this.RIGHT_BOUND - lifeWidth * this.player1.extraLives;\n    \n    for (var i = 0; i < this.player1.extraLives; i++) {\n      this.context.drawImage(\n        Images.life,\n        startX,\n        this.UPPER_BOUND + 10\n        );\n        startX += lifeWidth;\n      }\n    };\n      \n  Game.prototype.drawFloorAndCeiling = function () {\n    this.context.fillStyle = this.context.createPattern(Images.floor, \"repeat\");\n    this.context.fillRect(0, this.LOWER_BOUND, this.DIM_X, this.DIM_Y);\n    \n    this.context.fillStyle = this.context.createPattern(Images.ceiling, \"repeat\");\n    this.context.fillRect(0, 0, this.DIM_X, this.UPPER_BOUND);\n  };\n\n  Game.prototype.drawWalls = function () {\n    this.drawWall(0);\n    this.drawWall(this.RIGHT_BOUND);\n  };\n\n  Game.prototype.drawWall = function (startX) {\n    this.context.drawImage(\n      Images.wall,\n      0,\n      0,\n      Images.wall.width,\n      Images.wall.height,\n      startX,\n      0,\n      this.WALL,\n      this.LOWER_BOUND\n    );\n  };\n  \n  Game.prototype.showMessage = function (txt) {\n    this.context.font = \"60px Apple Chancery\";\n    var txtWidth = this.context.measureText(txt).width;\n    this.context.fillText(txt, this.DIM_X / 2 - txtWidth / 2, this.DIM_Y * 0.25);\n  };\n  \n  Game.prototype.displayLevel = function () {\n    this.showMessage(\"Level \" + this.level);\n  };\n\n  Game.prototype.win = function () {\n    this.playing = false;\n\n    this.draw();\n    this.showMessage(\"You Win!\");\n  };\n\n  Game.prototype.gameOver = function () {\n    this.playing = false;\n    this.draw();\n    this.showMessage(\"You lost.\");\n  };\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function GameView(game) {\n    this.game = game;\n  };\n\n  GameView.FPS = 32;\n\n  GameView.prototype.start = function () {\n    var that = this;\n    setInterval(function () {\n      that.game.step();\n    }, 1000 / GameView.FPS);\n  };\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Images() {}\n\n  Images.makeImage = function (source) {\n    var img = new Image();\n    img.src = source;\n    return img;\n  }\n\n  Images.level1 = Images.makeImage(\"Images/level1.jpg\");\n  Images.level2 = Images.makeImage(\"Images/level2.jpg\");\n  Images.level3 = Images.makeImage(\"Images/level3.jpg\");\n  Images.level4 = Images.makeImage(\"Images/level4.jpg\");\n  Images.ceiling = Images.makeImage(\"Images/spikes.png\");\n  Images.floor = Images.makeImage(\"Images/floor.png\");\n  Images.wall = Images.makeImage(\"Images/wall2.png\");\n  Images.charWalkLeft = Images.makeImage(\"Images/mainWalkingLeft.png\");\n  Images.charWalkRight = Images.makeImage(\"Images/mainWalkingRight.png\");\n  Images.charWalkUpright = Images.makeImage(\"Images/mainUpright.png\");\n  Images.arrow = Images.makeImage(\"Images/arrow.png\");\n  Images.life = Images.makeImage(\"Images/heart.png\");\n\n\nmodule.exports = Images;\n\n//# sourceURL=webpack:///./src/images.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n\n  var ctx = canvasEl.getContext(\"2d\");\n  var game = new Game(ctx);\n  new GameView(game).start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/key_bindings.js":
/*!*****************************!*\
  !*** ./src/key_bindings.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function KeyBindings(game) {\n    this.game = game;\n  };\n\n  KeyBindings.prototype.bindKeys = function () {\n    var game = this.game;\n\n    window.addEventListener(\"keydown\", keyDown, false);\n    window.addEventListener(\"keyup\", keyUp, false);\n\n    function keyDown(e) {\n      if (e.keyCode == \"37\") {\n        game.player1.walkingLeft = true;\n      } else if (e.keyCode == \"39\") {\n        game.player1.walkingRight = true;\n      } else if (e.keyCode == \"32\") {\n        game.player1.fireArrow();\n      } else if (e.keyCode == \"80\") {\n        game.playing = !game.playing;\n      } else if (e.keyCode == \"65\") {\n        game.player2.walkingLeft = true;\n      } else if (e.keyCode == \"68\") {\n        game.player2.walkingLeft = true;\n      }\n    }\n\n    function keyUp(e) {\n      if (e.keyCode == \"37\") {\n        game.player1.walkingLeft = false;\n      } else if (e.keyCode == \"39\") {\n        game.player1.walkingRight = false;\n      } else if (e.keyCode == \"65\") {\n        game.player2.walkingLeft = false;\n      } else if (e.keyCode == \"68\") {\n        game.player2.walkingRight = false;\n      }\n    }\n  };\n\nmodule.exports = KeyBindings;\n\n//# sourceURL=webpack:///./src/key_bindings.js?");

/***/ }),

/***/ "./src/levels.js":
/*!***********************!*\
  !*** ./src/levels.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Images = __webpack_require__(/*! ./images */ \"./src/images.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction Levels() {};\n\n  Levels.LAST_LEVEL = 4;\n\n  Levels.load = function (level, game) {\n    var options = {};\n\n    switch (level) {\n      case 1:\n        this.levelOne(game, options);\n        break;\n      case 2:\n        this.levelTwo(game, options);\n        break;\n      case 3:\n        this.levelThree(game, options);\n        break;\n      case 4:\n        this.levelFour(game, options);\n        break;\n      default:\n        game.win();\n        break;\n    }\n  };\n\n  Levels.levelOne = function (game, options) {\n    game.backgroundImg = Images.level1;\n    options.NumOfBubbles = 1;\n    options.color = \"red\";\n    options.posArr = [\n      this.makePosition(game, 0.5, 0.5),\n      this.makePosition(game, 0.5, 0.5)\n    ];\n    options.vels = [[-5, 0], [5, 0]];\n    options.bubbleMultiplier = 1;\n    game.addBubbles(options);\n  };\n\n  Levels.levelTwo = function (game, options) {\n    game.backgroundImg = Images.level2;\n    options.NumOfBubbles = 3;\n    options.color = \"blue\";\n    options.posArr = [\n      this.makePosition(game, 0, 0.5),\n      this.makePosition(game, 1, 0.5),\n      this.makePosition(game, 0.5, 0.5)\n    ];\n    options.vels = [[5, 0], [-5, 0], [0, 0]];\n    options.bubbleMultiplier = 1;\n    game.addBubbles(options);\n  };\n\n  Levels.levelThree = function (game, options) {\n    game.backgroundImg = Images.level3;\n    options.NumOfBubbles = 2;\n    options.color = \"#69ef72\";\n    options.posArr = [\n      this.makePosition(game, 0, 0.75),\n      this.makePosition(game, 1, 0.75),\n    ];\n    options.vels = [[5, 0], [-5, 0]];\n    options.bubbleMultiplier = 0;\n    game.addBubbles(options);\n\n    options.NumOfBubbles = 2;\n    options.color = \"#d254bb\";\n    options.posArr = [\n      this.makePosition(game, 0, 0.25),\n      this.makePosition(game, 1, 0.25),\n    ];\n    options.vels = [[5, 0], [-5, 0]];\n    options.bubbleMultiplier = 2;\n    game.addBubbles(options);\n  };\n\n  Levels.levelFour = function (game, options) {\n    game.backgroundImg = Images.level4;\n    options.NumOfBubbles = 5;\n    options.color = \"#005247\";\n    options.posArr = [\n      this.makePosition(game, 0.2, 0.2),\n      this.makePosition(game, 0.4, 0.4),\n      this.makePosition(game, 0.6, 0.6),\n      this.makePosition(game, 0.8, 0.8),\n      this.makePosition(game, 1, 1)\n    ];\n    options.vels = [[5, 0], [5, 0], [5, 0], [5, 0], [5, 0]];\n    options.bubbleMultiplier = 1;\n    game.addBubbles(options);\n  };\n\n  Levels.makeRandomPosition = function () {\n    return [Math.rand(Game.DIM_X), Game.DIM_Y / 2];\n  };\n\n  Levels.makePosition = function (game, xPercent, yPercent) {\n    return [\n      game.DIM_X * xPercent,\n      game.DIM_Y * yPercent\n    ];\n  };\n\n\nmodule.exports = Levels;\n\n\n//# sourceURL=webpack:///./src/levels.js?");

/***/ }),

/***/ "./src/main_char.js":
/*!**************************!*\
  !*** ./src/main_char.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Arrow = __webpack_require__(/*! ./arrow */ \"./src/arrow.js\");\nconst Images = __webpack_require__(/*! ./images */ \"./src/images.js\");\n\n\nfunction MainChar(game) {\n  this.extraLives = 2;\n  this.width = 25;\n  this.height = 37;\n  this.game = game;\n  this.pos = [this.game.DIM_X / 2, this.game.LOWER_BOUND - this.height];\n  this.context = game.context;\n  this.frame = 0;\n  this.FRAME_LIMIT = 2;\n};\n\nMainChar.FRAME_LIMIT = 2;\n\nMainChar.prototype.loseLife = function () {\n  if (this.extraLives > 0) {\n    this.extraLives--;\n    this.game.resetLevel();\n  } else {\n    this.game.gameOver();\n  }\n};\n\n  MainChar.prototype.move = function () {\n    if (this.walkingLeft) {\n      this.pos[0] += -5;\n    } else if (this.walkingRight) {\n      this.pos[0] += 5;\n    }\n\n    this.wrap(this.pos);\n  };\n\n  MainChar.prototype.draw = function () {\n    if (this.walkingLeft) {\n      this.walk(\"left\");\n    } else if (this.walkingRight) {\n      this.walk(\"right\");\n    } else {\n      this.stand();\n    }\n  };\n\n  MainChar.prototype.stand = function () {\n    this.drawMain(Images.charWalkUpright, 0);\n  };\n\n  MainChar.prototype.walk = function (direction) {\n    if (direction == \"left\") {\n      this.drawMain(Images.charWalkLeft, this.width * this.frame);\n    } else {\n      this.drawMain(Images.charWalkRight, this.width * this.frame);\n    }\n    this.frame = (this.frame + 1) % this.FRAME_LIMIT;\n  };\n\n  MainChar.prototype.drawMain = function (img, startX) {\n    this.context.drawImage(\n      img,\n      startX,\n      0,\n      this.width,\n      this.height,\n      this.pos[0],\n      this.pos[1],\n      this.width,\n      this.height);\n  };\n\n  MainChar.prototype.fireArrow = function () {\n    if (this.game.arrows.length < 1) {\n      this.game.addObject(new Arrow(this.pos, this.game));\n    }\n  };\n\n  MainChar.prototype.collidedWith = function (other) {\n    debugger\n    return Util.RectCircleCollided(this, other);\n  };\n\n  MainChar.prototype.relocate = function () {\n    this.pos[0] = Math.rand(this.game.DIM_X);\n  };\n\n  MainChar.prototype.wrap = function (pos) {\n    pos[0] = Math.min(pos[0], this.game.RIGHT_BOUND - this.width);\n    pos[0] = Math.max(pos[0], this.game.LEFT_BOUND);\n    pos[1] = Math.min(pos[1], this.game.LOWER_BOUND);\n    pos[1] = Math.max(pos[1], this.game.UPPER_BOUND);\n  }\n\nMainChar.prototype.handlePossibleCollision = function (other) {\n}\n\nmodule.exports = MainChar;\n\n//# sourceURL=webpack:///./src/main_char.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction MovingObject(pos, vel, r, color, game) {\n    this.pos = pos;\n    this.vel = vel;\n    this.r = r;\n    this.color = color;\n    this.game = game;\n  }\n\n  MovingObject.prototype.draw = function (context) {\n    this.context.beginPath();\n    this.context.arc(this.pos[0], this.pos[1], this.r, 0, 2 * Math.PI, false);\n    this.context.fillStyle = this.color;\n    this.context.fill();\n    this.context.lineWidth = 0.5;\n    this.context.strokeStyle = 'black';\n    this.context.stroke();\n  }\n\n  MovingObject.prototype.handlePossibleCollision = function (other) {\n  }\n\n  MovingObject.prototype.wrap = function (pos) {\n    pos[0] = Math.min(pos[0], this.game.RIGHT_BOUND - this.width);\n    pos[0] = Math.max(pos[0], this.game.LEFT_BOUND);\n    pos[1] = Math.min(pos[1], this.game.LOWER_BOUND);\n    pos[1] = Math.max(pos[1], this.game.UPPER_BOUND);\n  }\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var Util = {}\n\n  // Util.randomVec = function (length) {\n  //   var x = Math.random() * length;\n  //   var y = Math.random() * length;\n  //   return [x, y];\n  // };\n\n  Util.dir = function (vec) {\n    var norm = Util.norm(vec);\n    return this.scale(vec, 1 / norm);\n  };\n\n  Util.dist = function (pos1, pos2) {\n    return Math.sqrt(\n      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\n    );\n  };\n\n  Util.norm = function (vec) {\n    return Util.dist([0, 0], vec);\n  };\n\n  Util.randomVec = function (length) {\n    var deg = 2 * Math.PI * Math.random();\n\n    return this.scale([Math.sin(deg), Math.cos(deg)], length);\n  };\n\n  Util.scale = function (vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  };\n\n  Util.RectCircleCollided = function (rect, circle) {\n    var distX = Math.abs(circle.pos[0] - rect.pos[0] - rect.width / 2);\n    var distY = Math.abs(circle.pos[1] - rect.pos[1] - rect.height / 2);\n\n    if (distX > (rect.width / 2 + circle.r)) { return false; }\n    if (distY > (rect.height / 2 + circle.r)) { return false; }\n\n    if (distX <= (rect.width / 2)) { return true; }\n    if (distY <= (rect.height / 2)) { return true; }\n\n    var dx = distX - rect.width / 2;\n    var dy = distY - rect.height / 2;\n    return (dx * dx + dy * dy <= (circle.r * circle.r));\n  }\n\n  Math.rand = function (range) {\n    return Math.round(Math.random() * range);\n  }\n\n  Function.prototype.inherits = function (ParentClass) {\n    function Surrogate() { };\n    Surrogate.prototype = ParentClass.prototype;\n    this.prototype = new Surrogate();\n  };\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });