var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

t = setInterval(function(){
    slides = document.getElementsByClassName("mySlides");
    if (slideIndex+1 > slides.length) {slideIndex = 1
        showSlides(slideIndex);
    }
    else{
        showSlides(slideIndex++);
    }
    
}, 3000)



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}