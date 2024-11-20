$(document).ready(function () {
    // ページアクセス後3秒後に1回だけ初期化
    setTimeout(function() {
        initializeSlick();
        $('.op-box').css({
            'opacity': '0',
            'pointer-events': 'none'
        });
        $('body').removeClass('body-hidden');
    }, 3000);
    
    // スライダーの初期化
    initializeSlick();

    // スクロールで要素をフェードインさせる設定
    $(".fade, .fade-right, .fade-left").on("inview", function (event, isInView) {
        if (isInView) {
            $(this).addClass("fade-in");
        }
    });

    $(window).on('scroll', function() {
        let scrollPosition = $(window).scrollTop();
        let windowWidth = window.innerWidth;

        if (scrollPosition > 600) {
            if (windowWidth >= 768) {
                $('.top-button').addClass('show-element');
                $('.control-box').removeClass('show-element').attr("aria-hidden", "false");
            } else {
                $('.control-box').addClass('show-element').attr("aria-hidden", "false");
                $('.top-button').removeClass('show-element');
            }
        } else {
            $('.top-button').removeClass('show-element');
            $('.control-box').removeClass('show-element').attr("aria-hidden", "true");
        }
    });

    $(window).on('resize', function() {
        let windowWidth = window.innerWidth;

        if (windowWidth >= 768) {
            $('.button-box').removeClass('show-element');
        } else {
            $('.top-button').removeClass('show-element');
        }
    });
    
    // トップに戻るボタンの設定
    $('.top-button').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    // ハンバーガーメニュー開閉の設定
    $('.menu-button').on('click', function () {
        $('.menu-box,.body-base').toggleClass('open');
    });

    let resizeTimer;

    function checkWidth() {
        if (window.innerWidth >= 768) {
            $('.menu-box,.body-base').removeClass('open');
        }
    }

    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkWidth, 100);
    });

    $(window).on('load', checkWidth);
});

function initializeSlick() {
    if ($('.slide-items').hasClass('slick-initialized')) {
        $('.slide-items').slick('unslick');
    }

    $('.slide-items').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        speed: 3000
    });
}
