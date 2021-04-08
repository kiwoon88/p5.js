let cnv;
let img;
let myMap;

const mappa = new Mappa('Leaflet');

const options = {
  lat: 37.53096, 
  lng: 126.65239,
  zoom: 17.5,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload(){
  img = loadImage('face01.png');
}

function setup() {
  cnv = createCanvas(800, 600);
  myMap = mappa.tileMap(options);
  myMap.overlay(cnv);
}

function draw(){
  const myHome = myMap.latLngToPixel(37.53096, 126.65239);   
  clear();
  imageMode(CENTER);
  image(img, myHome.x, myHome.y, 70, 70);
  textAlign(CENTER);
  textSize(16);
  strokeWeight(1);
  stroke(0)
  fill('#FF0000');
  text("박기운's 집", myHome.x, myHome.y - 35);
}
