class Controls {
  constructor(game) {
    this.game = game;
    this.car = this.game.car;
  }

  keyboardEvents() {
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowRight':
          if (this.car.x + this.car.width < this.game.width) {
            this.car.x += 10;
          }
        break;
        case 'ArrowLeft':
          if (this.car.x > this.game.x) {
            this.car.x -= 10;
          }
        break;
      }
    });
  }

}
