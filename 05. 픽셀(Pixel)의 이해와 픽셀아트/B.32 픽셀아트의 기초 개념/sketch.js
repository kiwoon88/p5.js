let img;

function preload(){
  img = loadImage('bird.png');
}

function setup() {
  createCanvas(img.width*18, img.height*18);
  background(255);
  btn1 = createButton('픽셀을 원으로 그리기');
  btn2 = createButton('픽셀을 네모로 그리기');
  btn1.mousePressed(circlePixels);
  btn2.mousePressed(squarePixels);
  image(img, 0, 0);
}

function circlePixels(){
  background(0);
  img.loadPixels();
  for(let y = 0; y < img.height; y++){
    for(let x = 0; x < img.width; x++){
      let xyColor = img.get(x, y);
      fill(xyColor);
      noStroke();
      circle(x*18+9, y*18+9, 16);
    }
  }
  image(img, 0, 0);
}

function squarePixels(){
  background(0);
  img.loadPixels();
  for(let y = 0; y < img.height; y++){
    for(let x = 0; x < img.width; x++){
      let xyColor = img.get(x, y);
      fill(xyColor);
      noStroke();
      square(x*18, y*18, 16);
    }
  }
  image(img, 0, 0);
}
