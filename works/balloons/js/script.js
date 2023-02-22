$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
 
$(document).ready(function () {
    $('.slider').slick({
      arrows:true,
      slidesToShow: 4,
      autoplay:true,
       speed:1800,
       autoplaySpeed:800,
         responsive:[
         {
           breakpoint: 1250,
           settings: {
             slidesToShow:3
           },
           breakpoint: 992,
           settings: {
             slidesToShow:2
           },
           breakpoint: 670,
           settings: {
             slidesToShow:2
           }
         }
       ]
    });
   });