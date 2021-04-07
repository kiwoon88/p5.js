let i=0;

function setup(){
  createCanvas(500, 400, WEBGL);
}

function draw(){
  background('#AADD00');
  rotateX(-0.9);
  rotateY(i += 0.01);
  fill(255, 0, 255, 50);
  sphere(150, 24, 24);
}
