$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
    $('.header__menu-list-item').on('click', function(){
      $('.header__burger').click();
  });

  $(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".header__burger,.header__menu,.header__menu-list,.header-logo").length === 0) {
        $(".header__burger,.header__menu").removeClass("active");
    }
});


$('a[href^="#"]').on('click', function(event) {
    var hash = '#' + $(this).attr('href').split('#')[1]
    var element = $(hash)
    if (element.length) {
      event.preventDefault();
      $('html, body').animate({scrollTop: element.offset().top}, 500)
    }
  });  

});

// Slider

$('.web__wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive:[
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },{
      breakpoint: 625,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});
