 
    const iconMenu = document.querySelector('.menu__icon');
    const menuBody = document.querySelector('.menu');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
     
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}
 
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 599px, показываем кнопку
        if (pageYOffset > 100) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиываем на самый верх
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
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
    


    var url=document.location.href;
    $.each($("#active_link a"),function(){
    if(this.href==url){$(this).addClass('active');};
    });