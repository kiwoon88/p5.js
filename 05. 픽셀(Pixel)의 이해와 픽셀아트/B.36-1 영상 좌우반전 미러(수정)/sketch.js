let video;
let img;

function setup() {
  createCanvas(320, 240);
  img = createImage(320, 240);
  video = createCapture(VIDEO);
  video.size(width, height);
}

function draw() {
  background(0);
  img.loadPixels();
  video.loadPixels();

  for(var y=0; y<video.height; y++){
    for(var x=0; x<video.width; x++){
      var index0 = (x+y*video.width)*4;
      var index1 = (video.width-x+1+(y*video.width))*4;
      img.pixels[index1+0] = video.pixels[index0 + 0];
      img.pixels[index1+1] = video.pixels[index0 + 1];
      img.pixels[index1+2] = video.pixels[index0 + 2];
      img.pixels[index1+3] = video.pixels[index0 + 3];
    }
  }
  img.updatePixels();
  image(img,0,0);
}
