$(document).ready(function () {
    $(".main-header__img").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $(".shopify-info__item").owlCarousel({
        loop: true,
        nav: false,
        items: 3,
        dots: false,
        margin: 15,
        // autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true,
    });
});