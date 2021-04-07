function setup() {
  createCanvas(600, 600);
  background(255,255,0);
  //randomSeed(1);
  frameRate(10);
}

function draw() {
  console.log(random());
  fill(random(255), random(255), random(255), random(50, 255));
  circle(random(600), random(600), random(20, 200));
}
