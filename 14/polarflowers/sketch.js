let r = 80;

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width/2, height/2)
  strokeWeight(1);
    
  beginShape();
  for (let theta = 0; theta < 1800; theta += 1){
    // let coef = 2;               //b = 1, a = 0
    
    // let coef = sin(theta);      //b = 0, a = 1
    // let coef = sin(2 * theta);  //b = 0, a = 2
    // let coef = sin(3 * theta);  //b = 0, a = 3
    // let coef = sin(4 * theta);  //b = 0, a = 4
    let coef = tan(7/4 * theta);  //b = 0, a = 5
    
    // let coef = 1.25 + sin(5 * theta);
    // let coef = 1.08 + sin((5/2) * theta);
    // let coef = 1.08 + sin((5/3) * theta);
    // let coef = 1.08 + sin((5/4) * theta);
    
    let x = r * coef * cos(theta);
    let y = r * coef * sin(theta);
    vertex(x, y);
  }
  endShape();
}
