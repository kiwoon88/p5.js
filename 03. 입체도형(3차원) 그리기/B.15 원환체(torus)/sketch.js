function setup(){
  createCanvas(500, 400, WEBGL);
}

function draw(){
  background('#AAEE00');
  rotateY(millis() / 1000);
  torus(100, 40, 24, 16);
}
