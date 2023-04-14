$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
$('.gallery__image').lightGallery({
});
$('.content-howchoose__title').click(function(event) {
  if($('.howchoose__content').hasClass('one')){
      $('.content-howchoose__title').not($(this)).removeClass('active');
      $('.content-howchoose__text').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('active').next().slideToggle(300);
});

$('.catalog-spoiler__title').click(function(event) {
  if($('.catalog-spoiler').hasClass('one')){
      $('.catalog-spoiler__title').not($(this)).removeClass('active');
      $('.catalog-spoiler__list').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('active').next().slideToggle(300);
});



});
 
 

var swiper = new Swiper(".mySwiper", {
   autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },  
    effect: "flip",
    grabCursor: true,
  });