let x=0;
let y=200;

function setup(){
  createCanvas(500, 400);
  frameRate(60);
  //frameRate(10);
}

function draw(){
  background(150);
  ellipse(x, y, 50);
  x+=2;
  //console.log(frameCount%60);
}
