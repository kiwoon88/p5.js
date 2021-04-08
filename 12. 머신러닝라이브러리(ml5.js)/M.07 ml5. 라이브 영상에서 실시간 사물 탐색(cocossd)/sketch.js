let video;
let detector;
let objects = [];

function preload() {
  video = createCapture(VIDEO);
  video.hide();
}

function setup() {
  createCanvas(640, 480);
  detector = ml5.objectDetector('cocossd', modelReady);
}

function modelReady() {
  console.log('모델 준비 완료!');
  videoClassify();
}

function videoClassify(){
  detector.detect(video, gotResult);
}

function gotResult(err, results) {
  if (err) {
    console.log(err);
    return;
  }
  objects = results;
}

function draw() {
  image(video, 0, 0);
  for (let i = 0; i < objects.length; i++) {
    noFill();
    stroke(255, 255, 0);
    strokeWeight(1)
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    textSize(16);
    strokeWeight(5);
    fill(255, 0, 0);
    text(objects[i].label, objects[i].x + 5, objects[i].y + 12);
  } 
  videoClassify();
}
