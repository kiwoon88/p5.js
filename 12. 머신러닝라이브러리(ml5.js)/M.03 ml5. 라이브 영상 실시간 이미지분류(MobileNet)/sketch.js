let video;
let classify = false;
let label = '';
let confidence;
let imgClassifier;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  imgClassifier = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady(){
  console.log('이미지분류 모델 로드 완료');
  imgClassifier.classify(video, gotResult);
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  console.log(results);
  label = results[0].label;
  confidence = results[0].confidence;
  classify = true;
  imgClassifier.classify(video, gotResult);  
}

function draw(){
  image(video, 0, 0);
  if(classify){
    textAlign(CENTER);
    textSize(20);
    stroke(0);
    strokeWeight(5);
    fill('#FFFF00');
    text(label, width/2, height-30)
    text(nf(confidence*100, 0, 1)+' %', width/2, height-5);
  }
}
