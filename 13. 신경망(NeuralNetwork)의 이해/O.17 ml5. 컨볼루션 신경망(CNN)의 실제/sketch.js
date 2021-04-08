let video;
let videoSize = 64;
let ready = false;
let pixelBrain;
let label;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO, videoReady);
  video.size(videoSize, videoSize);
  video.hide();
  const options = {
    inputs: [64, 64, 4],
    task: 'imageClassification',
    debug: true
  };
  
  pixelBrain = ml5.neuralNetwork(options);
}

function keyPressed(){
  if(key == 't'){
    pixelBrain.normalizeData();
    pixelBrain.train({epochs: 50}, endTrain);
  }else if(key == 's'){
    pixelBrain.saveData();
  }else{
    addExample(key);
  }
}

function endTrain(){
  console.log('학습완료');
  classifyVideo();
}

function classifyVideo(){
  let inputImage = {image: video};
  pixelBrain.classify(inputImage, gotResults);
}

function gotResults(err, results){
  if(err){
    console.error(err);
    return;
  }
  //console.log(results[0].label);
  label = results[0].label;
  classifyVideo();
}

function addExample(label){
  let inputImage = {image: video};
  let target = {label};
  console.log('이미지 추가: '+label);
  pixelBrain.addData(inputImage, target);
}


function videoReady(){
  ready = true;
}

function draw() {
  background(220);
  if(ready){
    image(video, 0, 0, width, height);
  }
  
  if(label == 'y'){
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);
    text("안녕", width/2, height/2);
  }else if(label == 'n'){
    textSize(64);
    textAlign(CENTER, CENTER);
    fill(255);
    text("누구 없어요?", width/2, height/2);
  }
}
