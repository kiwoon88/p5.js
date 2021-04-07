let speech;
let inp;
let notice='안녕하세요.  저는 인천 교육과학 정보원에서 근무하는 박기운입니다.             
            여러분을 만나서 대단히 반갑습니다.  
            지금부터 스피치코딩과 관련한 라이브러리 사용법을 학습하겠습니다.';

function setup(){
  noCanvas();
  speech = new p5.Speech();
  inp = createInput('');
  btn = createButton('Text To Speech')
  btn.mousePressed(textToSpeech);
  korea();
}

function korea(){
  speech.speak(notice);
  createP(notice);
}

function textToSpeech(){
  speech.setLang('ko');
  speech.setVoice('Google 한국의');
  speech.speak(inp.value());
}
