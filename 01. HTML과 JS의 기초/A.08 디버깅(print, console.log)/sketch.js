let myCnv;
let i = 0;
function setup() {
  createCanvas(600, 400);
  let bgColor = color(220, 111, 214, 255);
  background(bgColor);    
  print(bgColor);
  frameRate(2);
}

function draw(){
  console.log('변수의 값 i++ = ', i++);
  console.log('[frameCount] = ' + frameCount);
}
