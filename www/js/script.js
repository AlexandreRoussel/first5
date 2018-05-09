/*jQuery(document).ready(function(){
  $(window).scroll(function(e){
  	parallaxScroll();
	});
}); 
function parallaxScroll1(){
    var scrolled = $(window).scrollTop();
    $('.slide1').css('top',(300-(scrolled*.5))+'px');
}
function parallaxScroll2(){
    var scrolled = $(window).scrollTop();
    $('.slide2').css('top',(300-(scrolled*.5))+'px');
}
function parallaxScroll3(){
    var scrolled = $(window).scrollTop();
    $('.slide3').css('top',(300-(scrolled*.5))+'px');
}
function testScroll(ev){
    if(window.pageYOffset>300)parallaxScroll1();
    if(window.pageYOffset>700)parallaxScroll2();
    if(window.pageYOffset>900)parallaxScroll3();
}
window.onscroll=testScroll;
*/

$(function() {
    /**
    * Smooth scrolling to page anchor on click
    **/
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});
var carousel = document.querySelector('.thecontainer');
var wrapper = document.querySelector('.items');
var items = document.querySelectorAll('.item');
var nextArrow = document.querySelector('.next');
var previousArrow = document.querySelector('.previous');
var currentSlide = 0;
var switchSlides = function switchSlides(next) {
    var isNext = next > currentSlide;
    currentSlide = Math.max(0, Math.min(items.length - 1, next));
    nextArrow.dataset.disabled = currentSlide >= items.length - 1;
    previousArrow.dataset.disabled = currentSlide <= 0;
    items.forEach(function (item, i) {
        item.dataset.current = i === currentSlide;
        item.dataset.direction = isNext ? 'next' : 'previous';
    });
    wrapper.style.transform = 'translate3d(-' + currentSlide * window.innerWidth + 'px, 0, 0)';
};
window.addEventListener('resize', function () {
    wrapper.style.transform = 'translate3d(-' + currentSlide * window.innerWidth + 'px, 0, 0)';
});
nextArrow.addEventListener('click', function (e) {
    e.preventDefault();
    switchSlides(currentSlide + 1);
});
previousArrow.addEventListener('click', function (e) {
    e.preventDefault();
    switchSlides(currentSlide - 1);
});