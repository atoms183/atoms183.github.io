//$(function() {
//$(".preloader").fadeOut();

//}); 



	$(".loader_inner").delay(6500).fadeOut();
	$(".loader").delay(6500).fadeOut("slow");

	$(document).ready(function() {
  // Nav icon
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $("#menu-overlay").toggleClass("menu-show");
  });

});

var heroHeight;


if ($(".hero").length) {


  $(window).on("load resize", function() {

    heroHeight = $(".hero").outerHeight();
    if ($(window).scrollTop() >= heroHeight - 35) {
      $("#nav-icon").addClass("dark");
    }

    //Match hero height to window height

    var heroTextHeight = $(".start-page .text").height();

    if ($(window).height() < heroTextHeight) {
      $(".start-page").addClass("cut");
    } else {
      $(".start-page").removeClass("cut");
    }

    $('.start-page').css("min-height", $(window).height());

  });

  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= heroHeight - 35) {
      $("#nav-icon").addClass("dark");
    } else {
      $("#nav-icon").removeClass("dark");
    }
  });

}

// Menu Scroll to content and Active menu
var lastId,
  topMenu = $("#menu.scroll"),
  //topMenuHeight = topMenu.outerHeight()+145,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

$('ul.menu-click.scroll a[href*=#]').bind('click', function(e) {
  e.preventDefault();
  var target = $(this).attr("href");

  $("#nav-icon").removeClass('open');
  $("#menu-overlay").removeClass("menu-show");

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 1000 );

  return false;
});
