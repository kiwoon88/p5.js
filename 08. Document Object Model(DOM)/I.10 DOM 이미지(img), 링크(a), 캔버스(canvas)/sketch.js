function setup() {
  createCanvas(400, 100);
  background('#FF00FF');
  fill(255, 255, 0);
  rectMode(CENTER);
  rect(width/2, height/2, 100, 80);
  webDocument();
}

function webDocument(){
  createSpan('<br>');
  createImg('https://p5js.org/assets/img/p5js.svg', '');
  createSpan('<br>');
  createA('https://p5js.org/', 'p5js.org 로 이동');
  createSpan('<br>');
  createImg('https://opengameart.org/sites/default/files/styles/medium/public/dungeon_7.png', '');
  createSpan('<br>');
  createA('https://opengameart.org/', '게임 스프라이트를 얻을 수 있는 곳');
}
