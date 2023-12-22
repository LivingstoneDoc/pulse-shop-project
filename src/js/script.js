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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__part').removeClass('catalog__part_active').eq($(this).index()).addClass('catalog__part_active');
    });
  
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__default').eq(i).toggleClass('catalog-item__default_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };
  
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  
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