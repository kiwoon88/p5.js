//각도 라디안
let angle=0;
let sec = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  rotate(-PI/2);
  for(let i=0; i < 60; i++){
  let x = map(cos(angle),-1,1, -width/2+10, width/2-10);
  let y = map(sin(angle),-1,1, -height/2+10, height/2-10);
  fill('#FF00FF');
  ellipse(x,y,17,17);
  angle += PI/30;
  }
  let x = map(cos(angle),-1, 1, -width/2+30,width/2-30);
  let y = map(sin(angle),-1, 1, -height/2+30, height/2-30);
  stroke(0);
  line(0,0,x,y);
  fill('#0000FF');
  ellipse(x,y,3,3);
  rotate(PI/2);
  textSize(64);
  textAlign(CENTER, CENTER);
  text(sec, 0, 0);
  if(sec>=59){
    sec = 0;
  }else{
    sec++;
  }
  angle += PI/30;
}
