let talk;
let recSpeak;

function preload(){
  talk = new p5.Speech();
}

function setup() {
  noCanvas();
  let lang = 'ko';
  recSpeak = new p5.SpeechRec(lang, results);
  recSpeak.start(true, false);
}

function results(){
  if(recSpeak.resultValue){
    createP(recSpeak.resultString);
    talk.setVoice(13); 
    talk.speak(recSpeak.resultString);
  }
}
