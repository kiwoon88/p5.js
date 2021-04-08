let angle = 0;
let angleVel = 0;
let angleAcc = 0;
let velSlider;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
  velSlider = createSlider(0.0, 0.8, 0.4, 0.02);
  accSlider = createSlider(0.002, 0.050, 0.005, 0.002);
}

function draw() {
  background(255);
  fill('#000000');
  textSize(16);
  text('최고 속도 조절', 5, height-5);
  text('가속도 조절', 135, height-5);
  noStroke();
  fill(100);
  rectMode(CENTER);
  translate(width/2, height/2);
  rotate(angle);
  rect(0, 0, 200, 25);
  angle += angleVel;
  angleVel += angleAcc;
  angleAcc = map(mouseX, 0, width, -accSlider.value(), accSlider.value());
  angleVel = constrain(angleVel, -velSlider.value(), velSlider.value());
}
