function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  for (var y = 0; y < height + 45; y+=40) {
    for (var x = 0; x < width + 45; x += 40) {
      fill(255, 140);
      ellipse(x, y, 40, 40);
    }
  }
}