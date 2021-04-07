let i=0;

function setup(){
  createCanvas(500, 400, WEBGL);
}

function draw(){
  background('#AADD00');
  rotateX(-0.3);
  rotateY(i += 0.01);
  fill(255, 255, 0);
  box(200, 100, 120);
}
