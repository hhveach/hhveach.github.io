$(document).ready(function(){
  $('.container').slick({
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    mobileFirst: true
  });
});

let livePopup = document.querySelector('.live');
let hov = document.querySelector('.popup');
  hov.addEventListener('mouseenter', function(){
    livePopup.style.display = 'block';
    });
    hov.addEventListener('mouseleave', function(){
      livePopup.style.display = 'none';
      });
