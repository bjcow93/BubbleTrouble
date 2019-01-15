function KeyBindings(game) {
    this.game = game;
  };

  KeyBindings.prototype.bindKeys = function () {
    var game = this.game;

    // $(".restart").on("click", game.restartGame.bind(game));
    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("keyup", keyUp, false);

    function keyDown(e) {
      // left arrow or 'a'
      if (e.keyCode == "37" || e.keyCode == "65") {
        game.player1.walkingLeft = true;
      } // right arrow or 'd'
      else if (e.keyCode == "39" || e.keyCode == "68") {
        game.player1.walkingRight = true;
      } // spacebar
      else if (e.keyCode == "32") {
        game.player1.fireArrow();
      }
      else if (e.keyCode == "80") {
        game.playing = !game.playing;
      }
    }

    function keyUp(e) {
      if (e.keyCode == "37" || e.keyCode == "65") {
        game.player1.walkingLeft = false;
      } else if (e.keyCode == "39" || e.keyCode == "68") {
        game.player1.walkingRight = false;
      }
    }
  };

module.exports = KeyBindings;