let video;
let videoSize = 10;
let ready = false;
let pixelBrain;
let label;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO, videoReady);
  video.size(videoSize, videoSize);
  video.hide();
  const options = {
    inputs: videoSize * videoSize * 3,
    outputs: 2,
    task: 'classification',
    debug: true
  };
  
  pixelBrain = ml5.neuralNetwork(options);
}

function keyPressed(){
  if(key == 't'){
    //pixelBrain.normalizeData();
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
  let inputs = [];
  video.loadPixels();
  for(let i=0; i<video.pixels.length; i+=4){
    let r = video.pixels[i+0] / 255;
    let g = video.pixels[i+1] / 255;
    let b = video.pixels[i+2] / 255;
    inputs.push(r, g, b);
  }
  pixelBrain.classify(inputs, gotResults);
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
  let inputs = [];
  video.loadPixels();
  for(let i=0; i<video.pixels.length; i+=4){
    let r = video.pixels[i+0] / 255;
    let g = video.pixels[i+1] / 255;
    let b = video.pixels[i+2] / 255;
    inputs.push(r, g, b);
  }
  let target = [label];
  console.log(inputs.length);
  console.log(target);
 
  pixelBrain.addData(inputs, target);
}


function videoReady(){
  ready = true;
}

function draw() {
  background(220);
  if(ready){
    video.loadPixels();
    let w = width / videoSize;
    for(let y = 0; y < video.height; y++){
      for(let x = 0; x < video.width; x++){
        let xy= (x + y*video.width)*4;
        let r = video.pixels[xy+0];
        let g = video.pixels[xy+1];
        let b = video.pixels[xy+2];
        noStroke();
        fill(r, g, b);
        rect(x*w, y*w, w, w);
      }
    }
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
