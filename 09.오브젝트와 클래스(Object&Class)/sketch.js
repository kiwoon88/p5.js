let x1 = 100, y1 = 420, d1 = 30;
let x2 = 300, y2 = 460, d2 = 40;    

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0, 200, 220);
  
  fill(0, 0, 150, 100);
  noStroke();
  circle(x1, y1, d1);
  circle(x2, y2, d2);
  
  x1 += random(-2, 2);
  x2 += random(-2, 2);
  y1 -= 2;
  y2 -= 3;
  
  if(y1<0){
    x1 = random(width);
    y1 = 420;
  }
  if(y2<0){
    x2 = random(width);
    y2 = 460;
  }
}
