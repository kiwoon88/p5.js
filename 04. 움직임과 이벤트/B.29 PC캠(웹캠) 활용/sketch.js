let cam;

function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  newCnv = createGraphics(640, 480);
  //cam.size(360, 240);
  cam.hide();

}

function draw(){
  image(cam, 0, 0);
  image(newCnv,0,0);
}

function mouseDragged(){
  newCnv.stroke(255, 255, 0);
  newCnv.strokeWeight(10);
  newCnv.line(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseReleased(){
  if(mouseButton == CENTER){
    newCnv.clear();
  }
}

