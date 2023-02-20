let ball;
let vx, vy;
function setup() {
  frameRate(10);
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(200, 200, 50);
  vx = createInput("0");
  vy = createInput("1");
  vx.position(70, 10);
  vx.size(20)
  vy.position(70, 40)
  vy.size(20)
  
}

function drawVelocityDirection(velocity){
  circle(width/2, 50, 30);
  
  push();
  translate(width/2, 50); //Move origin to center of circle
  line(0,0,velocity.x * 15, velocity.y * 15)
  pop();
}

function drawStaticStuff(){
  push();
  textAlign(LEFT, TOP); //Aligning text to match input textbox
  text("xVelocity", 10, 10); 
  text("yVelocity", 10, 40); 
  pop()
}

function draw() {
  background(220);
  let velocity = createVector(int(vx.value()), int(vy.value()));
  drawStaticStuff();  
  drawVelocityDirection(velocity);  
  ball.move(velocity);
  ball.show();  
}