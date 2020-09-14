var canvas = document.getElementById("portrait");
var context = canvas.getContext('2d');

var portraits = new Image();
portraits.src = 'Images/portrait.bmp';

var frames = 4;
var currentFrame = 0;

var display = function() {
	context.clearRect(0, 0, 200, 200);
	context.drawImage(portraits, 200 * currentFrame, 0, 200, 200, 0, 0, 200, 200);
	if (currentFrame === frames) {
		currentFrame = 0;
	}
	else {
		currentFrame++; 
	}	
}

setInterval(display, 200);