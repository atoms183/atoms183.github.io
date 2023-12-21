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
       570: {
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






