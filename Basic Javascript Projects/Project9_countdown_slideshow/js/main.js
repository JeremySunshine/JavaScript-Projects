function countdown() {  // countdown function // 
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer"); // needed to reference timer //
    function tick() { // tick function //
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
        alert("Time's Up!");
        clearTimeout(time);
        timer.innerHTML = ""; // made so infinate loop doesn't happen // 
        }  
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) { // next/previous controls // 
    showSlides(slideIndex += n);

}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementById("mySlides");
    let dots = document.getElementById("dot");
    if ( n > slides.length) {slideIndex = 1}
    if ( n < 1) {slideIndex = slides.length}
    for ( i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}