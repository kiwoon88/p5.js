//Try to speak the following commands to your microphone: 
//'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'
//'nine', 'up', 'down', 'left', 'right', 'go', 'stop', 'yes', and 'no'
//in addition to 'background_noise' and 'unknown'

let classifier;
let label='준비';
let confidence=0.0;
const options = { probabilityThreshold: 0.95 };

function preload() {
  classifier = ml5.soundClassifier('SpeechCommands18w', options, ready);
}

function ready(){
  label = '시작';
}

function setup() {
  createCanvas(500, 300);
  background('#AAEE00');
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
  confidence = results[0].confidence;
}

function draw(){
  rectMode(CENTER);
  fill(255, 255, 0);
  rect(width/2, height/2, 300, 200);
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text('단어 : ' + label, width/2, height/2-10);
  text('정확도 : '+nf(confidence*100,0,1), width/2, height/2+30);
}
