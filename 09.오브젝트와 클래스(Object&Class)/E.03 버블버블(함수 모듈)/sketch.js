let x=[], y=[], d=[];
let bubbles = 1000;

function setup() {
  createCanvas(500, 400);
  makeBubble(bubbles);              //버블 만들기
}

function draw() {
  background(0, 200, 220);
  drawBubble(bubbles);              //버블 그리기
  moveBubble(bubbles);              //버블 이동하기
}

function makeBubble(n){
  for(let i=0; i<n; i++){
    x[i] = random(width);
    y[i] = random(height, height*2);
    d[i] = random(5, 30);
  }
}

function drawBubble(n){
  fill(0, 0, 150, 100);
  noStroke();

  for(let i=0; i<bubbles; i++){
    circle(x[i], y[i], d[i]);
  } 
}

function moveBubble(n){
  for(let i=0; i<bubbles; i++){
    x[i] += random(-2, 2);
    y[i] -= 2;
    if(y[i]<0){
      x[i] = random(width);
      y[i] = random(height, height*2);
    }
  }
}
