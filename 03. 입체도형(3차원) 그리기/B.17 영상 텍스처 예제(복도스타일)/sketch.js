let video;
let x=0;
let y=0;

function setup() {
  createCanvas(400, 400, WEBGL);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw() {
  background(100);
  push();
  translate(-120,0)
  rotateY(PI/180*270);
  normalMaterial();
  texture(video);  
  plane(320, 240);
  pop();
  push();
  translate(120,0)
  rotateY(PI/180*-90);
  normalMaterial();
  texture(video);  
  plane(320, 240);
  pop();
  push();
  translate(0,-120)
  rotateX(PI/180*-270);
  normalMaterial();
  texture(video);  
  plane(240, 320);
  pop();
  push();
  translate(0,120)
  rotateX(PI/180*90);
  normalMaterial();
  texture(video);  
  plane(240, 320);
  pop();
}
