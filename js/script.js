var script = {
  popcorn: null,
  init: function () {

    var pop = Popcorn.smart("#videoClip", ["assets/p5-video-draft-1.webm", "assets/p5-video-draft-1.mp4"], { width: 1920, height: 1080 });
    pop.autoplay(false);

    pop.on("canplayall", function (e) {
      main.prepareVideo();
    });

    pop.on("play", function (e) {
      $("#pauseButton").addClass("fa-pause");
      $("#pauseButton").removeClass("fa-play");
    });

    pop.on("pause", function (e) {
      $("#pauseButton").removeClass("fa-pause");
      $("#pauseButton").addClass("fa-play");
    });

    pop.on("timeupdate", function (e) {
      var position = pop.currentTime() / pop.duration();
      var width = position * $("#main").width();
      $("#progress").css('width', width);
    });

    /**
     * Script
     */

    // Q intro

    pop.code({
      start: 1,
      onStart: function (options) {

        var position = main.getRelativePosition({ left: -177.5, top: 463 });
        main.sketch = new p5(introSketch, "sketchCanvas");
        main.sketch.showLabel("Qianqian Ye, p5.js Project Lead", position.left, position.top);
      }
    });

    pop.code({
      start: 6,
      onStart: function (options) {
        main.sketch.hideLabel();
        main.sketch.showLogo(288, 272);
      }
    });

    pop.code({
      start: 8,
      onStart: function (options) {
        main.sketch.hideLogo();
        var bullets = [
          "Learn to code",
          "Make art",
          "Free to Download",
          "Open Source"
        ]
        main.sketch.showBullets(bullets, 150, 250);
      }
    });

    pop.code({
      start: 14.946752,
      onStart: function (options) {
        main.sketch.hideBullets();
      }
    });


    pop.code({
      start: 31,
      onStart: function (options) {
        main.sketch.showExample("// DRAWING SHAPES", 200, 275);
      }
    });

    pop.code({
      start: 31.3,
      onStart: function (options) {
        main.sketch.showExample("// CREATING ELEMENTS", 200, 325);
      }
    });

    pop.code({
      start: 31.6,
      onStart: function (options) {
        main.sketch.showExample("// MOUSE INTERACTION", 200, 375);
      }
    });

    pop.code({
      start: 31.9,
      onStart: function (options) {
        main.sketch.showExample("// SIMPLE ANIMATIONS", 1250, 275);
      }
    });

    pop.code({
      start: 32.2,
      onStart: function (options) {
        main.sketch.showExample("// GENERATING SOUND", 1250, 325);
      }
    });

    pop.code({
      start: 32.5,
      onStart: function (options) {
        main.sketch.showExample("// 3D & WEBGL", 1250, 375);
      }
    });

    pop.code({
      start: 38.5,
      onStart: function (options) {
        main.sketch.hideExamples();

      }
    });


    // Shiffman

    pop.code({
      start: 40,
      onStart: function (options) {

        var position = main.getRelativePosition({ left: -177.5, top: 540 });
        main.sketch.showLabel("Dan Shiffman", position.left, position.top);
      }
    });

    pop.code({
      start: 43,
      onStart: function (options) {
        main.sketch.hideLabel();
      }
    });

    pop.code({
      start: 44,
      onStart: function (options) {
        main.sketch.remove();
      }
    });


    // Circle Sketch

    pop.code({
      start: 45.11,
      onStart: function (options) {
        main.sketch = new p5(circleSketch, "sketchCanvas");
      }
    });

    pop.code({
      start: 49.15,
      onStart: function (options) {
        main.sketch.mode = "triangle";
      }
    });

    pop.code({
      start: 50.18,
      onStart: function (options) {
        main.sketch.mode = "square";
      }
    });

    pop.code({
      start: 52.23,
      onStart: function (options) {
        main.sketch.mode = "flower";
      }
    });

    pop.code({
      start: 56,
      onStart: function (options) {
        main.sketch.mode = "circle";
      }
    });

    // Show Code

    // pop.code({
    //   start: 57,
    //   onStart: function (options) {
    //     var position = main.getRelativePosition({ left: -840, top: 540 });
    //     var panel = main.sketch.showCode("// ellipse(80, 80, 148, 148);", position.left, position.top);
    //     panel.parent('sketchOverlay');
    //   }
    // });

    // pop.code({
    //   start: 67,
    //   onStart: function (options) {
    //     main.sketch.hideCode();
    //   }
    // });

    pop.code({
      start: 68,
      onStart: function (options) {
        main.sketch.animateFollow();
      }
    })

    pop.code({
      start: 75,
      onStart: function (options) {
        main.sketch.animatePaint();
      }
    });


    //Tuan - flocking
    pop.code({
      start: 82,
      onStart: function (options) {
        main.sketch.remove();
      }
    })

    pop.code({
      start: 87,
      onStart: function (options) {
        main.sketch = new p5(flockingSketch, "sketchCanvas");
        main.sketch.scaleFactor = main.scaleFactor;
      }
    })

    pop.code({
      start: 95,
      onStart: function (options) {
        main.sketch.startRandomWalk();
      }
    });

    pop.code({
      start: 98.9,
      onStart: function (options) {
        main.sketch.stopRandomWalk();
      }
    });

    pop.code({
      start: 99.0,
      onStart: function (options) {
        main.sketch.startFlocking();
      }
    });


    pop.code({
      start: 109,
      onStart: function (options) {
        $("#sketchCanvas").fadeOut(1000);
      }
    });


    pop.code({
      start: 110,
      onStart: function (options) {
        main.sketch.stopFlocking();
      }
    });

    pop.code({
      start: 111.0,
      onStart: function (options) {

        main.sketch.remove();

        $("#sketchCanvas").stop();
        $("#sketchCanvas").css({ opacity: 1 });
        $("#sketchCanvas").show();
      }
    });

    // Rox - play song

    pop.code({
      start: 115.0,
      onStart: function (options) {
        main.sketch = new p5(songSketch, "sketchCanvas");
      }
    });

    pop.code({
      start: 120.0,
      onStart: function (options) {
        main.sketch.remove();
      }
    });

    // Rox - Painting - draw sound

    pop.code({
      start: 123.0,
      onStart: function (options) {
        $("#sketchCanvas").addClass("foreground");
        main.sketch = new p5(paintingSketch, "sketchCanvas");
        main.sketch.scaleFactor = main.scaleFactor;
        main.sketch.disableMouse();
      }
    });

    pop.code({
      start: 123.1, //
      onStart: function (options) {
        main.sketch.startDrawing();

        var position = main.getRelativePosition({ left: -239, top: 449 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: -3, y: -8 }
        );
      }
    });

    pop.code({
      start: 123.3, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -56, top: 585 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: -1, y: -8 }
        );
      }
    });

    pop.code({
      start: 123.5, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: 29, top: 495 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: 3, y: -8 }
        );
      }
    });

    pop.code({
      start: 124, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: 171, top: 400 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: 5, y: -8 }
        );
      }
    });

    pop.code({
      start: 124.2, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: 111, top: 548 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: 4, y: -8 }
        );
      }
    });

    pop.code({
      start: 124.5, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -33, top: 500 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: -6, y: -8 }
        );
      }
    });

    pop.code({
      start: 124.8, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -167, top: 423 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: -6, y: -8 }
        );
      }
    });

    pop.code({
      start: 125, //
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -214, top: 504 });
        main.sketch.addPoint(
          { x: position.left, y: position.top },
          { x: -8, y: -8 }
        );

        main.sketch.stopDrawing();
        main.sketch.enableMouse();
      }
    });

    pop.code({
      start: 125.5,
      onStart: function (options) {
        $("#sketchCanvas").removeClass("foreground");
        main.sketch.enableMouse();
      }
    });

    pop.code({
      start: 130,
      onStart: function (options) {
        console.log('disable mouse')
        main.sketch.disableMouse();
        main.sketch.stopDrawing();
        $("#sketchCanvas").fadeOut(1000);
      }
    });

    pop.code({
      start: 131,
      onStart: function (options) {
        main.sketch.remove();

        $("#sketchCanvas").stop();
        $("#sketchCanvas").css({ opacity: 1 });
        $("#sketchCanvas").show();
      }
    });


    //WEBGL

    pop.code({
      start: 135,
      onStart: function (options) {
        main.sketch = new p5(webglSketch, "sketchCanvas");
      }
    })

    pop.code({
      start: 146,
      onStart: function (options) {
        main.sketch.remove();
      }
    })


    //accessibility

    pop.code({
      start: 148,
      onStart: function (options) {
        main.sketch = new p5(accessibilitySketch, "sketchCanvas");
      }
    })

    pop.code({
      start: 152,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -240, top: 200 });
        var panel = main.sketch.showCode(position.left, position.top);
        panel.parent('sketchOverlay');
      }
    });

    pop.code({
      start: 156,
      onStart: function (options) {
        main.sketch.hideCode();
        main.sketch.remove();
      }
    })

    //Outro


    pop.code({
      start: 255,
      onStart: function (options) {
        main.sketch = new p5(outroSketch, "sketchCanvas");
      }
    });

    pop.code({
      start: 256.37,
      onStart: function (options) {
        main.sketch.showOutro('<span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-scissors fa-stack-1x"></i></span>', 315, 248);
      }
    });

    pop.code({
      start: 256.9,
      onStart: function (options) {
        main.sketch.showOutro('<span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-lightbulb-o fa-stack-1x"></i></span>', 315, 248);
      }
    });

    pop.code({
      start: 257.60,
      onStart: function (options) {
        main.sketch.showOutro('<span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-laptop fa-stack-1x"></i></span>', 315, 248);
      }
    });

    pop.code({
      start: 258.56,
      onStart: function (options) {
        main.sketch.showOutro('<span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-pencil fa-stack-1x"></i></span>', 315, 248);
      }
    });

    pop.code({
      start: 259.10,
      onStart: function (options) {
        main.sketch.showOutro('<span class="fa-stack"><i class="fa fa-circle-thin fa-stack-2x"></i><i class="fa fa-graduation-cap fa-stack-1x"></i></span>', 315, 248);
      }
    });

    pop.code({
      start: 259.50,
      onStart: function (options) {
        main.sketch.showOutro('<img class="outroImage fa-spin" src="/assets/thick-asterisk-alone.svg" alt="" />', 325, 280);
      }
    });

    pop.code({
      start: 261.7,
      onStart: function (options) {
        main.sketch.showOutro('<a class="outroText" href="mailto:hello@p5js.org">hello@p5js.org</a>', 270, 300);

      }
    });

    pop.code({
      start: 266.123141,
      onStart: function (options) {
        main.sketch.remove();
      }
    });

    // CTA

    pop.code({
      start: 272,
      onStart: function (options) {

        $("#pause").hide();

        $("#cta")
          .css({ top: '-128px' })
          .show()
          .animate({ top: '50%' },
            {
              duration: 1300
            }
          );
      }
    });

    // Set external

    script.popcorn = pop;

  }

}
