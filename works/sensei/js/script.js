$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
 

 const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(document).ready(function () {
 $('.slider').slick({
   arrows:true,
   slidesToShow: 2,
   autoplay:true,
    speed:2000,
    autoplaySpeed:800,
      responsive:[
      {
        breakpoint: 1250,
        settings: {
          slidesToShow:1
        }
      }
    ]
 });
});