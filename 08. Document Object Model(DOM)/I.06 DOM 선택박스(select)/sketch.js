let sel;

function setup() {
  createCanvas(550, 400);
  sel = createSelect();
  sel.option('🍉');
  sel.option('🥝');
  sel.option('🍓');
  sel.option('🍅');
  sel.option('🍺');
  sel.disable('🍺')
  sel.selected(2);
  sel.position(10, 10);
  sel.changed(fruit_pattern);
  fruit_pattern();
}

function fruit_pattern() {
  background(random(255), random(255), random(255));
  for(let i=0; i<50; i++){
    textSize(random(5, 80));
    textAlign(CENTER);
    text(sel.value(), random(width), random(height));
  }
}
