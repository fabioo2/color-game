var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var winBackground = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	winBackground.style.backgroundColor = "steelblue";
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 
	for (var i =0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	winBackground.style.backgroundColor = "steelblue";
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor; 
	for (var i =0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
		
	}
});

//generate squares 
generateColors();

//reset game
resetButton.addEventListener("click", reset);

//change display h1 to picked color
colorDisplay.textContent = pickedColor;

//reset function
function reset() {
	//change button text back to "New Color"
	resetButton.textContent = "New Colours"
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to show the new color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	generateColors();
	//change background of h1 back to black
	winBackground.style.backgroundColor = "steelblue"
	//clear message display
	messageDisplay.textContent = "";


}


//creates 6 clickable squares
function generateColors() {
	for (i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", colorGuess);
	}
}

//logic to determine if clicked color is the correct color
function colorGuess () {
	var clickedColor = this.style.backgroundColor
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!!";
		changeColors(clickedColor);
		winBackground.style.background = clickedColor;
		resetButton.textContent = "Play Again?";
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
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