 

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





"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};
if (isMobile.any()) {
    document.body.classList.add('_touch');

let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
           menuArrow.addEventListener("click", function(e) {
                menuArrow.parentElement.classList.toggle('_active');
           });
        }
    }

} else {
    document.body.classList.add('_pc');
}


//Меню бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
 
var swiper = new Swiper(".archive__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
  });

  var swiper = new Swiper(".routes__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        // 640: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        992: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
  });


// Табы
const tabNavItems = document.querySelectorAll('.tabs-video__button');
const tabItems = document.querySelectorAll('.video-archhive__tabs-inner');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-video__button')) {
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




gridGallery({
    selector: ".dark",
    darkMode: true
  });
  gridGallery({
    selector: "#square",
    layout: "square"
  });




// var swiper = new Swiper(".coverswiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//       },
 
//     //   autoplay: {
//     //     delay: 2500,
//     //     disableOnInteraction: false,
//     //   },
//   });

 
 