class Obstacle {
	constructor(game) {
		this.game = game;
		this.x = Math.floor(Math.random() * 350);
		this.y = 0;
		this.width = Math.floor(Math.random() * 250 + 100);
		this.height = 50;
	}

    draw() {
        this.game.ctx.fillStyle = 'red';
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    left() {
        return this.x;
      }
      right() {
        return this.x + this.width;
      }
    
      top() {
        return this.y;
      }
    
      bottom() {
        return this.y + this.height;
      }
    
      crashWith(obstacle) {
        return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right()
        );
      }
    
}
