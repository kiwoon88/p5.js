var sel = 'C';
let model;
var flag = 'collection';

function setup() {
  createCanvas(400, 400);
  background(255);
  //console.log('ml5 version', ml5.version);
  
  const options = {
    inputs: ['x', 'y'],
    outputs: ['label'],
    task: 'classification',
    debug: true
  };
  
  model = ml5.neuralNetwork(options);
  model.loadData('mousePoint.json', dataLoaded);
  const modelInfo = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  }
  model.load(modelInfo, modelLoaded);
}

function modelLoaded(){
  console.log('모델 불러오기 완료');
  flag = 'prediction';
}

function dataLoaded(){
  console.log(model.neuralNetworkData.data.raw);
  var data = model.neuralNetworkData.data.raw;
  for(var i=0; i<data.length; i++){
    stroke(0);
    ellipse(data[i].xs.x, data[i].xs.y, 24, 24);
    textAlign(CENTER, CENTER);
    text(data[i].ys.label, data[i].xs.x, data[i].xs.y);
  }
  flag = 'training';
  console.log('학습 시작');
  // model.normalizeData();
  // var options = {
  //   epochs: 200,
  //   batchs: 5
  // };
  // model.train(options, startTrain, endTrain);
}


function mousePressed(){
  var data = [mouseX, mouseY];
  
  if(flag == 'collection'){
  var label = [sel];
    model.addData(data, label);
    stroke(0);
    ellipse(mouseX, mouseY, 24, 24);
    textAlign(CENTER, CENTER);
    text(sel, mouseX, mouseY);
  }else if(flag =='prediction'){
    model.classify(data, gotResults);
  }
}

function gotResults(err, results){
  if(err){
    console.log(err);
    return;
  }
  var output = results[0].label;
    stroke(0);
    fill(100, 0, 100, 150);
    ellipse(mouseX, mouseY, 24, 24);
    textAlign(CENTER, CENTER);
    text(output, mouseX, mouseY);
}

function keyPressed(){
  if(key == 't'){
    const options = {
      epochs: 200,
      batchs: 5
    }
    model.normalizeData();
    model.train(options, startTrain, endTrain);
    flag = 'training';
  }else if(key == 's'){
    model.saveData('mousePoint');
  }else if(key == 'm'){
    model.save('model');
  }else{
    sel = key.toUpperCase();
  }
}

function startTrain(epoch){
  console.log('epoch => '+epoch);
}

function endTrain(){
  console.log('학습 완료');
  flag = 'prediction';
}
