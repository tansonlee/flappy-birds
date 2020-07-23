class Bird {
	constructor() {
		this.size = 20;
		this.x = 100;
		this.y = height / 2;
		this.vel = 0;
		this.gravity = 0.8;
		this.lift = -12;
		this.airDrag = 0.9;
	}

	update() {
		this.y += this.vel;
		this.vel += this.gravity;
		if (this.y + this.vel > height) {
			this.y = height;
			this.vel = 0;
		}
		if (this.y + this.vel < 0) {
			this.y = 0;
			this.vel = 1;
		}
		this.vel *= this.airDrag;
	}

	show() {
		ellipse(this.x, this.y, this.size, this.size);
	}

	up() {
		this.vel += this.lift;
	}
}
