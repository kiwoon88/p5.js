let bubble = [];
let bubbles = 1000;
//let bubble = new Array(1000);

function setup() {
  createCanvas(500, 400);
  for(let i=0; i<bubbles; i++){
    bubble[i] = {x:random(width), y:random(height, height*2), d:random(5, 30),
                 move(){
                   this.x += random(-2, 2);
                   this.y -= 2;
                 },
                 edges(){
                   if(this.y < 0){
                     this.x = random(width);
                     this.y = random(height, height+50);
                   }
                 },
                 show(){
                   fill(200, 0, 150, 150);
                   noStroke();
                   circle(this.x, this.y, this.d);
                 }
                };
  }
}

function draw() {
  background(0, 200, 220);

  for (let i=0; i<bubbles; i++){      
    bubble[i].show();
    bubble[i].move();
    bubble[i].edges();
  }    
}
