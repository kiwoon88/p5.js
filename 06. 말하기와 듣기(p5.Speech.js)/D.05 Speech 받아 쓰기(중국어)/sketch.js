let recSpeak;
let y=30;


function setup() {
  noCanvas();
  let lang = 'zh';
  recSpeak = new p5.SpeechRec(lang, results);
  recSpeak.start(true, false);
}

function results(){
  if(recSpeak.resultValue){
    createP(recSpeak.resultString);
  }
}
