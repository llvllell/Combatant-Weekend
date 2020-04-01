var swiperOne = new Swiper('.title-page__slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },
  effect: 'fade',  
});

var swiperTwo = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
    

});