
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  let leftEye = new p5.Vector(100, 100);
  let rightEye = new p5.Vector(300, 100);  
  let mouse = new p5.Vector(mouseX, mouseY);
  let leftv = p5.Vector.sub(mouse, leftEye);
  let rightv = p5.Vector.sub(mouse, rightEye);  
  leftv.normalize().mult(39);
  rightv.normalize().mult(39);
  noFill();
  circle(width/2, height/2, 350);  
  push();  
  translate(leftEye.x, leftEye.y);
  fill(255);
  circle(0, 0, 120);
  noStroke();
  fill(0);
  circle(leftv.x, leftv.y, 40);  
  pop();  
  push();  
  translate(rightEye.x, rightEye.y);
  fill(255);
  circle(0, 0, 120);
  noStroke();
  fill(0);
  circle(rightv.x, rightv.y, 40);  
  pop();  
  
}
