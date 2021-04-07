
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0, 200, 220);
  bubble1.show();
  bubble2.show();
  bubble1.move();
  bubble2.move();  
  bubble1.edges();
  bubble2.edges();  
}

let bubble1 = {
  x: 100, 
  y:420, 
  d: 30,
  
  move(){
    this.x += random(-2, 2);
    this.y -= 2;
  },
  
  edges(){
    if(this.y < 0){
      this.x = random(0, width);
      this.y = random(height, height+30);
    }
  },
  
  show(){
    circle(this.x, this.y, this.d);
  }
};

let bubble2 = {
  x: 300, 
  y: 450, 
  d: 25,
  
  move(){
    this.x += random(-2, 2);
    this.y -= 2;
  },
  
  edges(){
    if(this.y < 0){
      this.x = random(0, width);
      this.y = random(height, height+30);
    }
  },
  
  show(){
    fill(200, 0, 150, 150);
    noStroke();
    circle(this.x, this.y, this.d);
  }
};
