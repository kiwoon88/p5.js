let img1;
let img2;
let video;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  img1 = createImage(640, 480);
  img2 = loadImage('finch.jpg');
  video.hide();
}

function draw(){
  background(img2);
  img1.loadPixels();
  video.loadPixels();

  for(let i = 0; i < video.width*video.height*4; i+=4){
    img1.pixels[i+0] = video.pixels[i+0];
    img1.pixels[i+1] = video.pixels[i+1];
    img1.pixels[i+2] = video.pixels[i+2];
    img1.pixels[i+3] = 170;
  }

  img1.updatePixels();
  image(img1, 0, 0);
}
