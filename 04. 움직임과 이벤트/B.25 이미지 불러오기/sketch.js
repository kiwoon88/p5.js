let backImg;
let runImg0;
let runImg1;
let google;

function preload(){
  backImg = loadImage('background.jpg');
  runImg0 = loadImage('run0.png')
}

function setup() {
  createCanvas(backImg.width, backImg.height);
  daum = createImg('https://t1.daumcdn.net/daumtop_chanel/op/20200723055344399.png','');    
  //daum.size(daum.width*0.5, daum.height*0.5);
  //daum.hide();  
  runImg1 = createImg('run1.png','');
  
}

function draw() {
  background(backImg);
  //scale(0.5);
  image(runImg0, 0, 0);
  image(runImg1, 180, 0);
  noLoop();
}
