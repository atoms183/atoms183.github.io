$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
$('.content-answers__title').click(function(event) {
	if($('.answers__content').hasClass('one')){
		$('.content-answers__title').not($(this)).removeClass('active');
		$('.content-answers__text').not($(this).next()).slideUp(300);
	}
	$(this).toggleClass('active').next().slideToggle(300);
  });
});
 
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    /*autoplay: {
        delay: 2500,
         disableOnInteraction: false,
        },*/
         pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
  });

const tabNavItems = document.querySelectorAll('.tabs-choose__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-choose__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});