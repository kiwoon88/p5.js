let particles = [];

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);
  let p = new Particle(width/2, 20);
  for(let i=0; i<3; i++){
    particles.push(p);
  }

  for(let i=0; i < particles.length; i++){
    particles[i].show();
    particles[i].update();
    if(particles[i].isDead()){
      particles.splice(i, 1);
    }
  }
}


class Particle {
  constructor(x, y){
    this.acceleration = new p5.Vector(0, 0.05);
    this.velecity = new p5.Vector(random(-1, 1), random(-1, 1));
    this.location = new p5.Vector(x, y);
    this.lifespan = 255;
  }
  
  update(){
    this.velecity.add(this.acceleration);
    this.location.add(this.velecity);
    this.lifespan -= 2;
  }
  
  isDead(){
    return this.lifespan < 0;
  }
  
  show(){
    stroke(0, this.lifespan);
    noFill();
    ellipse(this.location.x, this.location.y, 10, 10);
  }
}
