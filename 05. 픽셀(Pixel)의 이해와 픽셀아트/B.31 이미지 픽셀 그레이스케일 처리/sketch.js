let img;

function preload(){
  img = loadImage('bird.png');
}

function setup() {
  createCanvas(img.width, img.height);
  background(100);
  grayscale();
}

function grayscale(){
  loadPixels();
  img.loadPixels();

  for(let i = 0; i < img.width*img.height*4; i+=4){
    let gray = (img.pixels[i+0]+img.pixels[i+1]+img.pixels[i+2])/3;
    pixels[i+0] = gray;
    pixels[i+1] = gray;
    pixels[i+2] = gray;
    pixels[i+3] = 255;
  }

  updatePixels();
}
