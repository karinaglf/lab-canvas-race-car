class Game {
	constructor() {
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.car = null;
		this.obstacles = [];
		this.background = new Image();
		this.frames = 0; // to control de score;
		this.x = 0;
		this.y = 0;
		this.width = 500;
		this.height = 700;
		this.intervalId = null;
	}

	start() {
		// Instantiate elements - this will trigger only once
		this.car = new Car(this, 200, 540, 100, 150);
		this.controls = new Controls(this);
		this.controls.keyboardEvents();

		// Request Animation Frame - will run at 60 fps
		this.intervalId = setInterval(() => {
			this.update();
		}, 1000 / 60);
	}

	update() {
		this.frames++;

		//Draw elements
		this.drawBackground();
		this.car.draw();
		this.createObstacles();
		this.obstacles.forEach((obstacle) => {
			obstacle.y++;
			obstacle.draw();
		});
        this.drawScore();
		this.checkGameOver();
	}

	drawBackground() {
		this.background.src = './images/road.png';
		this.ctx.drawImage(this.background, this.x, this.y, this.width, this.height);
	}

	createObstacles() {
		if (this.frames % 300 === 0) {
			this.obstacles.push(new Obstacle(this));
		}
	}

	checkGameOver() {
		const car = this.car;
		const crashed = this.obstacles.some(function (obstacle) {
			return car.crashWith(obstacle);
		});

		if (crashed) {
			this.stop();
		}
	}

	stop() {
		clearInterval(this.intervalId);
	}

	drawScore() {
		let score = Math.floor(this.frames / 30);
		this.ctx.font = '32px serif';
		this.ctx.fillStyle = 'white';
		this.ctx.fillText(`Score: ${score}`, 100, 30);
	}
}
