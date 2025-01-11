var introSketch = function (sketch) {

  sketch.setup = function () {

    sketch._pixelDensity = 1;

    sketch.arrowCanvas = sketch.createGraphics(100, 100);
    sketch.arrowCanvas.noFill();
    sketch.arrowCanvas.stroke('#F1678E');
    sketch.arrowCanvas.strokeWeight(3);
    sketch.arrowCanvas.arc(58, 58, 100, 100, sketch.PI, sketch.PI + sketch.HALF_PI);


    sketch.labelContainer = sketch.createDiv("");
    sketch.labelContainer.id("labelContainer");
    sketch.labelSpan = sketch.createSpan("Label");
    sketch.labelSpan.id("labelSpan");
    sketch.labelSpan.parent("labelContainer");
    sketch.labelContainer.hide();

    sketch.logo = sketch.createImg("/assets/p5js-rect.svg");
    sketch.logo.id('introLogo');
    sketch.logo.size(200);
    sketch.logo.hide();

    sketch.bulletList = [];
    sketch.bullets = sketch.createDiv("");
    sketch.bullets.id("bullets");
    sketch.bullets.hide();
    sketch.bulletTime = 0;

    sketch.examples = [];
    sketch.exampleDiv = sketch.createDiv("");
    sketch.exampleDiv.id("examples");
    sketch.exampleDiv.hide();


  }

  sketch.draw = function () {

    if (sketch.bulletList.length > 0) {
      if (sketch.bulletTime < sketch.millis()) {
        var newBullet = sketch.bulletList.shift();
        var asteriskSvg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 28 28" enable-background="new 0 0 28 28" xml:space="preserve"><path fill="#ED225D" stroke="#ED225D" stroke-miterlimit="10" d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"/></svg>'
        var newBulletDiv = sketch.createDiv(asteriskSvg + '<span style="margin-left:20px" ><span>' + newBullet);
        newBulletDiv.parent("bullets");

        sketch.bulletTime = sketch.millis() + 1100;
      }
    }

    for (var i = 0; i < sketch.examples.length; i++) {
      var example = sketch.examples[i];
      var text = example.exampleText.substring(0, sketch.floor(example.letterIndex));
      example.exampleDiv.html(text);

      if (sketch.millis() > example.nextLetterTime) {
        example.letterIndex++;
        example.nextLetterTime = sketch.millis() + 40;
      }
    }

  }

  sketch.Example = function (text, div) {
    this.exampleText = text;
    this.exampleDiv = div;
    this.letterIndex = 0;
    this.nextLetterTime = 0;
  }

  sketch.showLogo = function (x, y) {
    sketch.logo.position(x, y);
    sketch.logo.show();
  }

  sketch.hideLogo = function () {
    sketch.logo.hide();
  }

  sketch.showBullets = function (bullets, x, y) {
    sketch.bullets.position(x, y);
    sketch.bullets.show();
    sketch.bulletList = bullets;
  }

  sketch.hideBullets = function () {
    sketch.bullets.hide();
    //reset bullet list
    sketch.bulletList = [];
    sketch.bulletTime = 0;
    sketch.bullets.elt.innerHTML = ""
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

  sketch.showExample = function (text, x, y) {
    sketch.exampleDiv.show();

    var div = sketch.createDiv("");
    div.parent("examples");
    div.addClass("exampleText");
    div.position(x, y);

    sketch.examples.push(new sketch.Example(text, div));
  }

  sketch.hideExamples = function () {
    //document.getElementById("console").innerText = "A";

    sketch.exampleDiv.hide();

    //document.getElementById("console").innerText = "B";

  }
};