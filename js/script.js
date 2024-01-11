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

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
  
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
  
    $('.button_catalog-buy').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    function formValidation(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста, введите ваше имя",
          phone: "Пожалуйста, введите ваш номер телефона",
          email: {
            required: "Пожалуйста, введите вашу почту",
            email: "Формат адреса: name@domain.com",
          }
        }
      });
    }
  
    formValidation("#form-consultation");
    formValidation("#consultation form");
    formValidation("#order form");

    $('input[name=phone]').mask('+7 (999) 999-99-99');

    $("form").submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();
        $("form").trigger("reset");
      });
      return false;
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1138) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
  
    $('a[href^="#"]').click(function() {
      const _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });

    new WOW().init();
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