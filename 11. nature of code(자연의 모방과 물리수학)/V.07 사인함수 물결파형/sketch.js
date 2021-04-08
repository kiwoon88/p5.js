let startAngle = 0;
let angleVel = 0.23;

function setup(){
  createCanvas(640, 360);
}

function draw(){
  background(255);
  startAngle += 0.017;
  let angle = startAngle;
  
  for(let x = 0; x < width; x+=16){
    let y = map(sin(angle), -1, 1, height-30, 30);
    stroke(0);
    fill(0, 50);
    strokeWeight(1);
    ellipse(x, y, 40, 40);
    angle+=0.2;
  }
}
