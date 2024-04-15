let fall = 0

//This is the setup
function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB)
	rectMode(CENTER)
}

function draw() {
	randomSeed(50)

	//This is the background
	background('rgb(224,239,247)')

	//Loop for multiple flowers
	for (let i = 1; i < 30; i++) {

		//Conditional statement to change the flowers
		//Condition for Cherry Blossom
		if (keyCode === LEFT_ARROW) {
			flowers();
			fill("rgb(160,16,76)")
			textSize(20)
			text("Cherry Blossom", width / 2, height / 2)
		}

		//Condition for Forget-Me-Not
		else if (keyCode === RIGHT_ARROW) {
			fill("rgb(3,48,103)")
			textSize(20)
			text("Forget-Me-Not", width / 2, height / 2)
			flowers(random(width), fall + random(height), "rgb(149,189,239)", "yellow")
		}
	}

	//For movement of the flowers 
	fall += 2
	if (fall >= height) {
		fall = -2
	}

	//Button for Forget-Me-Not
	push()
	translate(10, 50)
	strokeWeight(1)
	stroke("black")
	fill("rgb(149,189,239)")

	//Button for Cherry Blossom
	rect(600, 0, 400, 40)
	fill("pink")
	rect(152, 0, 400, 40)

	//Labels
	textSize(20)
	noStroke()
	//Forget-Me-Not label
	fill("yellow")
	text("Press Right Arrow for Forget-Me-Not", 435, 7)
	//Cherry Blossom label
	fill("rgb(160,16,76)")
	text("Press Left Arrow for Cherry Blossom", 0, 7)
	pop()
}

//Function for flowers with four parameters
function flowers(x = random(width), y = fall + random(height), petal = "pink", style = "rgb(160,16,76)") {
	noStroke()
	push()
	translate(x, y)
	push()
	fill(style)
	circle(17.5, 10, 4.2)
	pop()
	push()
	fill(petal)
	//top petal
	ellipse(17.5, 5, 5, 6)
	//right top petal
	ellipse(22, 9, 5, 5)
	//left top petal
	ellipse(13, 9, 5, 5)
	//left bottom petal
	ellipse(15.3, 14.5, 5, 6)
	//right bottom petal
	ellipse(20.5, 14.5, 5, 6)
	pop()
	pop()
}