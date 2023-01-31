let ball1;
let ball2;

function setup() {
  createCanvas(500, 500);
  ball1 = new Ball(250, 250, 10);
  ball2 = new Ball(250, 250, 10);
}

function draw() {
  background(220);
  ball1.display();
  ball2.display();
}
