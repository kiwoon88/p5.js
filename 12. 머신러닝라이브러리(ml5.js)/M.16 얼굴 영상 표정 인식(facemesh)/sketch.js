let img;
let facemesh;
let predictions;

function setup() {
  createCanvas(640, 480);
  video = createCapture(640, 480);
  video.hide();
  facemesh = ml5.facemesh(modelReady);
  facemesh.on('predict', gotResult);
}

function draw(){
  facemesh.predict(video);
}

function modelReady(){
  console.log('Facemesh 모델 준비 완료');
  facemesh.predict(video);
}

function gotResult(results){
  predictions = results[0].scaledMesh;
  image(video,0,0);
  for(let i=0; i<predictions.length; i++){
    fill(0,255,0);
    circle(predictions[i][0], predictions[i][1], 3);
  }
}

