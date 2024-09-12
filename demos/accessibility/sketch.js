var accessibilitySketch = function (sketch) {
  // sketch.scaleFactor = 1.0;


  sketch.setup = function () {

    // sketch.colorMode(sketch.HSB, 100);    
    sketch.codePanel = sketch.createDiv("");
    sketch.codePanel.addClass("codePanel");
    sketch.codePanel.hide();
    sketch.mainCanvas = sketch.createCanvas(200, 200);
    sketch.mainCanvas.addClass('windowFrame');
  }

  sketch.draw = function () {
    sketch.background('pink');

    // Draw a heart.
    sketch.fill('red');
    sketch.noStroke();
    sketch.circle(167, 167, 20);
    sketch.circle(183, 167, 20);
    sketch.triangle(191, 173, 175, 195, 159, 173);

  }

  sketch.showCode = function (x, y) {
    let text = "describe('A pink square with a red heart <br /> \nin the bottom-right corner.')";
    sketch.codePanel.html(text);
    sketch.codePanel.position(x, y);
    sketch.codePanel.show();
    return sketch.codePanel;
  }

  sketch.hideCode = function () {
    sketch.codePanel.hide();
  }

};
