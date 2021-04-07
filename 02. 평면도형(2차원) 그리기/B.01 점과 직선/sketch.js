function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw(){
  strokeWeight(1);
  stroke(0);
  line(0, 0, mouseX, mouseY);  
  stroke(random(255), random(255), random(255));
  strokeWeight(10);
  point(mouseX, mouseY);    
}
