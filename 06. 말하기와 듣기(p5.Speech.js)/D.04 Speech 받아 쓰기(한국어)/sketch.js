let recSpeak;
let kofont;
let y=20;

function preload(){
  koFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/행복고흥L.woff');  
}

function setup() {
  createCanvas(500, 400);
  background(220);
  let lang = 'ko';
  recSpeak = new p5.SpeechRec(lang, results);
  recSpeak.start(true, false);
}

function results(){
  if(recSpeak.resultValue){
    fill(0);
    textFont(koFont,24);
    text(recSpeak.resultString,10,y);
    y+=25;
  }
}
