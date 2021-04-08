let setting = 0.3;
let song;
let img;
let btn;
let vol;
let pan=0;

function preload(){
  img = loadImage("oldpop.jpg");
  song = loadSound("popsong.mp3");
}  

function setup() {
  createCanvas(280, 278);
  btn = createButton("PLAY");
  btn.mousePressed(music);
  vol = createSlider(0,1,setting,0.01);
  pan = createSlider(-1.0,1.0,0,0.01);
  background(255);
}

function music(){
  if(song.isPlaying()){ //연주중이라면~
    song.pause(); //노래 멈춤
    btn.html("PLAY");
    background(255);
  }else{
    song.play(); //노래시작
    btn.html("PAUSE");
    image(img,0,0);
  }
}

function draw() {
  song.setVolume(vol.value());
  song.pan(pan.value());
}
