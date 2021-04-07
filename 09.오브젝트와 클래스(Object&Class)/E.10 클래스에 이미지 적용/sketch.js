let face = [];
let img_back;
let img_face;
let numFace = 100;

function preload(){
  img_back = loadImage('backImg.jpg')
  img_face = loadImage('face.png');
}

function setup() {
  createCanvas(img_back.width, img_back.height);
  for(let i=0; i<numFace; i++){
    face_width = random(30, 60);
    face_height = face_width;
    face[i] = new Face(face_width, face_height);
  }
}

function draw() {
  background(img_back);
  for(let i=0; i<face.length; i++){
    face[i].down();
    face[i].show();
  }
}

class Face{
  constructor(w, h){
    this.x = random(width-w);
    this.y = -random(height+h);
    this.width = w;
    this.height = h;
    this.img = img_face;
  }

  show(){
    image(this.img, this.x, this.y, this.width, this.height);
  }

  down(){
    this.y += 2;
    if (this.y > height) {
      this.x = random(width-this.width);
      this.y = -random(height+this.height);
    }
  }
}
