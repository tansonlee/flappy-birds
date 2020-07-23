let listPipes = [];
let bird;

function setup() {
	createCanvas(400, 400);
	bird = new Bird();
	fill(255);
}

function draw() {
	background(51);

	bird.show();
	bird.update();

	if (frameCount % 180 == 0) {
		const pipe = new Pipe();
		listPipes.push(pipe);
	}

	for (var i = 0; i < listPipes.length; i++) {
		listPipes[i].show();
		listPipes[i].update();

		if (listPipes[i].collision()) {
			console.log("you lose");
			fill(255);
			noLoop();
			background(255, 0, 0, 100);
		}

		if (listPipes[i].x + listPipes[i].width < 0) {
			listPipes.splice(i, 1);
		}
	}
}

function keyPressed() {
	if (key == " ") {
		bird.up();
	}
}
