$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
 
window.onload = function () {
    document.addEventListener("click", documentActions);

    function documentActions(e) {
      const targetElement = e.target;
      if (window.innerWidth > 992 && isMobile.any()) {
          if (targetElement.classList.contains('menu__arrow')) {
              targetElement.closest('.menu__item').classList.toggle('_hover');
          }
      }
    }
}