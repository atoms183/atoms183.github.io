$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });