
let x=[], y=[], d=[];
let bubbles = 1000;

function setup() {
  createCanvas(500, 400);
  for(let i=0; i<bubbles; i++){
    x[i] = random(width);
    y[i] = random(height, height*2);
    d[i] = random(5, 30);
  }
}

function draw() {
  background(0, 200, 220);
  fill(0, 0, 150, 100);
  noStroke();

  for(let i=0; i<bubbles; i++){
    circle(x[i], y[i], d[i]);
    x[i] += random(-2, 2);
    y[i] -= random(1, 4);
    if(y[i]<0){
      x[i] = random(width);
      y[i] = random(height, height*2);
    }
  }
}
