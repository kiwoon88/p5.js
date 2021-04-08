let song;
let amp;

function preload(){
  song = loadSound('face.mp3');
}

function setup(){
  createCanvas(300,300);
  song.play();
  song.setVolume(0.5);
  amp = new p5.Amplitude();
}

function draw(){
  //background(0);
  song.rate(1);
  let vol = amp.getLevel();
  noStroke();
  fill(random(255), random(255), random(255), 255);
  ellipse(width/2, height/2,vol*1000);
}
