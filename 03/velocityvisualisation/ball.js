class Ball {
    constructor(x, y, size) {
      //Starting position of ball
      this.pos = createVector(x, y);
  
      // Size of ball
      this.size = size;
  
      //ball's internal velocity set at 1 unit x direction and 2 unit y direction
      this.velocity = createVector(1, 2);
    }
  
    update() {
      //Modifies position of ball in the direction of the ball's internal velocity
      this.pos.add(this.velocity);
    }
  
    move(vel) {
      //Modifies position of ball in the direction of vel
      this.pos.add(vel);
    }
  
    show() {
      circle(this.pos.x, this.pos.y, this.size);
    }
  }