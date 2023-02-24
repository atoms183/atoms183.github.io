$(document).ready(function() {
$('.header__burger').click(function(event) {
$('.header__burger,.mobile-header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});
