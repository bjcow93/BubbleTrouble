function Images() {}

  Images.makeImage = function (source) {
    var img = new Image();
    img.src = source;
    return img;
  }

  Images.level1 = Images.makeImage("Images/level1.jpg");
  Images.level2 = Images.makeImage("Images/level2.jpg");
  Images.level3 = Images.makeImage("Images/level3.jpg");
  Images.level4 = Images.makeImage("Images/level4.jpg");
  Images.ceiling = Images.makeImage("Images/spikes.png");
  Images.floor = Images.makeImage("Images/floor.png");
  Images.wall = Images.makeImage("Images/wall2.png");
  Images.charWalkLeft = Images.makeImage("Images/mainWalkingLeft.png");
  Images.charWalkRight = Images.makeImage("Images/mainWalkingRight.png");
  Images.charWalkUpright = Images.makeImage("Images/mainUpright.png");
  Images.arrow = Images.makeImage("Images/arrow.png");
  Images.life = Images.makeImage("Images/heart.png");


module.exports = Images;