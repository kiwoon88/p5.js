let loc = new p5.Vector(100, 100);
let vel = new p5.Vector(4, 6.5);

function setup(){
  createCanvas(640, 360);
}

function draw(){
  background(255);

  stroke(0);
  fill(200);
  ellipse(loc.x, loc.y, 32, 32);
  
  if((loc.x < 0) || (loc.x > width)){
    vel.x *= -1;
  }
  if((loc.y < 0) || (loc.y > height)){
    vel.y *= -1;
  }
  loc.add(vel);
}
