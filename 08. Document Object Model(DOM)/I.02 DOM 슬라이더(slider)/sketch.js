let btn, slider_R, slider_G, slider_b;

function setup() {
  createCanvas(400, 400);
  background(220);
  btn = createButton('지우기');
  btn.size(125,30);
  btn.position(50, height+10);
  btn.mousePressed(canvas_clear);
  slider_R = createSlider(0, 255, 125);
  slider_G = createSlider(0, 255, 125);
  slider_B = createSlider(0, 255, 125);
  slider_R.position(50,height+50);
  slider_G.position(50,height+100);
  slider_B.position(50,height+150);
  slider_R.style('width','255px');
  slider_G.style('width','255px');
  slider_B.style('width','255px');
}

function draw() {

}

function canvas_clear(){
  background(220);
}


function mouseDragged(){
  if(mouseButton == LEFT){
    noStroke();
    fill(slider_R.value(),slider_G.value(), slider_B.value(), 40);
    circle(mouseX,mouseY,30);
  }
}
