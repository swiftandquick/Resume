var slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function showSlide(n) {
	var slides = document.getElementsByClassName("mySlides");
	if (n >= slides.length) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = (slides.length - 1);
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slides[slideIndex].style.display = "block";  
}