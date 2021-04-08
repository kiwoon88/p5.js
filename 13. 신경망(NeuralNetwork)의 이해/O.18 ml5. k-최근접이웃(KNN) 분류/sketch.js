//https://observablehq.com/@nsthorat/how-to-build-a-teachable-machine-with-tensorflow-js

let video;
let features;
let knn
let label = '학습이 필요해';
let ready = false;

function setup() {
  createCanvas(160, 120);
  video = createCapture(VIDEO);
  video.size(160, 120);
  video.hide();
  features = ml5.featureExtractor("MobileNet", modelReady);
  knn = ml5.KNNClassifier();
  frameRate(15);
}

function gotResult(err, results){
  if(err){
    console.error(err);
    return;
  }
  //console.log(results);
  label = results.label;
  goClassify();
}

// function mousePressed(){
//   if(knn.getNumLabels()){
//   const logits = features.infer(video);
//   //console.log(logits);
//   //logits.print();
//   //console.log(logits.dataSync());
//   knn.classify(logits, gotResult);
//   }
// }

function goClassify(){
  const logits = features.infer(video);
  knn.classify(logits, gotResult);
}

function keyPressed(){
  const logits = features.infer(video);
  if(key == 'l'){
    knn.addExample(logits, 'left');
    console.log('left');
  }else if(key == 'r'){
    knn.addExample(logits, 'right');
    console.log('right');
  }else if(key == 'e'){
    knn.addExample(logits, 'stop');
    console.log('stop');
  }else if(key == ' '){
    ready = true;
  }
}

function modelReady(){
  console.log("model ready!!");
}

function draw() {
  image(video, 0, 0);
  if(ready && knn.getNumLabels() > 0){
    goClassify();
  }
  textAlign(CENTER);
  textSize(32);
  fill('#FFFF00');
  text(label, width/2, height-5);
}
