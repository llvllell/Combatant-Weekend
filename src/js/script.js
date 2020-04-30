const burger = document.querySelector('.header__burger');
const topMenu = document.querySelector('.top-menu');
const cardFront = document.querySelector('.card__front');
const cardBack = document.querySelector('.card__back');
const cardFrontBtn = document.querySelectorAll('.card-front__btn');
const cardBackBtn = document.querySelectorAll('.card-back__btn');
const card = document.querySelectorAll('.card');
const cardBtn = document.querySelectorAll('.card__btn');
const headerBtn = document.querySelector('.header__btn');
const backCallContainer = document.querySelector('.back-call-container');
const closeBtn = document.querySelector('.close-btn');
const orderBtn = document.querySelectorAll('.order-btn');



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


cardFrontBtn.forEach(function(buttonFront){

  buttonFront.addEventListener('click', function(e){
    e.preventDefault();
    this.parentElement.classList.add('card__front--active');
    this.parentElement.nextElementSibling.classList.add('card__back--active');
  });

});

cardBackBtn.forEach(function(buttonBack){

  buttonBack.addEventListener('click', function(e){
    e.preventDefault();
    this.parentElement.classList.remove('card__back--active');
    this.parentElement.previousElementSibling.classList.remove('card__front--active');
  });

});

orderBtn.forEach(function(button){

  button.addEventListener('click', function(e){
    e.preventDefault();
    backCallContainer.classList.add('back-call-container--active');
  });

});

closeBtn.addEventListener('click', function(e){
  e.preventDefault();
  backCallContainer.classList.remove('back-call-container--active');
});