function setup() {
  createCanvas(400, 400);
  pickup = createColorPicker('#FF0000');
  pickup.position(0, height+20);
  pickup.size(100,30);
}

function draw() {
  background(pickup.color());
}
