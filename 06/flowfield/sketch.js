let vectors = [];
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
}

function drawVector(v, x, y, s) {
  push();
  // Drawing the vector 
  translate(x, y);
  stroke(0);
  rotate(v.heading());
  line(0, 0, s, 0);
  
  //Drawing the arrow head - optional 
  let arrowsize = 6;
  translate(s,0)
  triangle(0, 0,-arrowsize,-arrowsize/2,-arrowsize,arrowsize/2); 
  
  pop();
}

function restartAnim(){
  position = createVector(width/2, height/2);
}

function draw() {
  background(220);

  for (let i = 0; i < vectors.length; i++) {
    let v = vectors[i];
    let x = (i % 20) * 20;
    let y = floor(i / 20) * 20;
    drawVector(v, x, y, 20);
  }
  
  //finding vector at its current location
  let index = floor(position.x / 20) + floor(position.y / 20) * 20;
  let v = vectors[index];
  position.add(v);
  position.x = constrain(position.x, 0, width);
  position.y = constrain(position.y, 0, height);
  fill(0, 255, 0);
  ellipse(position.x, position.y, 10, 10);
}