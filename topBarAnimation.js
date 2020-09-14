var topBarDisplay = new Array(5);

topBarDisplay[0] = new Image;
topBarDisplay[0].src = "Images/topBar.bmp";
topBarDisplay[1] = new Image;
topBarDisplay[1].src = "Images/topBar2.bmp";
topBarDisplay[2] = new Image;
topBarDisplay[2].src = "Images/topBar3.bmp";
topBarDisplay[3] = new Image;
topBarDisplay[3].src = "Images/topBar4.bmp";
topBarDisplay[4] = new Image;
topBarDisplay[4].src = "Images/topBar5.bmp";

function select() {
	var index = Math.floor(Math.random() * 5);
	document.topBar.src = topBarDisplay[index].src;
	setTimeout("select()", 200);
	return;
}