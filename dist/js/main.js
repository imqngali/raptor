$('.hamburger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('hamburger_active');
    return;
});

$('a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 350,
        easing: "linear"
    });
    return false;
});

$('.hamburger').click(function () {
    if ($(".header__burger-menu").is(":visible") == true) {
        $('.header__burger-menu').hide();
        $('body').css('overflow', 'auto');
    } else {
        $('.header__burger-menu').show();
        $('body').css('overflow', 'hidden')
        $('.header__link').click(function () {
            $('.header__burger-menu').hide();
            $('body').css('overflow', 'auto');
            $('.hamburger_active').removeClass('hamburger_active');
        });
    }
});

$('.sliders__wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2000,
    infinite: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../img/arrow-prev.svg"></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../img/arrow-next.svg"></button > ',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
})