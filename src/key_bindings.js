function KeyBindings(game) {
    this.game = game;
  };

  KeyBindings.prototype.bindKeys = function () {
    var game = this.game;

    window.addEventListener("keydown", keyDown, false);
    window.addEventListener("keyup", keyUp, false);

    function keyDown(e) {
      if (e.keyCode == "37") {
        game.player1.walkingLeft = true;
      } else if (e.keyCode == "39") {
        game.player1.walkingRight = true;
      } else if (e.keyCode == "32") {
        game.player1.fireArrow();
      } else if (e.keyCode == "80") {
        game.playing = !game.playing;
        if (game.playing) {
          $(".directions").hide();
        } else {
          $(".directions").show();
        }
      } else if (e.keyCode == "65") {
        game.player2.walkingLeft = true;
      } else if (e.keyCode == "68") {
        game.player2.walkingLeft = true;
      }
    }

    function keyUp(e) {
      if (e.keyCode == "37") {
        game.player1.walkingLeft = false;
      } else if (e.keyCode == "39") {
        game.player1.walkingRight = false;
      } else if (e.keyCode == "65") {
        game.player2.walkingLeft = false;
      } else if (e.keyCode == "68") {
        game.player2.walkingRight = false;
      }
    }
  };

module.exports = KeyBindings;