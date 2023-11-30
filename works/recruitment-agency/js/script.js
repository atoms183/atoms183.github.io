 
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
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// if (document.getElementsByClassName('menu__item').length > 0) {
//     document.getElementsByClassName('menu__item')[0].classList.add('show');
//   }
     
// const animItems = document.querySelectorAll('._anim-items');
// if (animItems.length > 0) {
//     window.addEventListener('scroll', animOnScroll);
//     function animOnScroll() {
//         for (let index = 0; index < animItems.length; index++) {
//             const animItem = animItems[index];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                 animItem.classList.add('_active');
//             } else {
//                 if (!animItem.classList.contains('_anim-no-hide')) {
//                     animItem.classList.remove('_active');
//                 }
//             }
//         }
//     }
//     function offset(el) {
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }
//     setTimeout(() => {
// //         animOnScroll();
// //     }, 300);
//  }


//  //Прокрутка наверх
// function scrollTo(to, duration = 700) {
//     const
//         element = document.scrollingElement || document.documentElement,
//         start = element.scrollTop,
//         change = to - start,
//         startDate = +new Date(),
//         // t = current time
//         // b = start value
//         // c = change in value
//         // d = duration
//         easeInOutQuad = function (t, b, c, d) {
//             t /= d / 2;
//             if (t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         },
//         animateScroll = function () {
//             const currentDate = +new Date();
//             const currentTime = currentDate - startDate;
//             element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
//             if (currentTime < duration) {
//                 requestAnimationFrame(animateScroll);
//             }
//             else {
//                 element.scrollTop = to;
//             }
//         };
//     animateScroll();
// }

// document.addEventListener('DOMContentLoaded', function () {
//     let btn = document.querySelector('#toTop');
//     window.addEventListener('scroll', function () {
//         // Если прокрутили дальше 599px, показываем кнопку
//         if (pageYOffset > 100) {
//             btn.classList.add('show');
//             // Иначе прячем
//         } else {
//             btn.classList.remove('show');
//         }
//     });

//     // При клике прокручиываем на самый верх
//     btn.onclick = function (click) {
//         click.preventDefault();
//         scrollTo(0, 400);
//     }
// });
//  //Прокрутка наверх



    
    // //Popup 
    // const popupLinks = document.querySelectorAll('.popup-link');
    // const body = document.querySelector('body');
    // const lockPadding = document.querySelectorAll(".lock-padding");
    // let unlock = true;
    // const timeout = 300;
    // if (popupLinks.length > 0) {
    //    for (let index = 0; index < popupLinks.length; index++) {
    //        const popupLink = popupLinks[index];
    //        popupLink.addEventListener("click", function (e) {
    //            const popupName = popupLink.getAttribute('href').replace('#', '');
    //            const curentPopup = document.getElementById(popupName);
    //            popupOpen(curentPopup);
    //            e.preventDefault();
    //        });
    //    }
    // }
    // const popupCloseIcon = document.querySelectorAll('.close-popup');
    // if (popupCloseIcon.length > 0) {
    //    for (let index = 0; index < popupCloseIcon.length; index++) {
    //        const  el = popupCloseIcon[index];
    //        el.addEventListener('click', function (e) {
    //            popupClose(el.closest('.popup'));
    //            e.preventDefault();
    //        });
    //    }
    // }
    // function popupOpen(curentPopup) {
    //    if (curentPopup && unlock) {
    //        const popupActive = document.querySelector('.popup.open');
    //        if (popupActive) {
    //            popupClose(popupActive, false);
    //        } else {
    //            bodyLock();
    //        }
    //        curentPopup.classList.add('open');
    //        curentPopup.addEventListener("click", function(e) {
    //            if (!e.target.closest('.popup__content')) {
    //                popupClose(e.target.closest('.popup'));
    //            }
    //        });
    //    }
    // }
    // function popupClose(popupActive, doUnlock = true) {
    //    if (unlock) {
    //        popupActive.classList.remove('open');
    //        if (doUnlock) {
    //            bodyUnLock();
    //        }
    //    }
    // }
    
    // function bodyLock() {
    //    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    
    //    if (lockPadding.length > 0){
    //    for(let index = 0; index < lockPadding.length; index++) {
    //        const el = lockPadding[index];
    //        el.style.paddingRight = lockPaddingValue;
    //    }
    // }
    //    body.style.paddingRight = lockPaddingValue;
    //    body.classList.add('lock');
    
    //    unlock = false;
    //    setTimeout(function () {
    //       unlock = true;
    //    }, timeout);
    // }
    
    // function bodyUnLock() {
    //    setTimeout(function () {
    //        if (lockPadding.length > 0) {
    //        for (let index = 0; index < lockPadding.length; index++) {
    //           const el = lockPadding[index];
    //            el.style.paddingRight = '0px';
    //        }
    //    }
    //        body.style.paddingRight = '0px';
    //        body.classList.remove('lock');
    //    }, timeout);
       
    //    unlock = false;
    //    setTimeout(function (){
    //        unlock = true;
    //    }, timeout);
    // }
    
    // document.addEventListener('keydown', function (e) {
    //    if (e.which === 27) {
    //        const popupActive = document.querySelector('.popup.open');
    //        popupClose(popupActive);
    //    }
    // });
    


    // var url=document.location.href;
    // $.each($("#active_link a"),function(){
    // if(this.href==url){$(this).addClass('active');};
    // });



    let arrayDataDa = document.querySelectorAll('[data-da]'); // коллекция объектов с data-da

