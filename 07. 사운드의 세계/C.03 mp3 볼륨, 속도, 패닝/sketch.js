let song;
let vol=0.3;
let sliderRate;
let sliderPan;
let img;

function preload(){
  img = loadImage('abba.png');
  song = loadSound('dream.mp3');
}

function setup(){
  createCanvas(img.width, img.height);
  song.setVolume(0.3);
  button = createButton("play");
  button.mousePressed(playing);
  vol = createSlider(0,1,vol,0.01);
  sliderRate = createSlider(0, 3, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0.5, 0.01);
  background(img);
}


function playing(){
  if(!song.isPlaying()){
    image(img,0,0,600,314);
    song.play();
    button.html("pause");
  }else{
    song.pause();
    button.html("play");
  }
}

function draw(){
  song.rate(sliderRate.value());
  song.pan(sliderPan.value());
  song.setVolume(vol.value());
}
