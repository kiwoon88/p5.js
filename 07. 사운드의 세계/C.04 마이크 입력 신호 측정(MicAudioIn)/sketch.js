function setup(){
  createCanvas(400,400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(255);
  let vol = mic.getLevel();
  fill(100);
  ellipse(width/2,height/2,300,vol*1000);
}
