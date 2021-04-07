let video;

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(width, height);
}

function draw() {
  background(0);
  loadPixels();
  video.loadPixels();

  for(var y=0; y<video.height; y++){
    for(var x=0; x<video.width; x++){
      var index0 = (x+y*video.width)*4;
      var index1 = (video.width-x+1+(y*video.width))*4;
      pixels[index1+0] = video.pixels[index0 + 0];
      pixels[index1+1] = video.pixels[index0 + 1];
      pixels[index1+2] = video.pixels[index0 + 2];
      pixels[index1+3] = video.pixels[index0 + 3];
    }
  }
  updatePixels();
}
