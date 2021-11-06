$(document).ready(function () {
    $('.header__burger,.header__link').click(function(event){
       $('.header__burger,.header__menu').toggleClass('active');
      //  $('body').toggleClass('lock')
    });
    $('.politics__backgraund,.politics__text,.politics__close').click(function(event){
      $('.politics__backgraund').toggleClass('active');
      $('body').toggleClass('lock')
   });
   $('.fixed__img1,.box__btn-bt,.body-title-close').click(function(event){
    $('.backround__telephon').toggleClass('open');
 });
 });

document.addEventListener('DOMContentLoaded', function () {
   new SimpleAdaptiveSlider('.slider', {
     loop: true,
     autoplay: true,
     interval: 7000,
     swipe: true,
   });
 });
