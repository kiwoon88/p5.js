function setup() {
  createCanvas(800, 400);
  background(255);
  for(let y=0; y<height; y+=20){
    for(let x=0; x<width/2; x+=20){
      fill(55+y/4, 0, 55+x/4);
      square(x, y, 20);
    }
  }
  frameRate(10);
}

function draw(){
  rectMode(CENTER);
  translate(600, 200);
  fill(random(255), random(255), random(255), random(50, 255));
  rect(0, 0, random(400), random(400));
}
