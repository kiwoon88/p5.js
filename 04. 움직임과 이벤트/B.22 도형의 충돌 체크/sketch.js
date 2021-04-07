let x1=100, y1=200, d1=50;
let x2=200, y2=100, d2=30;
let speedX1 = 5, speedY1 = 6;
let speedX2 = 10, speedY2 = -12;

function setup(){
  createCanvas(500, 400);
}

function draw(){
  background(150);

  ellipse(x1, y1, d1);  
  ellipse(x2, y2, d2);

  if(dist(x1, y1, x2, y2)<(d1+d2)/2){
    x1 *= -1; y1*=-1;
    x2 *= -1; y2*=-1;
    fill(random(255), random(255), random(255));
  }
  
  if( x1 < 0+d1/2 || x1 > width-d1/2){
    speedX1*=-1;          
  }
  if( y1 < 0+d1/2 || y1 > height-d1/2){
    speedY1 *= -1;
  }
 

  if( x2 < 0+d2/2 || x2 > width-d2/2){
    speedX2*=-1;          
  }
  if( y2 < 0+d2/2 || y2 > height-d2/2){
    speedY2 *= -1;
  }

  x1 += speedX1;
  y1 += speedY1;
  x2 += speedX2;
  y2 += speedY2;
}
