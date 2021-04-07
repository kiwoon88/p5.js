function setup(){
   createCanvas(500, 400, WEBGL);
}

function draw(){
   background('#AADD00');
   rotateX(-0.4);
   rotateY(millis()/1000);
   cone(150, 200, 24, 3, 0);
}
