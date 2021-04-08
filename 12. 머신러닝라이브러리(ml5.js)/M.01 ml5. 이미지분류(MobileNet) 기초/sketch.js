let img;
let imgClassifier;

function preload(){
  img = loadImage('animal1.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  imgClassifier = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady(){
  console.log('이미지분류 모델 로드 완료');
  imgClassifier.classify(img, gotResult);
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  
  console.log(results);
  let label = results[0].label;
  let confidence = results[0].confidence;
  textAlign(CENTER);
  textSize(20);
  stroke(0);
  strokeWeight(5);
  fill('#FFFF00');
  text(label, width/2, height-30)
  text(nf(confidence*100, 0, 1)+' %', width/2, height-5);
}
