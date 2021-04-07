let bubble1 = {x: 100, y:420, d: 30};
let bubble2 = {x: 300, y:450, d: 25};

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0, 200, 220);
  fill(200, 0, 150, 150);
  noStroke();

  circle(bubble1.x, bubble1.y, bubble1.d);
  circle(bubble2.x, bubble2.y, bubble2.d);

  bubble1.x += random(-2, 2);
  bubble1.y -= 2;
  bubble2.x += random(-2, 2);
  bubble2.y -= 2;

  if(bubble1.y<0){
      bubble1.x = random(width);
      bubble1.y = random(height, height*2);
  }
  if(bubble2.y<0){
      bubble2.x = random(width);
      bubble2.y = random(height, height*2);
  }
}
