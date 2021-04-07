function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(100);
  noFill();
  stroke(255);
  strokeWeight(4);
  circle(width/2, height/2, width-10);
  stroke(0);
  fill('#FFFF00');
  noStroke();
  ellipse(width/2, height/2, 60, 50);
  arc(width/4, height/3, 90, 100, 0.070, 6.18, PIE);
  arc(width/4*3, height/3, 90, 100, 0.070, 6.18, PIE);
  noFill();
  stroke(0)
  strokeWeight(10);
  arc(width/2, height/1.5, width/2, height/4, 0, PI);
}
