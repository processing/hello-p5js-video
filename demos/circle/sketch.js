var circleSketch = function (sketch) {

  sketch.setup = function () {
    sketch._pixelDensity = 1;

    sketch.mainCanvas = sketch.createCanvas(720, 720);
    sketch.mainCanvas.addClass("windowFrame");

    sketch.colorMode(sketch.HSB, 100);
    sketch.hue = 12;
    sketch.mode = "circle";


    sketch.circleRadius = 300;
    sketch.circleStrokeWeight = 2;
    sketch.circleX = sketch.width / 2;
    sketch.circleY = sketch.height / 2;
    sketch.circleStartHue = 0;
    sketch.circleEndHue = sketch.hue;
    sketch.rectMode(sketch.CENTER);


    sketch.following = false;
    sketch.painting = false;

    sketch.instructionPanel = sketch.createDiv("");
    sketch.instructionPanel.addClass("instructionPanel");
    sketch.instructionPanel.hide();

    sketch.mainCanvas.mousePressed(
      function () {
        sketch.hue = sketch.random(100);
      });


  };

  sketch.draw = function () {
    if (!sketch.painting) {
      sketch.clear();
    }


    if (sketch.following) {
      sketch.circleY = sketch.mouseY;
      sketch.circleX = sketch.mouseX;
    }

    sketch.strokeWeight(sketch.circleStrokeWeight);
    sketch.stroke(sketch.hue, 100, 100);
    sketch.fill(sketch.hue, 100, 100, 80);

    switch (sketch.mode) {
      case "circle":
        sketch.ellipse(sketch.circleX, sketch.circleY, sketch.circleRadius, sketch.circleRadius);
        break;
      case "square":
        sketch.rect(sketch.circleX, sketch.circleY, sketch.circleRadius, sketch.circleRadius);
        break;
      case "triangle":
        var r = 180;
        var c = {
          x: 0,
          y: -r
        }
        var b = {
          x: c.x * Math.cos(Math.PI * 2 / 3) - (c.y * Math.sin(Math.PI * 2 / 3)),
          y: c.x * Math.sin(Math.PI * 2 / 3) + (c.y * Math.cos(Math.PI * 2 / 3))
        }
        var a = {
          x: c.x * Math.cos(Math.PI * 4 / 3) - (c.y * Math.sin(Math.PI * 4 / 3)),
          y: c.x * Math.sin(Math.PI * 4 / 3) + (c.y * Math.cos(Math.PI * 4 / 3))
        }

        sketch.translate(sketch.width / 2, sketch.width / 2)
        sketch.triangle(a.x, a.y, b.x, b.y, c.x, c.y);
        break;
      case "flower":

        sketch.translate(sketch.width / 2, sketch.width / 2);

        for (var i = 0; i < 10; i++) {
          sketch.ellipse(0, 30, 40, 225);
          sketch.rotate(Math.PI / 5);
        }

        break;
    }
  }

  sketch.animateFollow = function () {
    sketch.following = true;
  }

  sketch.animatePaint = function () {
    sketch.painting = true;
  }

  sketch.showLabel = function (text, x, y) {
    sketch.labelSpan.html(text);
    sketch.labelContainer.position(x - 350, y - 64);
    sketch.labelContainer.show();
    sketch.arrowCanvas.position(x - 110, y - 180);
    sketch.arrowCanvas.show();

    return sketch.labelContainer;
  }

  sketch.hideLabel = function () {
    sketch.labelContainer.hide();
    sketch.arrowCanvas.hide();
  }


  sketch.showInstruction = function (text, x, y) {
    sketch.instructionPanel.html(text);
    sketch.instructionPanel.position(x, y);
    sketch.instructionPanel.show();

    return sketch.instructionPanel;
  }

  sketch.hideInstruction = function () {
    sketch.instructionPanel.hide();
  }


  return sketch;
};