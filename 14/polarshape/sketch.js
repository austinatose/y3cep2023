let r = 100;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  // Method 1
  // circle(width / 2, height / 2, r * 2);

  // Method 2
  /*
  push();
  translate(width / 2, height / 2);
  circle(0, 0, r * 2);
  pop();
  */


  // Method 3
  /*
  push();
  translate(width / 2, height / 2);
  for (let theta = 0; theta < 360; theta++) {
    let x = r * cos(theta);
    let y = r * sin(theta);
    strokeWeight(10);
    point(x, y);
  }
  pop();
  */

  // Hexagon
  push();
  translate(width / 2, height / 2);
  let sides = 7;
  for (let theta = 0; theta < 360; theta += 360/sides) {
    line(cos(theta) * r, sin(theta) * r, cos(theta + 360/sides) * r, sin(theta + 360/sides) * r);
  }
  pop();
}
