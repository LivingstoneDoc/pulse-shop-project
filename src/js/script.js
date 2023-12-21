$(document).ready(function(){
    // $('.carousel__widget').slick({
    //   speed: 1200,
    //   // adaptiveHeight: true,
    //   prevArrow: '<button type="button" class="slick-prev"><img src="assets/icons/carousel/left-arrow.svg" alt="arrow"></button>',
    //   nextArrow: '<button type="button" class="slick-next"><img src="assets/icons/carousel/right-arrow.svg" alt="arrow"></button>',
    //   responsive: [
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         dots: true,
    //         arrows: false,
    //     },
    //   }],
    // });
  
  });
  
  
  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    center: true,
    speed: 1200,
    mouseDrag: true,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      1080: {
        nav: false
      }
    },
  });
  
  document.querySelector('.prev-button').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next-button').addEventListener('click', function () {
    slider.goTo('next');
  });