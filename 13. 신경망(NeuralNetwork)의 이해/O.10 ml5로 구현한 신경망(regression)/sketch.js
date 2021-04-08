let model;
let targetLabel = 'C';
let state = 'collection';
let env, wave;
let notes = {
  C: 261.6256,
  D: 293.6648,
  E: 329.6276,
  F: 349.2282,
  G: 391.9954,
  A: 440.0000,
  B: 493.8833,
  H: 523.2512
};

function setup() {
  createCanvas(400, 400);
  const options = {
    inputs: ['x', 'y'],
    outputs: ['freq'],
    task: 'regression',
    debug: 'true',
    learningRate: 0.5
  };
  model = ml5.neuralNetwork(options);
  env = new p5.Envelope();
  env.setADSR(0.05, 0.1, 0.5, 1);
  env.setRange(1.2, 0);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  wave.amp(env);
  background(200);
}

function keyPressed(){
  if(key == 't'){
    state = 'training';
    console.log('학습 시작');
    model.normalizeData();
    let options = {
      epochs: 30,
      //batchs: 5
    }
    model.train(options, whileTraining, finishedTraining);
  }else if(key == 's'){
    model.saveData('mouse-notes.json');
  }else{
    targetLabel = key.toUpperCase();
  }
}

function whileTraining(epoch, loss){
  console.log(`epoch ${epoch}`);
}

function finishedTraining(){
  console.log('학습 종료');
  state = 'prediction';
}

function mousePressed(){
  let inputs = {
    x: mouseX,
    y: mouseY
  }
  if(state =='collection'){
    let targetFreq = notes[targetLabel];
    let outputs = {
      freq: targetFreq
    }

    model.addData(inputs, outputs);
    stroke(0);
    noFill();
    ellipse(mouseX, mouseY, 24);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(targetLabel, mouseX, mouseY);
    wave.freq(targetFreq);
    env.play();
  }else if(state == 'prediction'){
    model.predict(inputs, gotResults);
  }
}

function mouseDragged(){
  let inputs = {
    x: mouseX,
    y: mouseY
  }
  if(state == 'prediction')
    model.predict(inputs, gotResults);
}


function gotResults(err, results){
  if(err){
    console.error(err);
    return;
  }
  console.log(results);
  stroke(0);
  fill(0, 0, 255, 100);
  ellipse(mouseX, mouseY, 24);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(floor(results[0].value), mouseX, mouseY);
  wave.freq(results[0].value);
  env.play();
}
