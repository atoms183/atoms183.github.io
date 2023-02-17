 (function ($) {
      $(window).on("load", function () {
        $('body').mCustomScrollbar({
          theme: "dark"
        });
      });
    })(jQuery);
    
    $(document).ready(function () {
      $('.slider').slick({
        arrows:true,
        slidesToShow: 1,
        autoplay:true,
         speed:3000,
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
