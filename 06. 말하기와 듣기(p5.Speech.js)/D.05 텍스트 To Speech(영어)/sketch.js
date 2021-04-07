let talk;
let korea='안녕하세요 저는 박기운입니다. 여러분과 같이 코딩공부를 하게되어 무척 반갑습니다. 앞으로 또 어떤 주제를 학습하게 될지는 저도 모르지만 열심히 함께 합시다.';
let english='Hello everybody, My name is Park kiwoon. Nice to meet you';

function preload(){
  talk = new p5.Speech();
}

function setup() {
  noCanvas();
  btn = createButton("한국어-안녕하세요");
  btn.mousePressed(speechKO);
  btn = createButton("영어-HELLO");
  btn.mousePressed(speechEN);  
}

function speechKO(){
  talk.setVoice(13);
  talk.speak(korea);
}

function speechEN(){
  talk.setVoice(5);
  console.log(talk.name);
  talk.speak(english);
}
