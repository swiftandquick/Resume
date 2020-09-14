var slideIndex2 = 0;
showSlide2(slideIndex2);

function changeSlide2(n) {
	showSlide2(slideIndex2 += n);
}

function showSlide2(n) {
	var slides = document.getElementsByClassName("mySlides2");
	if (n >= slides.length) {
		slideIndex2 = slides.length - 1;
	}
	if (n < 0) {
		slideIndex2 = 0;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slides[slideIndex2].style.display = "block";  
}