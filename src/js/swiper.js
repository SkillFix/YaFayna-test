$(document).ready(function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

      centeredSlides: true,
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      resizeObserver: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // new Swiper('.swiper');
});
