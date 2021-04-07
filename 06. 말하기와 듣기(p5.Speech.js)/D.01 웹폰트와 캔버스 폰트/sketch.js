let koFont;

function preload(){
  koFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.2/Cafe24Dangdanghae.woff');  
}

function setup() {
  createCanvas(500,100);
  click=createButton("거참.. 복잡");
}

function draw() {
  background('#00AA66');
  textFont(koFont);
  textSize(24);
  fill(255);
  text("Canvas안에서 text명령으로 적용되는 폰트",0,50);
}
