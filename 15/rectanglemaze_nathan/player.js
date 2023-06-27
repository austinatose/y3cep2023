class playar {
    constructor(posX, posY, breadth, length) {
      this.position = createVector(posX, posY)
      this.size = createVector(breadth, length)
      this.collided = false
    }
    
    disp() {
      fill('cyan')
      noStroke()
      rect(this.position.x, this.position.y, this.size.x, this.size.y)
    }
    
    moveLeft() {
      if (this.collided == false) {
        this.position.x -= this.size.x
      }
    }
    
    moveRight() {
      if (this.collided == false) {
        this.position.x += this.size.x
      }
    }
    
    moveDown() {
      if (this.collided == false) {
        this.position.y += this.size.y
      }
    }
    
    moveUp() {
      if (this.collided == false) {
        this.position.y -= this.size.y
      }
    }
  }