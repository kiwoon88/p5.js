let detector;
let img;

function preload(){
  img = loadImage('elephant1.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  detector = ml5.objectDetector('cocossd', modelReady);
}

function modelReady() {
  console.log('모델 준비 완료!');
  detector.detect(img, gotResult);
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  console.log(results);
}
