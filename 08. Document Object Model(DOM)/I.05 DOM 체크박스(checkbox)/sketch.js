let chk1, chk2, chk3, chk4;

function setup() {
  createCanvas(500, 400);
  back_color = color(255, 255, 255);
  background(back_color);
  chk1 = createCheckbox('직사각형', false);
  chk2 = createCheckbox('동그라미', false);
  chk3 = createCheckbox('테두리선', true);
  chk4 = createCheckbox('SLOW/FAST', false);
  chk1.position(30, 420);
  chk2.position(130, 420);
  chk3.position(230, 420);
  chk4.position(330, 420);
  chk4.changed(drawSpeed);
}

function draw() {
  if(chk3.checked()){
    stroke(0)
  }else{
    noStroke();
  }
  
  if(chk1.checked()){
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(100), random(100));
  }
  if(chk2.checked()){
    fill(random(255), random(255), random(255), random(255));
    circle(random(width)-50, random(height), random(100));
  }
}

function drawSpeed(){
  if(this.checked()){
    frameRate(6);
  }else{
    frameRate(60);
  }
}
