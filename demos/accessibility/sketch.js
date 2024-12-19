var accessibilitySketch = function (sketch) {
  // sketch.scaleFactor = 1.0;


  sketch.setup = function () {

    // sketch.colorMode(sketch.HSB, 100);    

    sketch.mainCanvas = sketch.createCanvas(720, 720);
    sketch.mainCanvas.addClass('windowFrame');

    sketch.instructionPanel = sketch.createDiv("");
    sketch.instructionPanel.addClass("instructionPanel");
    sketch.instructionPanel.hide();
  }

  sketch.draw = function () {
    sketch.background('pink');

    // Draw a heart.
    sketch.fill('red');
    sketch.noStroke();
    sketch.circle(608, 624, 40);
    sketch.circle(640, 624, 40);
    sketch.triangle(590, 633, 658, 633, 624, 680);

  }

  //instructions
  sketch.showInstruction = function (text, x, y) {
    sketch.instructionPanel.html(text);
    sketch.instructionPanel.position(x, y);
    sketch.instructionPanel.show();

    return sketch.instructionPanel;
  }

  sketch.hideInstruction = function () {
    sketch.instructionPanel.hide();
  }

};
