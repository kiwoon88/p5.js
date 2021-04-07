let bubble1, bubble2;

function setup() {
  createCanvas(500, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  //background(0, 200, 220);
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();
}

class Bubble{
  constructor(){
    this.x = random(width);
    this.y = random(height, height*2);
    this.d = random(5, 30);
    this.c = color(255, 0, 0, 30);
    background('#FFFF00');
  }

  show(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.d);
  }

  move(){
    this.x += random(-2, 2);
    this.y -= 2;
    if (this.y < 0) {
      this.c = color(random(255), random(255), random(255), 30);
      this.x = random(width);
      this.y = random(height, height * 2);
    }
  }
}
