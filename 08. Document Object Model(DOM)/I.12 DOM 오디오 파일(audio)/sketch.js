let music;
let btn_play, btn_stop, sld_vol;

function setup() {
  noCanvas();
  music = createAudio('music.mp3');
  btn_play = createButton('PLAY');
  btn_play.mousePressed(musicPlay);
  btn_stop = createButton('STOP');
  btn_stop.mousePressed(musicStop);
  createDiv('<br>');
  sld_vol = createSlider(0, 1, 0.5, 0.01);
  btn_play.size(150, 20);
  btn_stop.size(150, 20);
  sld_vol.size(300, 20);
}

function musicPlay() {
  music.play();
}

function musicStop(){
  music.stop();
}

function draw(){
  music.volume(sld_vol.value());
}
