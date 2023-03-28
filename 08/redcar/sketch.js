let car; 
function setup() {
  createCanvas(400, 400);
  car = new Car();
}

function draw() {
  background(220);
  
  textAlign(CENTER, CENTER)
  text("Velocity: " + round(car.velocity.x * 100)/100, 200, 50)
  text("Acceleration: " + round(car.acceleration.x * 100)/100, 200, 100)

  if (keyIsDown(RIGHT_ARROW))
    car.acceleration.x += 0.01;
  else if (keyIsDown(LEFT_ARROW)) 
    car.acceleration.x -= 0.01;

  car.update();
  car.checkEdges();
  car.display();  
}
