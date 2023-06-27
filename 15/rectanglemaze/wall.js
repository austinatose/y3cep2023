class Wall {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w; // width
        this.h = h; // height  
    }

    display() {
        fill("black");
        rect(this.x, this.y, this.w, this.h);
    }

    collide(player) {
        if (!((player.x + player.w) < this.x ||  player.x > (this.x + this.w) || (player.y + player.w) < this.y || player.y > (this.y + this.h))) {
            console.log("collide");
            
            if (player.x + player.w < this.x + player.increment) { //to the left of centre
                if (player.xspeed > 0) {
                    player.xspeed = 0;
                }
            } else if (player.x > this.x + this.w - player.increment) { //to the right of centre
                if (player.xspeed < 0) {
                    player.xspeed = 0;
                }
            } else if (player.y + player.h < this.y + player.increment) { //above centre
                if (player.yspeed > 0) {
                    player.yspeed = 0;
                }
            } else if (player.y > this.y + this.h - player.increment) { //below centre
                if (player.yspeed < 0) {
                    player.yspeed = 0;
                }
            }
            

            /*
            if (player.x < this.x + this.w / 2 + 1) { //to the left of centre
                if (player.xspeed > 0) {
                    player.xspeed = 0;
                }
            } else if (player.x > this.x + this.w / 2 - 1) { //to the right of centre
                if (player.xspeed < 0) {
                    player.xspeed = 0;
                }
            } else if (player.y < this.y + this.h / 2 + 1) { //above centre
                if (player.yspeed > 0) {
                    player.yspeed = 0;
                }
            } else if (player.y > this.y + this.h / 2 - 1) { //below centre
                if (player.yspeed < 0) {
                    player.yspeed = 0;
                }
            }
            */
        }
        // limit player to within canvas
        if (player.x < player.increment) {
            if (player.xspeed < 0) {
                player.xspeed = 0;
            }
        } if (player.x > width - player.w - player.increment) {
            if (player.xspeed > 0) {
                player.xspeed = 0;
            }
        } if (player.y < player.increment) {
            if (player.yspeed < 0) {
                player.yspeed = 0;
            }
        } if (player.y > height - player.h - player.increment) {
            if (player.yspeed > 0) {
                player.yspeed = 0;
            }
        }
    }
}