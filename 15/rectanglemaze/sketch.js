let walls = [];

function setup() {
  createCanvas(300, 300);
  player = new Player(10, 10);
  
  walls.push(new Wall(50, 0, 20, 200));
  walls.push(new Wall(100, 100, 20, 200));
  walls.push(new Wall(150, 0, 20, 200));
  walls.push(new Wall(200, 100, 20, 200));
  walls.push(new Wall(250, 0, 20, 200));
  walls.push(new Wall(250, 0, 200, 20))
  
  //make a spiral labyrinth
  
}

function draw() {
  background(220);
  if (keyIsDown(LEFT_ARROW)) { // w key
    player.moveLeft();
  } if (keyIsDown(RIGHT_ARROW)) {
    player.moveRight();
  } if (keyIsDown(UP_ARROW)) {
    player.moveUp();
  } if (keyIsDown(DOWN_ARROW)) {
    player.moveDown();
  }
  for (let wall of walls) {
    wall.display();
    wall.collide(player);
  }
  player.update();
  player.display(); 
}

