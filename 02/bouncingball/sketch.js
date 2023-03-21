let ball1;
let ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Ball(250, 250, 30);
  ball2 = new Ball(250, 250, 30);
}

function draw() {
  background(220);
  ball1.display();
  ball2.display();
}
