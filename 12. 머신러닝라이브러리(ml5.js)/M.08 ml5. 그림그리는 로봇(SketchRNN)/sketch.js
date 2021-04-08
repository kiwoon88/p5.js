let drawbot;
let p_pen = 'down';
let x, y;
let newDrawPoint;
let seed = [];
let canvas;

function setup() {
  canvas = createCanvas(640, 480);
  //canvas.hide();
  sel = createSelect();
  for(let i=0; i<models.length; i++){
    sel.option(models[i]);
  }
  sel.selected('angel');
  sel.position(10, 65);
  sel.changed(model_reload);
  drawbot = ml5.sketchRNN(sel.value(), modelReady);  
  cls_btn = createButton('다시 그리기');
  cls_btn.mousePressed(clearCanvas);
  background(220);
}

function modelReady() {
  canvas.show();
  canvas.mouseReleased(startDrawbot);
}

function model_reload(){
  drawbot = ml5.sketchRNN(sel.value(), modelReady);  
}

function clearCanvas() {
  background(220);
  seed = [];
  drawbot.reset();
}

function startDrawbot() {
  x = mouseX;
  y = mouseY;
  drawbot.generate(seed, gotStroke);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255,0,0);
    strokeWeight(10);
    line(pmouseX, pmouseY, mouseX, mouseY);

    let drawPoint = {
      dx: mouseX - pmouseX,
      dy: mouseY - pmouseY,
      pen: 'down'
    };
    seed.push(drawPoint);
  }

  if (newDrawPoint) {
    if (p_pen == 'down') {
      stroke(0);
      strokeWeight(2);
      line(x, y, x + newDrawPoint.dx, y + newDrawPoint.dy);
    }
    x += newDrawPoint.dx;
    y += newDrawPoint.dy;
    p_pen = newDrawPoint.pen;

    if (newDrawPoint !== 'end') {
      newDrawPoint = null;
      drawbot.generate(gotStroke);
    }
  }
}

function gotStroke(err, s) {
  newDrawPoint = s;
}
