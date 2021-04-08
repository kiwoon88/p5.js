let fft, song;

function preload(){
  song = loadSound('sky.mp3');
}

function setup(){
  createCanvas(500, 300);
  fft = new p5.FFT();
  song.amp(0.5);
  song.play();
}

function draw(){
  background(60);
  let analyze = fft.analyze();
  noStroke();
  for(let i=0; i<analyze.length; i++){
    stroke(random(255), random(255), random(255));
    let x = map(i, 0, analyze.length, 0, width);
    let y = map(analyze[i], 0, 255, 0, height);
    line(x, height, x, height-y);
  }
}
