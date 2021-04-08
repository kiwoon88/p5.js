let img;
let handpose;
let fingers=[];
let keypointX = [];
let keypointY = [];

function preload(){
  img = loadImage('paper1.png');
}

function setup() {
  createCanvas(img.width, img.height);
  handpose = ml5.handpose(modelReady);
  handpose.on('predict', gotResult);
}

function modelReady(){
  handpose.predict(img);
}

function gotResult(results){
  fingers = results[0].landmarks;  
  console.log(results);  
}

function draw(){
  image(img, 0, 0);
  fill('#FFFF00');
  stroke('#FF0000');
  strokeWeight(3);
  for(let i = 0; i < fingers.length; i++){
    keypointX[i]=round(fingers[i][0]);
    keypointY[i]=round(fingers[i][1]);
    ellipse(keypointX[i], keypointY[i],10);
  }
  
  stroke('#FFFF00');
  strokeWeight(3);
  line(keypointX[0],keypointY[0],keypointX[1],keypointY[1]);    
  line(keypointX[2],keypointY[2],keypointX[5],keypointY[5]);  
  line(keypointX[5],keypointY[5],keypointX[9],keypointY[9]);    
  line(keypointX[9],keypointY[9],keypointX[13],keypointY[13]);
  line(keypointX[13],keypointY[13],keypointX[17],keypointY[17]);
  line(keypointX[17],keypointY[17],keypointX[0],keypointY[0]);        
  for(let i=0; i<5; i++){
    for(let j=0;j<3;j++){
      line(round(keypointX[j+1+i*4]), round(keypointY[j+1+i*4]), round(keypointX[j+2+i*4]), round(keypointY[j+2+i*4]));
    }
  }
  
}
