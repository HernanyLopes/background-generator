var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
    
}

setGradient();

function getRandomColor1() {
    var letters = '0123456789ABCDEF';
    var randColor = '';
    for (var i = 0; i < 6; i++) {
    randColor += letters[Math.floor(Math.random() * 16)];
    } return color1.value = "#" + randColor;
} 

function getRandomColor2() {
    var letters = '0123456789ABCDEF';
    var randColor = '';
    for (var i = 0; i < 6; i++) {
    randColor += letters[Math.floor(Math.random() * 16)];
    } return color2.value = "#" + randColor;
} 

function getRandomColor() {
    getRandomColor1();
    getRandomColor2();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randButton.addEventListener("click", getRandomColor);