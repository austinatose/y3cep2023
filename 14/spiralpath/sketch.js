let r = 0;
let theta = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  push();
  translate(width / 2, height / 2);
  let x = r * cos(theta);
  let y = r * sin(theta);

  fill(255, 0, 0);
  strokeWeight(0);
  ellipse(x, y, 5, 5);

  r += 0.3;
  theta += 10;
  pop();
}