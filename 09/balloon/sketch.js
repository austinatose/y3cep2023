let m;
function setup() {
  createCanvas(400, 400);
  m = new Balloon();
}

let windoff = 1;

function draw() {
  let wind = createVector(map(noise(windoff), 0, 1, -0.05, 0.05), 0);
  background(224, 224, 224);
  m.applyForce(createVector(0, -0.05)); //helium
  m.applyForce(wind);
  m.update();
  m.display();
  m.checkEdges();
  windoff += 0.1;
}
