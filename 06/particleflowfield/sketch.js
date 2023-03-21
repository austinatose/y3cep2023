let vectors = [];
let particles = [];
let noiseScale = 0.01;
let position; 
let btnRestart; 

function setup() {
  createCanvas(400, 400);

  btnRestart = createButton("Restart");
  btnRestart.mousePressed(restartAnim);
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 20) {
      //let v = createVector(random(-1, 1), random(-1, 1));
      let angle = noise(x * noiseScale, y * noiseScale) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      vectors.push(v);
    }
  }
  
  position = createVector(width/2, height/2);

  for (let j = 0; j < 40; j+=10) {
    for (let k = 0; k < 40; k+=10) {
      let p = new Particle(j, k);
      particles.push(p);
    }
  }
}


function restartAnim() {
  particles.splice(0, particles.length);

  for (let j = 0; j < 40; j+=10) {
    for (let k = 0; k < 40; k+=10) {
      let p = new Particle(j, k);
      particles.push(p);
    }
  }

  background(220);
}

function draw() {
  background(220);

  for (let i = 0; i < particles.length; i++) {
    particles[i].move(vectors);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
}
