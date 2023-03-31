$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
 



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    //autoplay: {
       //  delay: 2500,
      //   disableOnInteraction: false,
     //  },
   /*  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },*/
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
   
      1600: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });