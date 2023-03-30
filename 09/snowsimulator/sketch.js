let particles = [];
let windoff = 1;
let gravity = createVector(0, 0.05);

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 200; i++) {
    let p = new Particle(random(0, 400), random(0, 400));
    particles.push(p);
  }
}

function draw() {
  background(220);
  let wind = createVector(map(noise(windoff), 0, 1, -0.03, 0.03), 0);
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].applyForce(createVector(0, 0.01));
    particles[i].applyForce(wind);
    particles[i].checkEdges();
    particles[i].update();
  }
  windoff += 0.01;
  //log windoff in console
  console.log(windoff);
}
