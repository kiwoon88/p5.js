let xml, data, label;
let n = 0;
let itemName = [];

function preload(){
  let file = 'MesureDnsty.xml';
  xml = loadXML(file);  
}

function setup() {
  createCanvas(500, 600);
  btn_prev = createButton('<< 이전');
  btn_next = createButton('다음 >>');
  btn_prev.position(10, height-30);
  btn_next.position(width-75, height-30);
  btn_prev.mousePressed(prevShow);
  btn_next.mousePressed(nextShow);
  show(xml);
}

function show(gotData){
  label = gotData.getChildren('item');
  let items = label[0].listChildren('item');
  itemName[0] = '';
  for(let i=0; i<items.length;i++){
    if(items[i] != '#text'){
      itemName.push(items[i]);
    }
  }
  data = gotData.getChildren('item');
  dataShow(n);
}

function dataShow(n){
  background(220);
  if(n==0){
    btn_prev.hide();
  }else{
    btn_prev.show();
  }
  if(n==label.length-1){
    btn_next.hide();
  }else{
    btn_next.show();
  }
  let content = split(data[n].getContent(),',');
  textSize(26);
  textAlign(CENTER);
  text('[도시대기 측정 결과]', width/2, 40);
  textAlign(LEFT);
  textSize(16);
  for(let i=1; i<content.length-2;i++){
    fill(0, 0, 255);
    text(itemName[i]+' : ', 100, 50+i*26);
    fill(0);
    text(content[i], 250, 50+i*26);
  }
}

function prevShow(){
  if(n != 0){
    n--;
  }
  dataShow(n);
}

function nextShow(){
  if(n != label.length-1){
    n++;
  }
  dataShow(n);
}

