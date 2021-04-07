let img;

function preload(){
  img = loadImage('bird.png');
}

function setup() {
  createCanvas(img.width, img.height);
  background(100);
  getPixels();
}

function getPixels(){
  loadPixels();
  img.loadPixels();

  for(let i = 0; i < img.width*img.height*4; i+=4){
    pixels[i+0] = img.pixels[i+0];
    pixels[i+1] = img.pixels[i+1];
    pixels[i+2] = img.pixels[i+2];
    pixels[i+3] = img.pixels[i+3];
  }

  updatePixels();
}
