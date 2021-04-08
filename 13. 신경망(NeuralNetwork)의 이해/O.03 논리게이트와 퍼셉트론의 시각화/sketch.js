let mouseClick = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  //AND 그래프
  translate(100,200);
  stroke(0);
  xyLine('AND');
  dot(0,0,'AND');
  dot(0,1,'AND');
  dot(1,0,'AND');
  dot(1,1,'AND');
  //NAND 그래프
  translate(300,0);
  xyLine('NAND');
  dot(0,0,'NAND');
  dot(0,1,'NAND');
  dot(1,0,'NAND');
  dot(1,1,'NAND');
  //XOR 그래프  
  translate(0,300);
  xyLine('XOR');
  dot(0,0,'XOR');
  dot(0,1,'XOR');
  dot(1,0,'XOR');
  dot(1,1,'XOR');
  //OR 그래프
  translate(-300,0);
  xyLine('OR');
  dot(0,0,'OR');
  dot(0,1,'OR');
  dot(1,0,'OR');
  dot(1,1,'OR');
  liner();
}

function xyLine(logic){
  stroke(0);
  line(-100,0,150,0);
  line(0,-150,0,100);
  textSize(46);
  noStroke();
  fill(255,0,0);
  textAlign(CENTER);
  text(logic,0,- 150);
  textSize(16);
  stroke(1);
}


function liner(){
  translate(-100,-500);
  strokeWeight(10);
  stroke(100,0,255);
  if(mouseClick==0){
    line(mouseX-150,mouseY-150,mouseX+50,mouseY+50);
  }else if(mouseClick==1){
    line(mouseX-150,mouseY,mouseX+50,mouseY);
  }else if(mouseClick==2){  
    line(mouseX,mouseY-150,mouseX,mouseY+50);    
  }else{
    line(mouseX+150,mouseY-150,mouseX-50,mouseY+50);
  }
  strokeWeight(1);
}


function mousePressed(){
  if(mouseClick>3){
    mouseClick=0;
  }else{
    mouseClick++;   
  }
}


function dot(x,y,logic){
  let value;
  fill(0);
  text('('+x+','+y+')',x*100-40,y*-100+20);
  if(logic == 'AND'){
    value = AND(x,y);
  }else if(logic == 'NAND'){
    value = NAND(x,y);    
  }else if(logic == 'OR'){
    value = OR(x,y);    
  }else{
    value = XOR(x,y);
  }
  if(value){
    fill(0);
  }else{
    fill(255);
  }
  circle(x*100,y*-100,10);
}
  
function AND(x,y){
  if(x&&y){
    return 1;
  }else{
    return 0;
  }
}

function NAND(x,y){
  if(!(x&&y)){
    return 1;
  }else{
    return 0;
  }
}

function OR(x,y){
  if(x||y){
    return 1;
  }else{
    return 0;
  }
}

function XOR(x,y){
  if(x+y==0 || x+y==2){
    return 0;
  }else{
    return 1;
  }
}
