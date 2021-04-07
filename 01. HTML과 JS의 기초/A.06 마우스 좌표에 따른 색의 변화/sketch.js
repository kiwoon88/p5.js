let col = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  col = map(mouseX,0,width,0,255);
  background(col);
  fill(255-col);
  ellipse(mouseX,height/2,64,64);
}
