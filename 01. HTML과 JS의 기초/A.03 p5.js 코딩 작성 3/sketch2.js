function move() {
  circle(x, y, 100);
  if (x < 50 || x > width - 50) {
    xdir = xdir * -1;
  }
  x = x + xdir * 5;
}
