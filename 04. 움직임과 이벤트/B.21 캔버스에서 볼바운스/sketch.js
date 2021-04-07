let x=100;
let y=200;
let d=50;
let speedX = 5, speedY = 6;

function setup(){
  createCanvas(500, 400);
}

function draw(){
  background(150);
  ellipse(x, y, d);
  if( x < 0+d/2 || x > width-d/2){
    speedX*=-1;          
  }
  if( y < 0+d/2 || y > height-d/2){
    speedY *= -1;
  }
  x += speedX;
  y += speedY;
}
