$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
$(".action-header__search-icon").click(function(){
    $(".action-header__search, .input").toggleClass("active");
    $("input[type='text']").focus();
  });

  $('.item-popular').hover(
    function() {
      $( this ).addClass('item-popular__btn');
    },
    function() {
        $( this ).removeClass('item-popular__btn');
      }
  );

  $('.item-box-catalog').hover(
    function() {
      $( this ).addClass('item-box-catalog__btn');
    },
    function() {
        $( this ).removeClass('item-box-catalog__btn');
      }
  );

  $('.spoiler-catalog__action, .spoiler-tabs__action').click(function(event) {
    if($('.catalog__spoiler, .spoiler-tabs').hasClass('one')){
        $('.spoiler-catalog__action, .spoiler-tabs__action').not($(this)).removeClass('active');
        $('.spoiler-catalog__list, .spoiler-tabs__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });


// $('button').on('click',function(e) {
//     if ($(this).hasClass('grid-btn')) {
//         $('.test__body ul').removeClass('list').addClass('grid');
//     }
//     else if($(this).hasClass('list-btn')) {
//         $('.test__body ul').removeClass('grid').addClass('list');
//     }
// });

$('button').on('click',function(e) {
    if ($(this).hasClass('grid-btn')) {
        $('.full-catalog__box .box-catalog__body').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list-btn')) {
        $('.full-catalog__box .box-catalog__body').removeClass('grid').addClass('list');
    }
});

// $(".spoiler-catalog__link").click(function(){
//     $('.spoiler-catalog__link').toggleClass("active");
//   });
 
$('.amount__minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.amount__plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


});

   var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

//tabs

const tabNavItems = document.querySelectorAll('.tabs-detail__button');
const tabItems = document.querySelectorAll('.content-tabs__item-inner');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-detail__button')) {
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



 
//Popup 
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
       const popupLink = popupLinks[index];
       popupLink.addEventListener("click", function (e) {
           const popupName = popupLink.getAttribute('href').replace('#', '');
           const curentPopup = document.getElementById(popupName);
           popupOpen(curentPopup);
           e.preventDefault();
       });
   }
}
 



const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
       const  el = popupCloseIcon[index];
       el.addEventListener('click', function (e) {
           popupClose(el.closest('.popup'));
           e.preventDefault();
       });
   }
}
function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
       const popupActive = document.querySelector('.popup.open');
       if (popupActive) {
           popupClose(popupActive, false);
       } else {
           bodyLock();
       }
       curentPopup.classList.add('open');
       curentPopup.addEventListener("click", function(e) {
           if (!e.target.closest('.popup__content')) {
               popupClose(e.target.closest('.popup'));
           }
       });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
       popupActive.classList.remove('open');
       if (doUnlock) {
           bodyUnLock();
       }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0){
   for(let index = 0; index < lockPadding.length; index++) {
       const el = lockPadding[index];
       el.style.paddingRight = lockPaddingValue;
   }
}
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
       if (lockPadding.length > 0) {
       for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
           el.style.paddingRight = '0px';
       }
   }
       body.style.paddingRight = '0px';
       body.classList.remove('lock');
   }, timeout);
   
   unlock = false;
   setTimeout(function (){
       unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
       const popupActive = document.querySelector('.popup.open');
       popupClose(popupActive);
   }
});
