$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
var swiper = new Swiper(".mySwiper", {

 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	/*  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },*/
  });

  $(document).ready(function(){
    var url=document.location.href;
           $.each($("#active_link a"),function(){
     if(this.href==url){$(this).addClass('active');};
    });
 });

 $(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		},
    zoom: {
			enabled: true,
			duration: 200 // don't foget to change the duration also in CSS
		}
	});
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
 
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

});

$(function () {
	$('.item-product__popup, .item-sidebar__popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true,
		midClick: true,
		removalDelay: 100,
		mainClass: 'my-mfp-slide-bottom'
	});
	$(document).on('click', '.item-product__body-info-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});
tippy('[data-tippy-content]');
 

 
