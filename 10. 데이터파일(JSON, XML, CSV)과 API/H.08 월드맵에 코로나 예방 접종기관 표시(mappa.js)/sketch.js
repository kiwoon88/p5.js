let cnv;
let myMap;

const mappa = new Mappa('Leaflet');

const options = {
  lat: 37.53096, 
  lng: 126.65239,
  zoom: 7,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
};

function preload(){
  countries = loadJSON('https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=50&serviceKey=7yl8WdZAFrP74iGNsGLwcr%2FnkNSasG8R1s43v2WD32yF90a7qOBjgCoSyW80ypSRCpF7m6hCROyew6pN8BNbiQ%3D%3D');
}

function setup() {
  cnv = createCanvas(800, 600);
  myMap = mappa.tileMap(options);
  myMap.overlay(cnv);
}

function draw(){
  clear();
  let xy = countries.data;  
  for(let i=0; i<xy.length; i++){
    const center = myMap.latLngToPixel(float(xy[i].lng), float(xy[i].lat));
    fill(255, 0, 0);
    ellipse(center.x, center.y, 10, 10);
  }
}
