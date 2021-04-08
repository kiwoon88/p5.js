let cnv;
let label = '';
let confidence;
let labelP;
let labelDiv;
let imgClassifier;

function setup() {
  cnv = createCanvas(400, 400);
  imgClassifier = ml5.imageClassifier('DoodleNet', modelReady);
  clsBtn = createButton('NEW...');
  clsBtn.mousePressed(() => {background(255);})
  labelP = createP('분류 >> ');
  labelDiv = createDiv('정확도 >> ');
  background(255);
}

function modelReady(){
  console.log('이미지분류 모델 로드 완료');
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  console.log(results);
  label = results[0].label;
  confidence = results[0].confidence;
  labelP.html('분석 >> '+label);
  labelDiv.html('정확도 >> '+nf(confidence*100, 0, 1)+' %');
}

function mouseReleased(){
  imgClassifier.classify(cnv, gotResult);  
}

function draw(){
  strokeWeight(16);
  stroke(0);
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
