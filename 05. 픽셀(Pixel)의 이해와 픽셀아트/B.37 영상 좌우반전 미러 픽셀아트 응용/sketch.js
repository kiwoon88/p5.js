let video;
let vScale = 16;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  background(0);
  loadPixels();
  video.loadPixels();
  noStroke();
  
  for(var y=0; y<video.height; y++){
    for(var x=0; x<video.width; x++){
      var index = (video.width-x+1+(y*video.width))*4;
      var gray = (video.pixels[index+0]+video.pixels[index+1]+video.pixels[index+2])/3;
      var w = map(gray, 0, 255, 0, vScale);
      fill(gray);
      rect(x*vScale, y*vScale, w);
    }
  }
}
