var outroSketch = function (sketch) {

  sketch.setup = function () {

    sketch.labelContainer = sketch.createDiv("");
    sketch.labelContainer.id("outroContainer");
    sketch.labelContainer.hide();
  }

  sketch.showOutro = function (text, x, y) {
    sketch.labelContainer.html(text);
    sketch.labelContainer.position(x, y);
    sketch.labelContainer.show();
  }

  sketch.hideOutro = function () {
    sketch.labelContainer.hide();
  }

  sketch.showLabel = function (text, x, y) {
    sketch.labelSpan.html(text);
    sketch.labelContainer.position(x - 350, y - 64);
    sketch.labelContainer.show();
    sketch.arrowCanvas.position(x - 110, y - 180);
    sketch.arrowCanvas.show();
  }

  sketch.hideLabel = function () {
    sketch.labelContainer.hide();
    sketch.arrowCanvas.hide();
  }

};