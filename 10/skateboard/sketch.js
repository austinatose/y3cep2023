let boards = [];

function setup() {
  createCanvas(400, 400);
  boards.push(new Skateboard(100, 1.5));
  boards.push(new Skateboard(150, 0.5));
  boards.push(new Skateboard(250, 2.0));
  s = new SpeedBump(200, 100);
}

function draw() {
  background(6, 97, 21);
  fill(140, 140, 140);
  rect(50, 0, 300, height);
  fill(255, 255, 255);
  rect(190, 0, 10, height);
  s.display();
  for (var i = 0; i < boards.length; i++) {
    let accel = createVector(0, 0.1 * boards[i].mass);

      let c = s.isUnder(boards[i]) ? 0.5 : 0.01; // Coefficient of friction
      let normalf = 1;
      let frictionMag = c * normalf;
      let friction = boards[i].velocity.copy();
      friction.mult(-1);
      friction.normalize();
      friction.mult(frictionMag);
      boards[i].applyForce(friction);


    boards[i].applyForce(accel);
    boards[i].update();
    boards[i].display();
  }
}
