let count = 0;

function setup() {
  createCanvas(400, 400);
  button();
}

function draw() {
  //background(220);
}

function button(){
  btn1 = createButton('클릭');
  btn1.position(430, 20);
  btn1.size(100,100);
  btn1.mousePressed(click_Button);
}

function click_Button(){
  count++;
  let r = random(0, 0xFF);
  let g = random(0, 0xFF);
  let b = random(0, 0xFF);
  background(r,g,b);
  createP(count);
}
