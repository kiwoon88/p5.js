let xml;
let data;
let imgUrl = [];
let sat = 0;

function preload(){
  //천리안위성사진
  xml = loadXML('satlit.xml');
  //레이더
  //xml = loadXML('satlit-1.xml'); 
}

function setup() {
  noCanvas();
  background(220);
  data = xml.getChildren()[1].getChildren()[1].getChildren()[0].getChildren();
  for(let i=0; i<data.length; i++){
    imgUrl[i] = data[i].getContent();
  }
  frameRate(30);
}

function draw(){
  let img = createImg(imgUrl[sat],'천리안');
  img.size(700, 700);
  img.position(10,10);
  if(sat==data.length-1){
    sat=0;
  }else{
    sat++;
  }
}

