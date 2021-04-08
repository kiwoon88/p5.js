class Plinko {
  constructor(x, y, r){
    let options = {
      restitution: 1,
      friction: 0,
      isStatic: true
    }
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }
  
  show(){
    fill(0, 255, 0);
    stroke(255);
    let pos = this.body.position;
    push();    
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r*2);
    pop();
  }
}
