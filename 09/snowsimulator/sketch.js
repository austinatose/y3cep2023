let particles = [];
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
  for (let i = 0; i < particles.length; i++) {
    particles[i].show();
    particles[i].applyGravity();
    particles[i].update();
    if (particles[i].pos.y > 400)
      particles[i].pos.y = 0;
  }
}
