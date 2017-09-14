var slides = ["img/aap1.jpg","img/aap2.jpg","img/aap3.jpg","img/aap4.jpg"];
var slideNum = 0;
var slideHolder = document.getElementById("slideholder");
slideHolder.style.backgroundImage = "url('img/aap9.jpg')";
slideHolder.style.transition = "2s";

function getSlideNum() {
    var aantalSlides = slides.length;
    if(slideNum < (aantalSlides-1)) {
        slideNum++;
    } else {
        slideNum = 0;
    }
}

slideHolder.addEventListener("click", function() {
    getSlideNum();
    slideHolder.style.backgroundImage = "url('" + slides[slideNum] + "')";

 });


/*
var marginLeft = 0;
var width = 300;
var aantalPlaatjes = 3;
var slideholder = document.getElementById("slideholder");
var sliderElements = document.getElementsByTagName("li");




for(var i = 0; i < sliderElements.length; i++) {
    var slide = sliderElements[i];
    slide.addEventListener("click", function() {
        marginLeft -= width;
        console.log(marginLeft);
        if(marginLeft < -((aantalPlaatjes -1) * width)) {
            marginLeft = 0;
        }
        slideholder.style.marginLeft = marginLeft + "px";
    });
};

*/
