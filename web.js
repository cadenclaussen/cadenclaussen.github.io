var images = [
	"images/yosamite.jpg", 
	"images/nevada.jpg", 
	"images/niagra.jpg", 
	"images/vernal.jpg"
];

var buttonTag = document.querySelector("button");
var imgTag = document.querySelector("img");
var imageNumber = 1;

buttonTag.addEventListener("click", function() {
	imgTag.src = images[imageNumber];
	imageNumber++;
	imageNumber %= 4;
});