let video;
let threshold;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  threshold = createSlider(0, 255, 0, 10);
}

function draw(){
  loadPixels();
  video.loadPixels();

  for(let i = 0; i < video.width*video.height*4; i+=4){
    let gray = (video.pixels[i+0]+video.pixels[i+0]+video.pixels[i+0])/3;
    if(gray > threshold.value()){
      gray = 255;
    }else{
      gray = 0;
    }
    pixels[i+0] = gray;
    pixels[i+1] = gray;
    pixels[i+2] = gray;
    pixels[i+3] = 255;
  }

  updatePixels();
}
