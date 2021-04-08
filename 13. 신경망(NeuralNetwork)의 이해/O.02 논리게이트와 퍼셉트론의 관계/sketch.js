function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
             
  textSize(15);
  text('=======================================',0,20);
  text('AND(0,0) => ' + AND(0, 0),0,40);
  text('AND(0,1) => ' + AND(0, 1),0,60);
  text('AND(1,0) => ' + AND(1, 0),0,80);
  text('AND(1,1) => ' + AND(1, 1),0,100);
  text('pAND(0,0) => ' + pAND(0, 0),0,120);
  text('pAND(0,1) => ' + pAND(0, 1),0,140);
  text('pAND(1,0) => ' + pAND(1, 0),0,160);
  text('pAND(1,1) => ' + pAND(1, 1),0,180);
  text('=======================================',0,200);
  text('NAND(0,0) => ' + NAND(0, 0),0,220);
  text('NAND(0,1) => ' + NAND(0, 1),0,240);
  text('NAND(1,0) => ' + NAND(1, 0),0,260);
  text('NAND(1,1) => ' + NAND(1, 1),0,280);
  text('pNAND(0,0) => ' + pNAND(0, 0),0,300);
  text('pNAND(0,1) => ' + pNAND(0, 1),0,320);
  text('pNAND(1,0) => ' + pNAND(1, 0),0,340);
  text('pNAND(1,1) => ' + pNAND(1, 1),0,360);
  text('=======================================',0,380);
  text('OR(0,0) => ' + OR(0, 0),0,400);
  text('OR(0,1) => ' + OR(0, 1),0,420);
  text('OR(1,0) => ' + OR(1, 0),0,440);
  text('OR(1,1) => ' + OR(1, 1),0,460);
  text('pOR(0,0) => ' + pOR(0, 0),0,480);
  text('pOR(0,1) => ' + pOR(0, 1),0,500);
  text('pOR(1,0) => ' + pOR(1, 0),0,520);
  text('pOR(1,1) => ' + pOR(1, 1),0,540);
  text('=======================================',0,560);
  text('perceptron_AND(0,0) => '+perceptron(0, 0, 'AND'),200,40);
  text('perceptron_AND(0,1) => '+perceptron(0, 1, 'AND'),200,60);  
  text('perceptron_AND(1,0) => '+perceptron(1, 0, 'AND'),200,80);
  text('perceptron_AND(1,1) => '+perceptron(1, 1, 'AND'),200,100);  
  text('perceptron_NAND(0,0) => '+perceptron(0, 0, 'NAND'),200,220);
  text('perceptron_NAND(0,1) => '+perceptron(0, 0, 'NAND'),200,240);  
  text('perceptron_NAND(1,0) => '+perceptron(1, 0, 'NAND'),200,260);
  text('perceptron_NAND(1,1) => '+perceptron(1, 1, 'NAND'),200,280);  
  text('perceptron_OR(0,0) => '+perceptron(0, 0, 'OR'),200,400);
  text('perceptron_OR(0,1) => '+perceptron(0, 1, 'OR'),200,420);  
  text('perceptron_OR(1,0) => '+perceptron(1, 0, 'OR'),200,440);
  text('perceptron_OR(1,1) => '+perceptron(1, 1, 'OR'),200,460);  
  
  noLoop();

}

function AND(x1, x2) {
  value = x1 + x2;
  if (value > 1) {
    return 1;
  } else {
    return 0;
  }
}

function pAND(x1, x2) {
  let w1 = 0.5;
  let w2 = 0.5;
  let bias = -0.7;
  let value = x1 * w1 + x2 * w2 + bias;
  if (value <= 0) {
    return 0;
  } else {
    return 1;
  }
}

function NAND(x1, x2) {
  let value = x1 + x2;
  if (value > 1) {
    return 0;
  } else {
    return 1;
  }
}

function pNAND(x1, x2) {
  let w1 = -0.5;
  let w2 = -0.5;
  let bias = 0.7;
  let value = x1 * w1 + x2 * w2 + bias;
  if (value <= 0) {
    return 0;
  } else {
    return 1;
  }
}

function OR(x1, x2) {
  let value = x1 + x2;
  if (value < 1) {
    return 0;
  } else {
    return 1;
  }
}

function pOR(x1, x2) {
  let w1 = 0.5;
  let w2 = 0.5;
  let bias = -0.2;
  let value = x1 * w1 + x2 * w2 + bias;
  if (value <= 0) {
    return 0;
  } else {
    return 1;
  }
}

function perceptron(x1, x2, logic){
  let w1, w2, bias, value;
  
  if(logic == 'AND'){
    w1 = 0.5;
    w2 = 0.5;
    bias = -0.7;
  }else if(logic == 'NAND'){
    w1 = -0.5;
    w2 = -0.5;
    bias = 0.7;
  }else if(logic == 'OR'){
    w1 = 0.5;
    w2 = 0.5;
    bias = -0.2;
  }else{
    console.log('ERROR');
    noLoop();
  }

  value = x1 * w1 + x2 * w2 + bias;

  if (value <= 0) {
    return 0;
  } else {
    return 1;
  }
}
