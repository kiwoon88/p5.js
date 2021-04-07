let back, ship;
let x = 250, y = 200, x1 = 0, y1 = 0;

function preload() {
  back = loadImage('space.jpg');
  ship = loadImage('ship.png');
}

function setup() {
  createCanvas(back.width, back.height);
}

function draw() {
  background(back);
  imageMode(CENTER);
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  } else if (keyIsDown(UP_ARROW)) {
    y -= 5;
  } else if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  y1 -= 20; 
  circle(x1, y1, 10);  
  image(ship, x, y);
  imageMode(CORNER);
    fill(255, 255, 0);
  circle(x, y-ship.height/2, 10);
}

function keyPressed(){
  if( keyCode == 32 || key=='a'){
    x1 = x;
    y1 = y-ship.height/2;
    fill(255, 255, 0);
  }
}
