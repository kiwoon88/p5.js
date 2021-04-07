let i = 0;

function setup(){
  createCanvas(500, 400, WEBGL);
}

function draw(){
  background(220);
  rotateX(i += 0.034);
  fill(255, 0, 0);
  plane(100, 100, 1);
  translate(0, 0, 50)
  fill(255, 255, 0, 50);
  plane(50, 200, 1);
}
