var accessibilitySketch = function (sketch) {
  // sketch.scaleFactor = 1.0;


  sketch.setup = function () {

    // sketch.colorMode(sketch.HSB, 100);    
    sketch.codePanel = sketch.createDiv("");
    sketch.codePanel.addClass("codePanel");
    sketch.codePanel.hide();

    sketch.createCanvas(100, 100);
  }

  sketch.draw = function () {
    sketch.background('pink');

    // Draw a heart.
    sketch.fill('red');
    sketch.noStroke();
    sketch.circle(67, 67, 20);
    sketch.circle(83, 67, 20);
    sketch.triangle(91, 73, 75, 95, 59, 73);

  }

  sketch.showCode = function (x, y) {
    let text = "describe('A pink square with a red heart in the bottom-right corner.')";
    sketch.codePanel.html(text);
    sketch.codePanel.position(x, y);
    sketch.codePanel.show();
    return sketch.codePanel;
  }

  sketch.hideCode = function () {
    sketch.codePanel.hide();
  }
};
