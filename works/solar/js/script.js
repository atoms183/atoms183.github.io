   /* (function ($) {
      $(window).on("load", function () {
        $('body').mCustomScrollbar({
          theme: "dark"
        });
      });
    })(jQuery);*/
    
    $(document).ready(function () {
      $('.slider').slick({
        arrows:true,
        slidesToShow: 1,
        autoplay:false,
         speed:800,
         autoplaySpeed:800,
           responsive:[
           {
             breakpoint: 1250,
             settings: {
               slidesToShow:1
             }
           }
         ]
      });
     });

     $(document).ready(function () {
      $('.tab__slider').slick({
        arrows:true,
        slidesToShow: 1,
        autoplay:false,
         speed:800,
         autoplaySpeed:1800,
      });
     });
     
// ========== Переменные для "tabo'v" ==========
const tabsTitle = document.querySelectorAll('.column-tab__title');
const tabsContent = document.querySelectorAll('.tab__content');


// Перебираем все заголовки табов и вешаем на них click
tabsTitle.forEach(item => item.addEventListener('click', event => {
    
    // Получаем атрибут заголовка на который мы кликнули конкретно!
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    // Удаляем от всех заголовков класс active-tab
    tabsTitle.forEach(element => element.classList.remove('active-tab'));

    // Добавляем всем tab__content класс hidden-tab-content, который скрывает содержимое!
    tabsContent.forEach(element => element.classList.add('hidden-tab-content'));

    // Добавляем класс active-tab, заголовку который нажали в данный момент!
    item.classList.add('active-tab');

    // Удаляем класс hidden-tab-content, чтобы показывалось его содержимое!
    document.getElementById(tabsTitleTarget).classList.remove('hidden-tab-content');

}));

// Мы указываем, какая конктретно вкладка должна быть активна при загрузке страницы со старта,
// если нужно, чтобы все вкладки ыли скрыты изначально, то удалите код ниже!
document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden-tab-content');