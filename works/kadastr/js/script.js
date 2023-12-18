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
    
    
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}



  var swiper = new Swiper(".projects__swiper, .another-projects__swiper, .what-say__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     breakpoints: {
       670: {
         slidesPerView: 2,
         spaceBetween: 27,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 27,
       },
       1024: {
         slidesPerView: 3,
         spaceBetween: 27,
       }
     },
  });

  var swiper = new Swiper(".our-clients__swiper, .services__swiper, .documentation__swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    //   autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: false,
	// 	},
     breakpoints: {
       480: {
         slidesPerView: 1,
         spaceBetween: 27,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 27,
       },
       1024: {
         slidesPerView: 4,
         spaceBetween: 27,
       }
     },
  });
  var swiper = new Swiper(".cover__swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    //   autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: false,
	// 	},
  });

// TABS
  const tabNavItems = document.querySelectorAll('.tabs-useful__button');
  const tabItems = document.querySelectorAll('.content-tabs__item-inner');
  document.addEventListener("click", function (e) {
      const targetElement = e.target;
      let currentActiveIndex = null;
      let newActiveIndex = null;
      if (targetElement.closest('.tabs-useful__button')) {
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



 


// var number = document.querySelector('.number'),
// numberTop = number.getBoundingClientRect().top,
// start = +number.innerHTML, end = +number.dataset.max;

// window.addEventListener('scroll', function onScroll() {
//     if(window.pageYOffset > numberTop - window.innerHeight / 2) {
//         this.removeEventListener('scroll', onScroll);
//         var interval = setInterval(function() {
//             number.innerHTML = ++start;
//             if(start == end) {
//                 clearInterval(interval);
//             }
//         }, 5);
//     }
// });

// var number1 = document.querySelector('.number1'),
// number1Top = number1.getBoundingClientRect().top,
// start1 = +number1.innerHTML, end1 = +number1.dataset.max;

// window.addEventListener('scroll', function onScroll() {
//     if(window.pageYOffset > number1Top - window.innerHeight / 2) {
//         this.removeEventListener('scroll', onScroll);
//         var interval1 = setInterval(function() {
//             number1.innerHTML = ++start1;
//             if(start1 == end1) {
//                 clearInterval(interval1);
//             }
//         }, 5);
//     }
// });

// var number2 = document.querySelector('.number2'),
// 		number2Top = number2.getBoundingClientRect().top,
// 		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

// 		window.addEventListener('scroll', function onScroll() {
// 			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
// 				this.removeEventListener('scroll', onScroll);
// 				var interval2 = setInterval(function() {
// 					number2.innerHTML = ++start2;
// 					if(start2 == end2) {
// 						clearInterval(interval2);
// 					}
// 				}, 5);
// 			}
// 		});
