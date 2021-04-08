let radio;
let img=[];

function preload(){
  img[0] = loadImage('data/1.jpg');
  img[1] = loadImage('data/2.jpg');
  img[2] = loadImage('data/3.jpg');
  img[3] = loadImage('data/4.jpg');
}

function setup() {
  createCanvas(500, 400);
  radio = createRadio();
  radio.option(0, '초등학교');
  radio.option(1, '중학교');
  radio.option(2, '고등학교');
  radio.option(3, '대학교');
  radio.position(20, 20);
  radio.changed(radio_selected);
  background(220);
}

function draw() {
  //background(220);
}


function radio_selected(){
  background(220);  
  image(img[radio.value()],0,0,width,height);    
}
