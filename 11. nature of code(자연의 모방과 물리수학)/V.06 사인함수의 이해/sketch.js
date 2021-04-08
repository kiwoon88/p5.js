let angle = 0;
let sinDatas = [];
let x, y;

function setup() {
  createCanvas(700, 400);
  //angleMode(DEGREES);
  x = 0;
  y = -100*sin(0);
}

function draw() {
  background(255);  
  sindata = y;
  sinDatas.push(sindata);
  stroke(0);
  strokeWeight(1);
  line(0, height/2, width, height/2);
  stroke(150);
  strokeWeight(1);
  translate(0, height/2);
  noFill();
  stroke(200, 0, 0);
  stroke('red');
  strokeWeight(5);
  for(let i=0; i<sinDatas.length; i+=4){
    point(i, sinDatas[i]);
  }
  angle+=PI/180;
  y = -100*sin(angle);
  if(x>=width){
    sinDatas.splice(0,1);
    x=width-1;
  }else{
    x++;
  }
}