arrayDataDa.forEach(function (e) {

   const dataItem = e.dataset.da.split(','); // массив data-da параметров
   const addressMove = document.querySelector(dataItem[0]);  // объект куда перемещать, первый breakpoint
   const addressMoveDuble = document.querySelector(dataItem[3]);  // объект куда перемещать, второй breakpoint
   const numberOrder = dataItem[1]; // порядковый номер на новом месте относительно дочерних элементов, первый breakpoint
   const numberOrderDuble = dataItem[4]; // порядковый номер на новом месте относительно дочерних элементов, второй breakpoint
// numberOrder и numberOrderDuble можно не объявлять, а сразу подставлять dataItem[1] и dataItem[4]. Но оставил для лучшей читаемости кода.
   const addressParent = e.parentElement; // родитель где находился перемещаемый объект, до breakpoint
   const addressParentArray = addressParent.children; // коллекция дочерних элементов родителя начального положения, до breakpoint

   // присвоение атрибута с порядковым номером для контроля последовательности первоначального положения
   for (let i = 0; i < addressParentArray.length; i++) {
      if (!addressParentArray[i].dataset.n) { // проверка наличия data-n, что бы не было багов с повторным присвоением при наличии более одного перемещаемого объекта
         addressParentArray[i].setAttribute('data-n', `${i}`)
      }
   };
   const eDataNumber = e.dataset.n;  // номер data-n перемещаемого объекта


   /* ---------------- перемещение объекта -------------------------*/

   /* !!!!!!!!!!!!!!!!!!!! ПЕРВЫЙ  breakpoint !!!!!!!!!!!!!!!!!!!!!*/

   const mediaQuery = window.matchMedia(`(max-width: ${dataItem[2]}px)`); // данные медиа-запроса ( breakpoint 1)

   startСhange(); // вызов функции для инициализации перемещений при запуске  ( breakpoint 1)


   function startСhange() {
      if (mediaQuery.matches) {
         addressMove.insertBefore(e, addressMove.children[numberOrder]);
      } else if (addressParentArray.length > 0) { // проверка, остались ли дочерние элементы после перемещения объекта, иначе не будет возврата
         for (let z = 0; z < addressParentArray.length; z++)  { // проверка дочерних элементов родителя и их последовательности
            // возвращение объекта если должен быть не последним, т.е. при наличии элемента перед которым должен находится
            if (addressParentArray[z].dataset.n > eDataNumber) {
               addressParent.insertBefore(e, addressParentArray[z]);
               break;
            } else {
               addressParent.append(e);  // возвращение объекта если должен стоять последним
            }
         }
      }else {
         addressParent.append(e);  // возвращение объекта в родительский если больше нет дочерних элементов
      }
   };

   /* вызов функции при срабатывании медиа-запроса */
   mediaQuery.addEventListener('change', function (u) {
      startСhange();
   })

   /* !!!!!!!!!!!!!!!!!!!! ВТОРОЙ  breakpoint !!!!!!!!!!!!!!!!!!!!!*/
   const mediaQueryDuble = window.matchMedia(`(max-width: ${dataItem[5]}px)`); // данные медиа-запроса  ( breakpoint 2)

   /* вызов функции при срабатывании медиа-запроса */
   mediaQueryDuble.addEventListener('change', function (u) {
      startСhangeDuble();
   })

   startСhangeDuble(); // вызов функции для инициализации перемещений при запуске ( breakpoint 2)

   function startСhangeDuble() {
      if (mediaQueryDuble.matches) {
         addressMoveDuble.insertBefore(e, addressMoveDuble.children[numberOrderDuble]);
      } else {
         startСhange();
      }
   }

});