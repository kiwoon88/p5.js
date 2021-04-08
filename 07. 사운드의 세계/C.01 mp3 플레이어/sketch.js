let setting = 0.3;
let song;
let img;
let btn;
let vol;

function preload(){
  img = loadImage("data/oldpop.jpg");
  song = loadSound("data/popsong.mp3");
}  

function setup() {
  createCanvas(280, 278);
  btn = createButton("PLAY");
  btn.mousePressed(music);
  vol = createSlider(0,1,setting,0.01);
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
}
