let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
let engine;
let world;
let particles = [];
let plinkos = [];
let cols = 10;
let rows = 10;

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;
  newParticle();
  let spacing = width/cols;
  for(let i=0; i<cols; i++){
    for(let j=0; j<rows; j++){
      let x = i * spacing;
      if(j % 2 == 0){
        x += spacing/2;
      }
      let y = spacing + j * spacing;
      let p = new Plinko(x, y, 4);
      plinkos.push(p);
    }
  }
}

function newParticle(){
  let p = new Particle(random(280, 310), 50, 10);
  particles.push(p);
}


function draw() {
  if(frameCount % 60 == 0) {
    newParticle();
  }
  
  background(51);
  Engine.update(engine);
  for(let i=0; i<particles.length; i++){
    particles[i].show();
  }
  for(let i=0; i<plinkos.length; i++){
    plinkos[i].show();
  }
  
}
