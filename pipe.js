function Pipe() {
	this.x = width;
	this.width = 50;
	this.opening = 100;
	this.top = random(0, height - this.opening);
	this.bottom = height - this.top - this.opening;

	this.update = function () {
		this.x -= 5;
	};
	this.show = function () {
		fill(255);
		rect(this.x, 0, this.width, this.top);
		rect(this.x, this.top + this.opening, this.width, this.bottom);
	};

	this.overBird = function () {
		return (
			this.x <= bird.x + bird.size / 2 &&
			this.x >= bird.x - bird.size / 2 - this.width
		);
	};

	this.collision = function () {
		if (this.overBird()) {
			return (
				bird.y <= this.top + bird.size / 2 ||
				bird.y >= height - this.bottom - bird.size / 2
			);
		}
	};
}
