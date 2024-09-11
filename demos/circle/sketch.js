var circleSketch = function (sketch) {

  sketch.setup = function () {
    sketch._pixelDensity = 1;

    sketch.mainCanvas = sketch.createCanvas(360, 360);
    sketch.mainCanvas.addClass("windowFrame");

    sketch.colorMode(sketch.HSB, 100);
    sketch.hue = 12;
    sketch.mode = "circle";


    sketch.circleRadius = 148;
    sketch.circleStrokeWeight = 2;
    sketch.circleX = sketch.width / 2;
    sketch.circleY = sketch.height / 2;
    sketch.circleStartHue = 0;
    sketch.circleEndHue = sketch.hue;
    sketch.rectMode(sketch.CENTER);


    sketch.following = false;
    sketch.painting = false;

    sketch.codePanel = sketch.createDiv("");
    sketch.codePanel.addClass("codePanel");
    sketch.codePanel.hide();

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
        var r = 74;
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
          sketch.ellipse(0, 30, 20, 80);
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
  }

  sketch.hideLabel = function () {
    sketch.labelContainer.hide();
    sketch.arrowCanvas.hide();
  }


  sketch.showCode = function (text, x, y) {
    sketch.codePanel.html(text);
    sketch.codePanel.position(x, y);
    sketch.codePanel.show();

    return sketch.codePanel;
  }

  sketch.hideCode = function () {
    sketch.codePanel.hide();
  }


  return sketch;
};