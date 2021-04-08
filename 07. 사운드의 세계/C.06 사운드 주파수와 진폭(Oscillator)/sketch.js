let osc, amp;

function setup(){
  createCanvas(400, 400);
  osc = new p5.Oscillator('sine');
  osc.start();
}

function draw(){
  background('#AADD00');
  circle(mouseX, mouseY, 50);
  freq = map(mouseX, 0, width, 30, 3000);   //주파수0~3000Hz 
  amp = map(mouseY, 0, height, 1, 0);       //진폭 0~1
  let red = map(amp, 0, 1, 0, 255);
  let blue = map(freq, 30, 3000, 0, 255);
  fill(red, 0, blue);
  osc.freq(freq);
  osc.amp(amp);
  textAlign(CENTER, CENTER);
  text(int(freq), width/2, height/2-10);
  text(round(amp,2), width/2, height/2+10);
}
