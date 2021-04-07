function setup(){
  createCanvas(500, 400);
  background(255);
}

function mousePressed(){
  if(mouseButton==CENTER){
    save('test001.png');
  }else if(mouseButton==RIGHT){
    background(random(255), random(255), random(255));
  }
}

function mouseDragged(){
  stroke(255, 0, 255);
  strokeWeight(3);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
