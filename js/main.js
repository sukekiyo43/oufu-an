$(document).ready(function(){
    function initializeSlick(){
        if ($(window).width() >= 768) {
            if (!$('.slide-items').hasClass('slick-initialized')) {
                $('.slide-items').slick({
                    autoplay: true,
                    autoplaySpeed: 5000,
                    fade: true,
                    arrows: false,
                    speed: 3000 // フェードの速度を1秒に設定
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
                    speed: 3000 // フェードの速度を1秒に設定
                });
            }
            if ($('.slide-items').hasClass('slick-initialized')) {
                $('.slide-items').slick('unslick');
            }
        }
    }

    initializeSlick();
    $(window).resize(initializeSlick);
});
