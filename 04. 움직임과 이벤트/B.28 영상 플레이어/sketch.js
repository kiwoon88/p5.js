let movie;

function setup() {
  noCanvas();
  movie = createVideo('light.mp4', playMovie);
  movie.size(360,240);
}

function playMovie() {
  movie.loop();
}
