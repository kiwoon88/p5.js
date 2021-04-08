let img1, img2;
let size=0;
let poseNet;
let poses=[];
let keypointX=[];
let keypointY=[];
let skeletons=[];

function preload(){
  img1 = loadImage('soccer.jpg');
  img2 = loadImage('face.png');
}

function setup() {
  createCanvas(640, 360);
  resizeCanvas(img1.width, img1.height);
  image(img1,0,0);
  poseNet = ml5.poseNet(modelReady);
  poseNet.on('pose', gotResult);
}

function modelReady(){
  poseNet.singlePose(img1);
  console.log('model OK');
}

function gotResult(results){
  poses = results[0].pose.keypoints;
  skeletons = results[0].skeleton;
  fill('#FFFF00');
  stroke('#FF0000');
  strokeWeight(3);
  for(let i = 0; i < poses.length; i++){
    keypointX[i]=round(poses[i].position.x);
    keypointY[i]=round(poses[i].position.y);
    ellipse(keypointX[i], keypointY[i],10);
  }
  stroke('#FFFF00');
  strokeWeight(2);
  for(let i=0; i< skeletons.length; i++){
    line(round(skeletons[i][0].position.x), round(skeletons[i][0].position.y), round(skeletons[i][1].position.x), round(skeletons[i][1].position.y));
  }
  size = dist(keypointX[0],keypointY[0],keypointX[3],keypointY[3]);
  imageMode(CENTER);
  fill(255, 255, 0, 200);
  image(img2,keypointX[0]-3,keypointY[0]-13,size*1.8,size*1.8);
  console.log(poses);
}
