$(document).ready(function(){
  $('.projects-cont').slick({
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    mobileFirst: true
  });
});
// let livePopup = document.querySelector('.live');
// let hov = document.querySelector('.popup');
//   hov.addEventListener('mouseenter', function(){
//     livePopup.style.display = 'block';
//     });
//     hov.addEventListener('mouseleave', function(){
//       livePopup.style.display = 'none';
//       });

// let navs = document.querySelectorAll('.slow');
// let navArray = [];
// navArray.push(...navs);
// navArray.map((els) => els.addEventListener('click', () => console.log('working')));

$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});
