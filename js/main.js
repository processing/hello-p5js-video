var main = {
  sketch: null,
  scaleFactor: 1.0,
  debug: false,

  // Initalize Demo

  init: function () {
    //console.log("A");

    main.resize();

    // Popcorn Setup
    script.init();

    // Events

    if (main.debug) {
      $(document).click(function (e) {
        //console.log(script.popcorn.currentTime());
        var clickX = e.pageX - ($(window).width() / 2)
        clickY = $(window).height() - e.pageY;
        //console.log("{left:" + e.pageX + ", top:" + clickY + "}");
      });
    }

    $(window).resize(function () {
      main.resize();
    });

    // Keyboad events

    if (main.debug) {
      $('body').keypress(function (e) {

        var keypress = String.fromCharCode(e.which);

        // Pause

        if (keypress == "p") {
          if (script.popcorn.paused())
            script.popcorn.play();
          else
            script.popcorn.pause();
        }

        if (keypress == ".") {
          if (!script.popcorn.paused()) script.popcorn.pause();
          script.popcorn.currentTime(script.popcorn.currentTime() + (1.0 / 30.0));
          //console.log(script.popcorn.currentTime());
        }

        if (keypress == ",") {
          if (!script.popcorn.paused()) script.popcorn.pause();
          script.popcorn.currentTime(script.popcorn.currentTime() - (1.0 / 30.0));
          //console.log(script.popcorn.currentTime());
        }

      });

      $("#progressBar").click(function (e) {
        // This has been disabled 
        //console.log(script.popcorn.currentTime());
        let clickX = e.pageX;
        let width = $(window).width();
        let duration = script.popcorn.duration();
        script.popcorn.currentTime(clickX / width * duration);
      });

    }

    // Buttons

    $("#pause").click(function () {
      if (script.popcorn.paused()) {
        script.popcorn.play();
      } else {
        script.popcorn.pause();
      }
    });

    $("#begin").click(function () {
      main.playVideo();
      main.prepareProgressBar();
    });

    $("#begin").button('loading');

    // Pause on click

    $("a")
      .attr('target', "_blank")
      .click(function () {
        script.popcorn.pause();
      });

    // Show welcome

    $("#welcome").fadeIn();

    $("#section-intro").click(function () {
      script.popcorn.currentTime(0);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-circle").click(function () {
      script.popcorn.currentTime(39);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-animation").click(function () {
      script.popcorn.currentTime(82.79);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-audio").click(function () {
      script.popcorn.currentTime(108.6);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-webgl").click(function () {
      script.popcorn.currentTime(127.62);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-accessibility").click(function () {
      script.popcorn.currentTime(148.65);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-tutorial").click(function () {
      script.popcorn.currentTime(159.23);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-contribute").click(function () {
      script.popcorn.currentTime(179.93);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

    $("#section-outro").click(function () {
      script.popcorn.currentTime(206.5);
      if (main.sketch) {
        main.sketch.remove();
      }
    });

  },

  prepareVideo: function () {
    // Set button state
    $("#begin").button('reset');
  },

  prepareProgressBar: function () {
    // Prepare progress bar
    //allocate the positions for the section buttons across the progress bar
    // let width = $(window).width();
    let width = 1920;
    let duration = script.popcorn.duration();
    //example: section-intro's popcorn time: 1 -> calculate left position base on the time
    $("#section-intro").css({ "left": ((0.1 / duration) * width).toString() + "px" });
    $("#section-circle").css({ "left": ((39 / duration) * width).toString() + "px" });
    $("#section-animation").css({ "left": ((82.79 / duration) * width).toString() + "px" });
    $("#section-audio").css({ "left": ((108.6 / duration) * width).toString() + "px" });
    $("#section-webgl").css({ "left": ((127.62 / duration) * width).toString() + "px" });
    $("#section-accessibility").css({ "left": ((148.65 / duration) * width).toString() + "px" });
    $("#section-tutorial").css({ "left": ((159.23 / duration) * width).toString() + "px" });
    $("#section-contribute").css({ "left": ((179.93 / duration) * width).toString() + "px" });
    $("#section-outro").css({ "left": ((206.5 / duration) * width).toString() + "px" });
  },

  // Start Video

  playVideo: function () {

    $("#welcome").fadeOut();
    $("#videoClip").fadeIn();
    // $("#videoCanvas").fadeIn();
    $("#pause").fadeIn();
    $("#progressBar").fadeIn();


    var time = main.getStartTime();
    script.popcorn.play(time);
    this.prepareProgressBar();

  },

  getStartTime: function () {

    var hash = top.location.hash.replace('#', ''), time = 0;
    if (hash.length > 0) {
      time = parseFloat(hash);
      //console.log("Playing from " + time + ".");
    }
    return time;

  },

  getRelativePosition: function (position) {

    videoBaseX = $("#main").width() / 2;
    videoBaseY = $("#main").height();

    position.left = videoBaseX + position.left;
    position.top = videoBaseY - position.top;

    return position;

  },

  resize: function () {
    var transform = "none";
    var ratio = 1.0;

    if (window.innerWidth < 1920 || window.innerHeight < 1080) {
      ratio = window.innerWidth / 1920;
      if (ratio * 1080 > window.innerHeight) {
        ratio = window.innerHeight / 1080;
      }
      transform = 'scale(' + ratio + ')';
    }

    main.scaleFactor = ratio;
    if (main.sketch) main.sketch.scaleFactor = main.scaleFactor;
    $('#main').css('transform', transform);


  }

}