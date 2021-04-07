let i=0;

function setup(){
  createCanvas(500, 400, WEBGL);
}

function draw(){
  background('#AADD00')
  rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  fill(0, 0, 255);
  cylinder(100, 150, 24, 1, 0, 1);
}
