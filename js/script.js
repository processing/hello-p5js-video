var script = {
  popcorn: null,
  init: function () {


    var pop = Popcorn.smart("#videoClip", ["https://hello-assets.p5js.org/p5-video-draft-5-sm.webm"], { width: 1940, height: 1080 });
    pop.autoplay(false);

    pop.on("canplayall", function (e) {
      setTimeout(function() {
        main.prepareVideo();  // This will execute after a 10-second delay
      }, 4000); 
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

    /* Prevent picture-in-picture which breaks playthrough on mobile */
    
    var videoElement = document.querySelector("#videoClip video");
    if (videoElement) {
      videoElement.setAttribute("playsinline", ""); // iOS and Android
      videoElement.setAttribute("disablePictureInPicture", ""); // Android
      videoElement.setAttribute("webkit-playsinline", ""); // iOS
    }

    /* Script */

    // Q intro
    pop.code({
      start: 1,
      end: 3.9,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -177.5, top: 463 });
        main.sketch = new p5(introSketch, "sketchCanvas");
        // main.sketch.showLabel("Qianqian Ye, p5.js Project Lead", position.left, position.top);
      }
    });

    pop.code({
      start: 3.5,
      end: 7.5,
      onStart: function (options) {
        // main.sketch.hideLabel();
        main.sketch.showLogo(150, 272);
      }
    });

    pop.code({
      start: 8,
      end: 15,
      onStart: function (options) {
        var bullets = [
          "Learn to code",
          "Make art",
          "Free to Download",
          "Open Source"
        ]
        main.sketch.showBullets(bullets, 150, 400);
      }
    });

    pop.code({
      start: 16,
      end: 18,
      onStart: function (options) {
        main.sketch.hideLogo();
        main.sketch.hideBullets();

      }
    });

    pop.code({
      start: 18.5,
      end: 20,
      onStart: function (options) {
        var bullets = [
          "Accessibility",
          "Inclusivity",
          "Community",
          "Joy!"
        ]
        main.sketch.showBullets(bullets, 1450, 400);
      }
    });
    pop.code({
      start: 23.5,
      end: 27,
      onStart: function (options) {
        main.sketch.hideBullets();
      }
    });


    pop.code({
      start: 31,
      end: 35,
      onStart: function (options) {
        main.sketch.showExample("// DRAWING SHAPES", 200, 275);
      }
    });

    pop.code({
      start: 31.3,
      end: 35,
      onStart: function (options) {
        main.sketch.showExample("// MOUSE INTERACTION", 200, 325);
      }
    });

    pop.code({
      start: 31.6,
      end: 35,
      onStart: function (options) {
        main.sketch.showExample("// SIMPLE ANIMATION", 200, 375);
      }
    });

    pop.code({
      start: 31.9,
      end: 37,
      onStart: function (options) {
        main.sketch.showExample("// GENERATING SOUND", 1250, 275);
      }
    });

    pop.code({
      start: 32.3,
      end: 37,
      onStart: function (options) {
        main.sketch.showExample("// 3D & WEBGL", 1250, 325);
      }
    });

    pop.code({
      start: 32.6,
      end: 37,
      onStart: function (options) {
        main.sketch.showExample("// ACCESSIBILITY", 1250, 375);
      }
    });

    pop.code({
      start: 38.5,
      end: 42,
      onStart: function (options) {
        try{
          main.sketch.hideExamples();
        } catch { }
      }
    });


    pop.code({
      start: 43,
      end: 45.1,
      onStart: function (options) {
        try {
          main.sketch.hideInstruction();
          main.sketch.remove();
        } catch { }
      }
    });


    // Dan - Circle Sketch

    pop.code({
      start: 45.11,
      end: 49.1,
      onStart: function (options) {
        main.sketch = new p5(circleSketch, "sketchCanvas");
      }
    });

    pop.code({
      start: 49.15,
      end: 49,
      onStart: function (options) {
        main.sketch.mode = "triangle";
      }
    });

    pop.code({
      start: 50.18,
      end: 52,
      onStart: function (options) {
        main.sketch.mode = "square";
      }
    });

    pop.code({
      start: 52.23,
      end: 56,
      onStart: function (options) {
        main.sketch.mode = "flower";
      }
    });

    pop.code({
      start: 56,
      end: 56.4,
      onStart: function (options) {
        main.sketch.mode = "circle";
      }
    });

    //show instructions
    pop.code({
      start: 67,
      end: 70,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -830, top: 940 });
        var panel = main.sketch.showInstruction("(move + click mouse)", position.left, position.top);
        panel.parent('sketchOverlay');

        main.sketch.animateFollow();
      }
    });



    pop.code({
      start: 75,
      end: 82,
      onStart: function (options) {
        main.sketch.animatePaint();
      }
    });


    pop.code({
      start: 82.5,
      end: 89,
      onStart: function (options) {
        try {
          main.sketch.hideInstruction();
          main.sketch.remove();
        } catch { }
      }
    })

    //Tuan - flocking
    pop.code({
      start: 89.3,
      end: 94,
      onStart: function (options) {
        main.sketch = new p5(flockingSketch, "sketchCanvas");
        main.sketch.scaleFactor = main.scaleFactor;
      }
    });

    pop.code({
      start: 95,
      end: 98,
      onStart: function (options) {
        main.sketch.startRandomWalk();
      }
    });

    pop.code({
      start: 98.1,
      end: 99.9,
      onStart: function (options) {
        main.sketch.stopRandomWalk();
      }
    });



    pop.code({
      start: 99.0,
      end: 105,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -830, top: 940 });
        var panel = main.sketch.showInstruction("(move mouse)", position.left, position.top);
        panel.parent('sketchOverlay');

        main.sketch.startFlocking();
      }
    });


    pop.code({
      start: 108.5,
      end: 113,
      onStart: function (options) {
        try {
          main.sketch.stopFlocking();
          main.sketch.remove();
        } catch { }
        $("#sketchCanvas").stop();
        $("#sketchCanvas").css({ opacity: 1 });
        $("#sketchCanvas").show();
      }
    });



    // Rox - play song

    pop.code({
      start: 115.0,
      end: 119,
      onStart: function (options) {
        main.sketch = new p5(songSketch, "sketchCanvas");
      }
    });

    pop.code({
      start: 120.0,
      end: 121.9,
      onStart: function (options) {
        main.sketch.remove();
      }
    });

    // Rox - Painting - draw sound

    pop.code({
      start: 122.0,
      end: 125,
      onStart: function (options) {
        main.sketch = new p5(paintingSketch, "sketchCanvas");
        main.sketch.scaleFactor = main.scaleFactor;

        main.sketch.startDrawing();

        var position = main.getRelativePosition({ left: -239, top: 449 });
        main.sketch.addPoint(
          { x: 1, y: 149 },
          { x: -1.5, y: -4 }
        );

        var position = main.getRelativePosition({ left: -830, top: 940 });
        var panel = main.sketch.showInstruction("(click + drag mouse)", position.left, position.top);
        panel.parent('sketchOverlay');
      }
    });

    pop.code({
      start: 122.3,
      end: 125,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -56, top: 585 });
        main.sketch.addPoint(
          { x: 84, y: 185 },
          { x: -2, y: -4 }
        );
      }
    });

    pop.code({
      start: 122.5,
      end: 125,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: 29, top: 495 });
        main.sketch.addPoint(
          { x: 269, y: 195 },
          { x: 1.5, y: -4 }
        );
      }
    });

    pop.code({
      start: 123,
      end: 125,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: 171, top: 400 });
        main.sketch.addPoint(
          { x: 411, y: 210 },
          { x: 2.5, y: -4 }
        );
      }
    });

    pop.code({
      start: 123.1,
      end: 125,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: 111, top: 548 });
        main.sketch.addPoint(
          { x: 351, y: 148 },
          { x: 2, y: -4 }
        );
      }
    });

    pop.code({
      start: 123.3,
      end: 125,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -33, top: 500 });
        main.sketch.addPoint(
          { x: 207, y: 100 },
          { x: -3, y: -4 }
        );
      }
    });

    pop.code({
      start: 124.1, //
      end: 125,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -167, top: 423 });
        main.sketch.addPoint(
          { x: 73, y: 123 },
          { x: -3, y: -4 }
        );
      }
    });

    pop.code({
      start: 125.1, //
      end:127.5,
      onStart: function (options) {
        var position = main.getRelativePosition({ left: -214, top: 504 });
        main.sketch.addPoint(
          { x: 26, y: 104 },
          { x: -4, y: -4 }
        );

        main.sketch.stopDrawing();
        main.sketch.enableMouse();
      }
    });


    pop.code({
      start: 128,
      end: 130,
      onStart: function (options) {
        try {
          main.sketch.hideInstruction();
          main.sketch.disableMouse();
          main.sketch.stopDrawing();
          main.sketch.remove();
        } catch { }
        $("#sketchCanvas").stop();
        $("#sketchCanvas").css({ opacity: 1 });
        $("#sketchCanvas").show();
      }
    });


    //Patt - WEBGL

    pop.code({
      start: 133.5,
      end: 140,
      onStart: function (options) {
        main.sketch = new p5(webglSketch, "sketchCanvas");
        var position = main.getRelativePosition({ left: -830, top: 940 });
        var panel = main.sketch.showInstruction("(scroll + drag mouse)", position.left, position.top);
        panel.parent('sketchOverlay');
      }
    })

    pop.code({
      start: 147.5,
      end: 149,
      onStart: function (options) {
        if (main.sketch) {
          main.sketch.hideInstruction();
          main.sketch.remove();
        }
      }
    })


    //Myrah - accessibility

    pop.code({
      start: 149.1,
      end: 155,
      onStart: function (options) {
        main.sketch = new p5(accessibilitySketch, "sketchCanvas");
        var position = main.getRelativePosition({ left: -830, top: 940 });
        var panel = main.sketch.showInstruction("// describe('pink square with a red heart <br /> \nin the bottom-right corner.')", position.left, position.top);
        panel.parent('sketchOverlay');
      }
    })



    pop.code({
      start: 159,
      end: 180,
      onStart: function (options) {
        try {
          main.sketch.hideInstruction();
          main.sketch.remove();
        } catch { }
      }
    })


    // CTA
    pop.code({
      start: 240,
      end: 265,
      onStart: function (options) {
        $("#cta").css({ 'display': 'block' });
        $("#cta").animate({ 'opacity': 1 }, { 'duration': 500 });
        $("#pause").css({ 'display': 'none' });
        $("#progressBar").css({ 'display': 'none' });
        $("#videoClip").css({ 'display': 'none' });
        $("#videoCanvas").css({ 'display': 'none' });
      }
    });

    // Set external
    script.popcorn = pop;

  }

}
