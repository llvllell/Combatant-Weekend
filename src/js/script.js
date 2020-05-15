const burger = document.querySelector('.header__burger');
const topMenu = document.querySelector('.top-menu');
const cardFront = document.querySelectorAll('.card__front');
const cardBack = document.querySelectorAll('.card__back');
const cardFrontBtn = document.querySelectorAll('.card-front__btn');
const cardBackBtn = document.querySelectorAll('.card-back__btn');
const card = document.querySelectorAll('.card');
const cardBtn = document.querySelectorAll('.card__btn');
const headerBtn = document.querySelector('.header__btn');
const backCallContainer = document.querySelector('.back-call-container');
const closeBtn = document.querySelector('.close-btn');
const orderBtn = document.querySelectorAll('.order-btn');
const body = document.querySelector('body');



burger.addEventListener('click', function(e){
  e.preventDefault();
  topMenu.classList.toggle('top-menu--active');
});

topMenu.addEventListener('click', function(e){
  const isLink = e.target.classList.contains('top-menu__link');

  if(isLink) {
    topMenu.classList.remove('top-menu--active');
  }
});


cardFront.forEach(function(buttonFront){

  buttonFront.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.add('card__front--active');
    this.nextElementSibling.classList.add('card__back--active');
  });

});

cardBack.forEach(function(buttonBack){

  buttonBack.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.remove('card__back--active');
    this.previousElementSibling.classList.remove('card__front--active');
  });

});

orderBtn.forEach(function(button){

  button.addEventListener('click', function(e){
    e.preventDefault();
    backCallContainer.classList.add('back-call-container--active');
    body.classList.add('no-scroll');
  });

});

closeBtn.addEventListener('click', function(e){
  e.preventDefault();
  backCallContainer.classList.remove('back-call-container--active');
  body.classList.remove('no-scroll');
});

backCallContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('back-call-container')){
    backCallContainer.classList.remove('back-call-container--active');
    body.classList.remove('no-scroll');
  }
});



$(function(){
  $("#back-call-phone").mask("+7-(999)-999-9999");
  $("#title-form-phone").mask("+7-(999)-999-9999");
});
