function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  translate(200,350);
  textSize(16);
  text('Activation Function',-180, -320);  
  noStroke();
  fill(0);
  text('(0,1)',-35, -250);
  text('(0,0)',5, 10);
  text('(-5,0)',-170,20);
  text('(5,1)',130,-250);  
  stroke(150);
  strokeWeight(2);
  line(0,100,0,-300);  
  stroke(0);
  fill(0);
  text('step f(x)',-100,-200);
  for(let x = -5.0;x<5.0;x+=0.1){
    let y = step(x);
    point(x*30,-y*250+1);
  }


  stroke(0,0,255);  
  fill(0,0,255);
  text('sigmoid f(x)',-100,-100);
  for(let x = -5.0;x<5.0;x+=0.1){
    let y = sigmoid(x);
    point(x*30,-y*250);
  }

  noLoop();
  stroke(255,0,0);  
  fill(255,0,0);
  text('LeRU f(x)',20,20);
  for(let x = -5.0;x<10.0;x+=0.1){
    let y = LeRU(x);
    point(x*30,-y*50);
  }



}



function step(x) {
  if (x > 0) {
    return 1;
  } else {
    return 0;
  }
}

function sigmoid(x) {
  return 1/(1 + exp(-x));
}

function LeRU(x) {
  return max(0, x);
}
