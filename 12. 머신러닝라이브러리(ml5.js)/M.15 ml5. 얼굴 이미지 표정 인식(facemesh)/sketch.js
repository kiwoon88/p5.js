let img;
let facemesh;
let predictions;

function preload(){
  img = loadImage('face1.png', imageReady);
}

function setup() {
  createCanvas(img.width, img.height);
  image(img,0,0);
}

function imageReady(){
  facemesh = ml5.facemesh(modelReady);
  facemesh.on('predict', gotResult);
}

function gotResult(results){
  console.log(results);
  predictions = results[0].scaledMesh;
  for(let i=0; i<predictions.length; i++){
    fill(0,255,0);
    circle(predictions[i][0], predictions[i][1], 3);
  }
}

function modelReady(){
  console.log('Facemesh 모델 준비 완료');
  facemesh.predict(img);
}
