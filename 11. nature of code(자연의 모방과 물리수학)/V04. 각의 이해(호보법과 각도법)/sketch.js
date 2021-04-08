let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  //angleMode(DEGREES);
}

function draw() {
  background(220);
  noStroke();
  fill(100);
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(angle);
  rect(0, 0, 200, 25);
  angle += PI/90;
  //angle += 2;
}
