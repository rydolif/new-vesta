$(function() {

//------------------------------гамбургер-----------------------------
  var swiper = new Swiper('.stratagy__slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: '.stratagy__slider_next',
      prevEl: '.stratagy__slider_prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      480: {
        slidesPerView: 1
      },
    }
  });

  
});
