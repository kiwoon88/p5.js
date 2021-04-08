let txt1, back;
let addtxt=['제목: 청노루',
  '',
  '지은이: 박목월',
  '',
  '머언 산 청운사',
  '낡은 기와집',
  '',
  '산은 자하산',
  '봄눈 녹으면',
  '',
  '느릅나무',
  '속잎 피어나는 열두 굽이를',
  '',
  '청노루',
  '맑은 눈에',
  '',
  '도는',
  '구름.'];

function preload(){
  back = loadImage('back.jpg');
  txt = loadStrings('나그네.txt');
  koFont = loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/행복고흥B.woff');
}

function setup() {
  createCanvas(back.width, back.height);
  background(back, 0, 0);
  textFont(koFont, 32);
  fill(255, 255, 0);
  for(let i=0; i<txt.length; i++){
    text(txt[i], 50, i*27+50);
  }
  btn_save = createButton('저장하기');
  btn_save.mousePressed(save_poem);
}

function save_poem(){
  background(back, 0, 0);
  txt.push('');
  txt.push('-----------------');
  txt.push('');
  for(let i=0; i<addtxt.length; i++){
    text(addtxt[i], 50, i*27+50);
    txt.push(addtxt[i]);
  }

  saveStrings(txt, '박목월.txt');
}
