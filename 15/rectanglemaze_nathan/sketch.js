let canva = []
let walls = []

function setup() {
  canva = [windowWidth, windowHeight]
  createCanvas(canva[0], canva[1]);
  
  walls.push(new wall(-canva[0]/16, 0, canva[0]/16, canva[1]))
  walls.push(new wall(canva[0], 0, canva[0]/16, canva[1]))
  walls.push(new wall(0, -canva[1]/16, canva[0], canva[1]/16))
  walls.push(new wall(0, canva[1], canva[0], canva[1]/16))
  
  walls.push(new wall(0, 0, canva[0]/16, canva[1]/2))
  
  controller = new playar(0, canva[1]*15/16, canva[0]/16, canva[1]/16)
}

function draw() {
  background('red');
  for (i = 0; i < walls.length; i++) {
    walls[i].disp()
    walls[i].collide(controller)
  }
  
  controller.disp()
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    controller.moveUp()
  } else if (keyCode == DOWN_ARROW) {
    controller.moveDown()
  } else if (keyCode == LEFT_ARROW) {
    controller.moveLeft()
  } else if (keyCode == RIGHT_ARROW) {
    controller.moveRight()
  }
}