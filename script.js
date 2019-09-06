var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var winBackground = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init(); 

function init () {
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons() {
	//mode buttons event listeners
	for(i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	};
};

//reset function
function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to show the new color
	colorDisplay.textContent = pickedColor;
	//change button text back to "New Color"
	resetButton.textContent = "New Colours"
	//clear message display
	messageDisplay.textContent = "";
	//change colors of squares
	for (i=0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display ="none";
		};
	}
	//change background of h1 back to black
	winBackground.style.backgroundColor = "steelblue"
}

//reset game
resetButton.addEventListener("click", reset);



function setupSquares() {
	for (i=0; i < squares.length; i++) {
		// add click Listeners to Squares
		squares[i].addEventListener("click", function (){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				winBackground.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


//changes all the squares into the picked color on win
function changeColors (color) {
	for (var i=0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

//randomly chooses one color of the generated colors as the picked color
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generates array of random colors
function generateRandomColors(num) {
	//make array
	var arr = []
	//get random color and push into array
	for (i=0; i < num; i++) {
	arr.push(randomColor());
	}
	//return that array
	return arr;
}

//generates random rgb color
function randomColor () {
	//pick Red from 0-255
	var r = Math.floor(Math.random() * 256)
	//pick Blue from 0-255
	var b = Math.floor(Math.random() * 256)
	//pick Green from 0-255
	var g = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}