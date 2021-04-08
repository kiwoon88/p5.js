let sound;
let env;

function setup() {
  cnv = createCanvas(200, 200);
  env = new p5.Envelope(0.01, 0.5, 1.5, 0.5);
  env.setRange(0.7, 0);
  sound = new p5.Oscillator();
}

function keyPressed(){
  background(random(255), random(255), random(255));    
  switch(key){
    case 'a':
      sound.freq(130);  
      break;
    case 's':
      sound.freq(149);  
      break;
    case 'd':
      sound.freq(167);  
      break;
    case 'f':
      sound.freq(179);  
      break;
    case 'g':
      sound.freq(197);  
      break;
    case 'h':
      sound.freq(223);  
      break;
    case 'j':
      sound.freq(249);  
      break;
    case 'k':
      sound.freq(264);  
      break;
    case 'l':
      sound.freq(131);  
      break;
  }
  sound.start();
  env.play(sound);
}
