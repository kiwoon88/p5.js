function setup(){
  createCanvas(500, 400);
  background(150);
}

function draw(){
  fill(255, 255, 0, 50);
  noStroke();
  if(mouseIsPressed){
      circle(mouseX, mouseY, 20);
  }
}
