$(document).ready(function () {
  $('.accordion').click(function () {
    if (!$(this).hasClass('active')) {
      $('.accordion').removeClass('active');
      $('.panel').slideUp();
      $(this).parent().children('.panel').slideDown();
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
      $(this).parent().children('.panel').slideUp();
    }
    return false;
  });
});
