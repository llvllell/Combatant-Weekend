var swiperOne = new Swiper('.title-page__slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },
  effect: 'fade',  
});

var swiperTwo = new Swiper('.photo__slider', {

  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  pagination: {
    el: '.photo-slider__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.photo__btn--next',
    prevEl: '.photo__btn--prev',
  }

});