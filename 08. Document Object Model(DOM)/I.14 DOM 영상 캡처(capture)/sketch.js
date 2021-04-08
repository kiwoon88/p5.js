let video;

function setup(){
  createCanvas(640, 520);
  video = createCapture(VIDEO);
  video.hide();
}

function draw(){
  background(0);
  image(video, 0, 0);
  fill(255, 255, 0);
  textSize(24);
  text('여러분 안녕하세요~~ ', 10, height-10);
}
