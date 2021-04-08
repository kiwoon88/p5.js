let x = 100;
let y = 100;
let speedX = 4;
let speedY = 6.5;

function setup(){
  createCanvas(640, 360);
}

function draw(){
  background(255);

  stroke(0);
  fill(200);
  ellipse(x, y, 32, 32);
  
  if((x < 0) || (x > width)){
    speedX *= -1;
  }
  if((y < 0) || (y > height)){
    speedY *= -1;
  }
  x += speedX;
  y += speedY;
  
}
