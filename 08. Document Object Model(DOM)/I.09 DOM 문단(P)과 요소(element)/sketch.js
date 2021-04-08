function setup() {
  createCanvas(400, 100);
  background('#AADD00');
  fill('#FF00FF');
  circle(width/2, height/2, 80);
  webDocument();
}

function webDocument() {
  createElement('h1', '안녕하세요');
  createElement('h3', '만나서 반갑습니다.');
  createP('DOM 이란 웹문서(HTML 문서)의 요소들을 객체로 만들어 <br>자바스크립트 등에서 활용가능하도록 만든 문서구조 입니다.');
  createP('HTML의 < span > Tag 를 생성해 주는 p5.js의 함수 createSpan( )')
}
