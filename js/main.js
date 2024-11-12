$(document).ready(function () {
    // MVスライドの設定
    function initializeSlick() {
        if ($(window).width() >= 768) {
            if (!$('.slide-items').hasClass('slick-initialized')) {
                $('.slide-items').slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    fade: true,
                    arrows: false,
                    speed: 3000
                });
            }
            if ($('.slide-items-sp').hasClass('slick-initialized')) {
                $('.slide-items-sp').slick('unslick');
            }
        } else {
            if (!$('.slide-items-sp').hasClass('slick-initialized')) {
                $('.slide-items-sp').slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    fade: true,
                    arrows: false,
                    speed: 3000
                });
            }
            if ($('.slide-items').hasClass('slick-initialized')) {
                $('.slide-items').slick('unslick');
            }
        }
    }

    initializeSlick();
    $(window).resize(initializeSlick);

    // スクロールで要素をフェードインさせる設定
    $(".fade, .fade-right, .fade-left").on("inview", function () {
        $(this).addClass("fade-in");
    });

    // トップに戻るボタンの設定
    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();

        if (scrollPosition > 600) {
            $('.top-button').addClass('top-button-visible');
        } else {
            $('.top-button').removeClass('top-button-visible');
        }
    });

    $('.top-button').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // ハンバーガーメニュー開閉の設定
    $('.menu-button').on('click', function () {
        $('.menu-box').toggleClass('open');
        $('body').toggleClass('open');
    });

    let resizeTimer;

    function checkWidth() {
        if ($(window).outerWidth(true) >= 768) {
            $('.menu-box').removeClass('open');
            $('body').removeClass('open');
        }
    }

    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkWidth, 100);
    });

    $(window).on('load', checkWidth);

});
