class Bubble{
  constructor(){
    this.x = random(width);
    this.y = random(height, height*2);
    this.d = random(5, 30);
  }

  show(){
    fill(255, 0, 255, 100);
    noStroke();
    circle(this.x, this.y, this.d);
  }

  move(){
    this.x += random(-2, 2);
    this.y -= 2;
    if (this.y < 0) {
      this.x = random(width);
      this.y = random(height, height * 2);
    }
  }
}

class Box extends Bubble{
  constructor(){
    super();
    this.c = color(random(255), random(255), random(255), 100);
  }

  show(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, this.d);
  }
}
