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


var swiper = new Swiper(".services__swiper", {
   slidesPerView: 1,
   spaceBetween: 40,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },
 });


 window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
      var keyCode;
      function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
          this.value = new_value;
        }
        if (event.type == "blur" && this.value.length < 5) {
          this.value = "";
        }
      }
  
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
  
    });

  });