let inp;

function setup() {
  createCanvas(400, 400);
  inp = createInput('입력하세요!'); //'password' 옵션
  inp.input(inputData,text);
}

function inputData(){
  clear();
  let w=inp.value();
  stroke(255);
  strokeWeight(3);
  fill(255,0,0);
  textSize(42);
  text(w, 20, height/2)
}
