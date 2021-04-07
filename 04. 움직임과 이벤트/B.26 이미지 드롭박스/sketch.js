let dropBox;
let img ;

function setup() {
  dropBox = createCanvas(200, 200);
  background(100);
  dropBox.drop(drop);
}

function drop(file){
  img = createImg(file.data,"","",image_OK);
  console.log(file);
}

function image_OK(){
  resizeCanvas(img.width, img.height);
  background(100);
  image(img,0,0);
}
