var flockingSketch = function (sketch) {
  // sketch.scaleFactor = 1.0;


  sketch.setup = function () {

    //new p5 video variables
    sketch.animateRandom = false;
    sketch.animateFlocking = false;
    sketch.circleRadius = 30;
    sketch.circles = [];

    // sketch.colorMode(sketch.HSB, 100);

    sketch.mainCanvas = sketch.createCanvas(720, 720);
    sketch.mainCanvas.addClass("windowFrame");

    for (let y = sketch.circleRadius / 2; y < sketch.height; y += sketch.circleRadius * 2) {
      for (let x = sketch.circleRadius / 2; x < sketch.width; x += sketch.circleRadius * 2) {
        let c = new sketch.Circle(x + sketch.circleRadius / 2, y + sketch.circleRadius / 2);
        sketch.circles.push(c);
      }
    }

    sketch.instructionPanel = sketch.createDiv("");
    sketch.instructionPanel.addClass("instructionPanel");
    sketch.instructionPanel.hide();

  }

  sketch.draw = function () {
    sketch.clear();

    if (sketch.animateFlocking) {
      for (let i = 0; i < sketch.circles.length; i++) {
        sketch.circles[i].applyBehavior(sketch.circles, sketch.mouseX, sketch.mouseY);
        sketch.circles[i].update();
        sketch.circles[i].borders();
      }
    }

    if (sketch.animateRandom) {
      for (let i = 0; i < sketch.circles.length; i++) {
        sketch.circles[i].randomWalk();
        sketch.circles[i].borders();
      }
    }

    for (let i = 0; i < sketch.circles.length; i++) {
      sketch.circles[i].display();
    }
  }


  //toggles 

  sketch.startRandomWalk = function () {
    sketch.animateRandom = true;
  }
  sketch.stopRandomWalk = function () {
    sketch.animateRandom = false;
  }

  sketch.startFlocking = function () {
    sketch.animateFlocking = true;
  }

  sketch.stopFlocking = function () {
    sketch.animateFlocking = false;
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

  //Circle Class

  sketch.Circle = function (x, y) {
    this.pos = new p5.Vector(x, y);
    this.vel = new p5.Vector(0, 0);
    this.acc = new p5.Vector(0, 0);
    this.maxspeed = 3;
    this.maxforce = 0.2;
    this.r = sketch.circleRadius;
  }

  sketch.Circle.prototype.applyBehavior = function (circles, mouseX, mouseY) {
    let separatef = this.separate(circles);
    let seekf = this.seek(new p5.Vector(mouseX, mouseY));

    separatef.mult(1.5);
    seekf.mult(0.5);

    this.applyForce(separatef);
    this.applyForce(seekf);
  }

  sketch.Circle.prototype.applyForce = function (force) {
    this.acc.add(force);
  }

  sketch.Circle.prototype.separate = function (circles) {
    let safeDistance = this.r * 2;
    let sum = new p5.Vector(0, 0);
    let count = 0;

    for (let other of circles) {
      let d = p5.Vector.dist(this.pos, other.pos);
      if (this != other && d < safeDistance) {
        let diff = p5.Vector.sub(this.pos, other.pos);
        diff.setMag(1 / d);
        sum.add(diff);
        count++;
      }
    }
    if (count > 0) {
      sum.div(count);
      //set to the same speed
      sum.setMag(this.maxspeed);
      //steering = desired-velocity;
      sum.sub(this.vel);
      sum.limit(this.maxforce)
    }
    return sum;
  }

  sketch.Circle.prototype.seek = function (target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.normalize().mult(this.maxspeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  sketch.Circle.prototype.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    //reset each frame
    this.acc.mult(0);
  }

  sketch.Circle.prototype.randomWalk = function () {

    this.vel.x = sketch.random(-1, 1);
    this.vel.y = sketch.random(-1, 1);
    this.pos.add(this.vel);

  }

  sketch.Circle.prototype.display = function () {
    sketch.fill('pink');
    sketch.stroke(0, 20);
    sketch.strokeWeight(2);
    sketch.ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  sketch.Circle.prototype.borders = function () {
    if (this.pos.x < -this.r) this.pos.x = sketch.width + this.r;
    if (this.pos.y < -this.r) this.pos.y = sketch.height + this.r;
    if (this.pos.x > sketch.width + this.r) this.pos.x = -this.r;
    if (this.pos.y > sketch.height + this.r) this.pos.y = -this.r;
  }


};
