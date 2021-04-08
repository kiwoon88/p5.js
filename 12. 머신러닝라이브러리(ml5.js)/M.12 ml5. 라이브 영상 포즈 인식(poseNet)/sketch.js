let img1;
let video;
let poseNet;
let poses=[];
let skeletons=[];
let keypointX = [];
let keypointY = [];

function preload(){
  img2 = loadImage('face.png');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotResult);
}

function modelReady(){
  console.log('model OK');
}

function gotResult(results){
  poses = results[0].pose.keypoints;
  skeletons = results[0].skeleton;
}

function draw(){
  imageMode(CORNER);
  image(video, 0, 0);

  fill('#FFFF00');
  stroke('#FF0000');
  strokeWeight(3);
  for(let i = 0; i < poses.length; i++){
    keypointX[i]=round(poses[i].position.x);
    keypointY[i]=round(poses[i].position.y);
    ellipse(keypointX[i], keypointY[i],10);
  }
  stroke('#FFFF00');
  strokeWeight(3);
  for(let i=0; i< skeletons.length; i++){
    line(round(skeletons[i][0].position.x), round(skeletons[i][0].position.y), round(skeletons[i][1].position.x), round(skeletons[i][1].position.y));
  }
  size = round(dist(keypointX[0],keypointY[0],keypointX[3],keypointY[3]));
  imageMode(CENTER);
  image(img2,keypointX[0],keypointY[0]-10,size*2.2,size*2.2);
}
