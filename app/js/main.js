$(document).ready(function() {
    $('.goods_slider').slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        prevArrow: $('.goods_slider_prev'),
        nextArrow: $('.goods_slider_next'),
        Infinity: false,
        dots: true,
        appendDots: $('.goods_nav'),
        customPaging : function(slider, i) {
            var slidernav = $(slider.$slides[i]).data('slidernav');
            return '<a>'+slidernav+'</a>';
        },
    });

    $('.about_clients_slider').slick({
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

    $('.about_principles_slider').slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        prevArrow: $('.about_principles-prev'),
        nextArrow: $('.about_principles-next')
    });

    $('.header_slider').slick({
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        infinite: true,
        nextArrow: $('.header_next'),
        prevArrow: false
    });

    $('#goods_nav').click( function () {
      $('.dropdown-child').toggleClass('active');
    });

    $('.menu_burger').click(function(){
      $('.menu_burger').toggleClass('active');
      $('.header_menu').toggleClass('active');
  });
});