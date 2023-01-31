let ball1;

function setup() {
  createCanvas(500, 500);
  ball1 = new Ball(250, 250, 10);
}

function draw() {
  background(220);
  ball1.display()
}
