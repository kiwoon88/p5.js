function setup() {
  createCanvas(600, 400);
  //createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight);
  background(255, 0, 0);    
  btn = createButton('전체화면');
  btn.position(10, 10);
  btn.mousePressed(() => {
    let fs = fullscreen();
    fullscreen(!fs);
  })
}

function draw(){
  background(255, 0, 0);  
}
