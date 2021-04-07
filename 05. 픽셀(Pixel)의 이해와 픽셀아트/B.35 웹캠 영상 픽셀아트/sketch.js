let video;
let mode = 1;

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(16, 12);
  btn = createButton('모드변환');
  //btn = mousePressed(trans);
  //btn.mousePressed(trans = function(){mode*=-1});
  btn.mousePressed(() => {mode*=-1});
  frameRate(30);
  background(0);
}

// function trans(){
//   mode*=-1;
//   console.log(mode);
// }

function draw(){
  background(0);
  if(mode==1){
    circlePixels(); 
  }else{
    squarePixels();
  }
}
  
function circlePixels(){  
  noStroke();
  video.loadPixels();
  for(let y = 0; y < video.height; y++){
    for(let x = 0; x < video.width; x++){
      let xyColor = video.get(x, y);
      fill(xyColor);
      circle(x*20+10, y*20+10, 18);
    }
  }
}

function squarePixels(){
  video.loadPixels();
  for(let y = 0; y < video.height; y++){
    for(let x = 0; x < video.width; x++){
      let xyColor = video.get(x, y);
      fill(xyColor);
      noStroke();
      square(x*20, y*20, 15);
    }
  }
}
