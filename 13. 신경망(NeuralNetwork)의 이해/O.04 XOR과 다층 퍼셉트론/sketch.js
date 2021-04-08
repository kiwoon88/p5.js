function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  textSize(24);
  text('XOR(0,0) => '+XOR(0,0), 50, 50);
  text('XOR(0,1) => '+XOR(0,1), 50, 80);
  text('XOR(1,0) => '+XOR(1,0), 50, 110);
  text('XOR(1,1) => '+XOR(1,1), 50, 140);
  text('---------------------------', 50, 200);
  text('---------------------------', 50, 240);
  text('---------------------------', 50, 550);
  text('---------------------------', 50, 425);
  text('x1   x2     s1   s2     y',50,220);
  text('0    0      1    0      0',60,280);
  text('0    1      1    1      1',60,320);
  text('1    1      1    1      1',60,360);
  text('1    1      0    1      0',60,400);
  text('s1 = NAND(x1, x2)',60,450);
  text('s2 =     OR(x1, x2)',60,480);
  text(' y =   AND(x1, x2)',60,510);
  line(150,193,150,418);
  line(260,193,260,418);
  
}


function XOR(x1, x2){
  let s1 = NAND(x1, x2);
  let s2 = OR(x1, x2);
  let y = AND(s1, s2);
  return y;
}


function AND(x1, x2){
  let w1 = 0.5;
  let w2 = 0.5;
  let bais = -0.7;
  let value = x1*w1+x2*w2+bais;
  if(value <= 0){
    return 0;
  }else{
    return 1;
  }
}


function NAND(x1, x2){
  let w1 = -0.5;
  let w2 = -0.5;
  let bais = 0.7;
  let value = x1*w1+x2*w2+bais;
  if(value <=0){
    return 0;
  }else{
    return 1;
  }
}


function OR(x1, x2){
  let w1 = 0.5;
  let w2 = 0.5;
  let bais = -0.2;
  let value = x1*w1+x2*w2+bais;
  if(value <= 0){
    return 0;
  }else{
    return 1;
  }
}
