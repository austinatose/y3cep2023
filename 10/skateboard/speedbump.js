class SpeedBump {
    constructor(y, height) {
      this.x = 50;
      this.y = y;
      this.width = 300;
      this.height = height;
    }
  
    display() {
      fill(40, 40, 40, 100);
      noStroke();
      rect(this.x, this.y, this.width, this.height);
    }
  
    isUnder(skateboard) {
      return (
        skateboard.position.x >= this.x &&
        skateboard.position.x <= this.x + this.width &&
        skateboard.position.y >= this.y &&
        skateboard.position.y <= this.y + this.height
      );
    }
  }
  