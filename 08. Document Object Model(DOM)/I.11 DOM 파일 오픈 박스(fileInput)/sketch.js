let file_btn;

function setup() {
  createCanvas(400, 200);
  file_btn = createFileInput(file_open);
  file_btn.position(100, 30);
  background(220);
}

function file_open(file){
  background(220);
  textSize(16);
  text('πνμΌμ’λ₯ : '+file.type, 100, 80);
  text('πνμΌνμ : '+file.subtype, 100, 110)
  text('πνμΌν¬κΈ° : '+file.size+'byte', 100, 140);
}
