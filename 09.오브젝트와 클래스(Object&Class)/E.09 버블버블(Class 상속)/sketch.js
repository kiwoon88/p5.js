let bubble = new Array(500);
let box = new Array(500);

function setup() {
  createCanvas(500, 400);
  for(let i=0; i<bubble.length; i++){
    bubble[i] = new Bubble();
    box[i] = new Box();
  }
}

function draw() {
  background(0, 200, 220);
  for(let i=0; i<bubble.length; i++){
    bubble[i].show();
    box[i].show();
    bubble[i].move();
    box[i].move();
  }
}
