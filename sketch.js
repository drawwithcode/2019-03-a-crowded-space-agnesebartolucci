function preload() {
  // put preload code here
}

var stars = [];
var colors = ['#ffffff', '#fff15c', '#ffe800', '#f3f1e2'];
var starsNumber = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
}

function mouseClicked() {
  for (var a = 0; a < starsNumber; a++) {
    var myStar = new Star(mouseX, mouseY, 10);
    myStar.speed1 = random(-5, 5);
    myStar.speed2 = random(-5, 5);
    myStar.color = color(random(colors));
    stars.push(myStar);
  }
}

function draw() {
  background('#200e68');
  fill('white');
  textSize(20);
  textFont('helvetica')
  text('Click until stars take place to create your sky', windowWidth/2-200, height/2);

  for (var b = 0; b < stars.length; b++) {
    stars[b].move();
    stars[b].display();
    stars[b].color = color(random(colors));
  }

  if (frameCount > 800) {
    starsNumber = 0;
  }
}

function Star (_x, _y,) {
  this.size = random(3, 15);
  this.x = _x;
  this.y = _y;
  this.color = 'white';
  this.speed1 = 10;
  this.speed2 = -20;

  var xInc = 1;
  var yInc = 1;

  this.move = function() {
    this.x += this.speed1 * xInc;
    this.y += this.speed2 * yInc;
    if (this.y > height || this.y < 0) {
      yInc = yInc * -1;
    }
    if (this.x > width || this.x < 0) {
      xInc = xInc * -1;
    }
    if (frameCount > 800) {
      xInc = xInc * 0;
      yInc = yInc * 0;
      this.x = this.x + random(-0.25, 0.25);
      this.y = this.y + random(-0.25, 0.25);
    }
  }

  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
