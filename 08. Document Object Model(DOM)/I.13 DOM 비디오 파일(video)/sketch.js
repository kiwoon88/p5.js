let movie;
let btn_play, btn_pause, sld_vol;

function setup(){
  noCanvas();
  movie = createVideo('led_flowers.mp4');
  btn_play = createButton('PLAY');
  btn_pause = createButton('PAUSE');
  sld_vol = createSlider(0, 1, 0.5, 0.01);
  btn_play.mousePressed(moviePlay);
  btn_pause.mousePressed(moviePause);
}

function moviePlay(){
  movie.loop();
}

function moviePause(){
  movie.pause();
}

function draw(){
  movie.volume(sld_vol.value());
}
