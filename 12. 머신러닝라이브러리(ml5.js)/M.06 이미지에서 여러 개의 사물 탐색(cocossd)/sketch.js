let detector;
let img;
let objects = [];

function preload(){
  img = loadImage('racing3.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  detector = ml5.objectDetector('cocossd', modelReady);
  image(img,0,0);  
}

function modelReady() {
  console.log('모델 준비 완료!');
  detector.detect(img, gotResult);
}

function gotResult(err, results){
  if(err){
    console.log(err);
    return;
  }
  objects = results;
  for(let i=0; i<objects.length; i++){
    noFill();
    stroke(255, 255, 0);
    strokeWeight(1)
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    textSize(16);
    strokeWeight(5);    
    fill(255, 0, 0);
    text(objects[i].label, objects[i].x+5, objects[i].y+12);
  }
}
