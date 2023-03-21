function setup() {
  createCanvas(100, 100);
  background(220);
}

let zoff = 0.0;

function draw() {
  zoff += 0.01;
  let xoff = 0.0;
  for (let x = 0; x < 100; x++) {
    let yoff = 0.0;
    for (let y = 0; y < 100; y++) {
      let bright = map(noise(xoff, yoff, zoff), 0, 1, 0, 255);
      stroke(bright);
      point(x, y);
      yoff += 0.01;
    }
    xoff += 0.01;
  }
}
