let csv;
let ko_data;

function preload(){
  csv = loadTable('Military Expenditure.csv', 'csv', 'header');
}

function setup() {
  createCanvas(610, 500);
  background(100);
  analyze();
  graph();
}

function analyze(){
  let tot_row = csv.getRowCount();
  let tot_col = csv.getColumnCount();
  createDiv('데이터 행의 수 : '+tot_row);
  createDiv('데이터 열의 수 : '+tot_col);
  ko_data = csv.findRows('South Korea', 'Name');
  for(let i=0; i<ko_data[0].arr.length; i++){
    createDiv(csv.columns[i]+' : '+ko_data[0].arr[i]);
  }
}

function graph(){
  let x1 = 10, y1 = height-30, x2 = width-50, y2 = height - 20;
  line(x1, y1, width-x1, y1);
  rectMode(CORNERS);
  fill(230);
  rect(x1, y1, width-x1, height-y1);
  let xCoords = [];
  let yCoords = [];
  rectMode(CORNERS);
  fill(0,200,255);
  for(let i = 4; i< ko_data[0].arr.length ; i++){
     xCoords[i] = x1+(i-4)*10;
     yCoords[i] = ko_data[0].arr[i];
     rect(xCoords[i], y1, xCoords[i]+10, y1-yCoords[i]/100000000);
  }
  fill(255, 255, 0);
  textSize(16);
  textAlign(CENTER);
  text('대한민국 군사비 지출(1960~2018년)', width/2, 20);
}
