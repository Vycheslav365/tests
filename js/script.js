$(document).ready(function () {
    $('.header__burger,.header__link').click(function(event){
       $('.header__burger,.header__menu').toggleClass('active');
       $('body').toggleClass('lock')
    });
    $('.politics__backgraund,.politics__text,.politics__close').click(function(event){
      $('.politics__backgraund').toggleClass('active');
      $('body').toggleClass('lock')
   });
 });

document.addEventListener('DOMContentLoaded', function () {
   // инициализация слайдера
   new SimpleAdaptiveSlider('.slider', {
     loop: true,
     autoplay: true,
     interval: 5000,
     swipe: true,
   });
 });

// $(document).ready(function () {
//   $('.img__calls,.form__close').click(function(event){
//      $('.form__main').toggleClass('open');
//      $('body').toggleClass('lock')
//   });
// });