class wall {
    constructor(posX, posY, breadth, length) {
      this.position = createVector(posX, posY)
      this.size = createVector(breadth, length)
    }
    
    disp() {
      fill('gray')
      noStroke()
      rect(this.position.x, this.position.y, this.size.x, this.size.y)
    }
    
    collide(playar) {
      if (playar.position.x < (this.position.x + this.size.x) && (playar.position.x + playar.size.x) > this.position.x) {
        if (playar.position.x < (this.position.x + this.size.x)) {
          playar.position.x = this.position.x + this.size.x
        } 
        if ((playar.position.x + playar.size.x) > this.position.x) {
          playar.position.x = this.position.x - playar.size.x
        }
      }
      
      if (playar.position.y < (this.position.y + this.size.y) && (playar.position.y + playar.size.y) > this.position.y) {
        if (playar.position.y < (this.position.y + this.size.y)) {
          playar.position.y = this.position.y + this.size.y
        } 
        
        if ((playar.position.y + playar.size.y) > this.position.y) {
          playar.position.y = this.position.y - playar.size.y
        }
      }
    }
  }