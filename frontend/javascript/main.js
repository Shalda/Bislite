requirejs.config({
    baseUrl: './public/js'
});
define(["jquery", "domReady", "isotope.pkgd.min", "swiper", "map"], function ($, a, Isotope) {

    var iso = new Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-nav').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        iso.arrange({ filter: filterValue });
    });

    $('.portfolio-nav li').click(function () {
        $('.portfolio-nav li').removeClass('active');
        $(this).addClass('active')
    });

    //header menu

    $('.has_children').hover(function () {
        $(this)
            .find('.submenu')
            .stop()
            .slideToggle()
    });

    //первый слайдер
    var swiper1 = new Swiper('.swiper1', {
        pagination: '.swiper-pagination',
        paginationClickable: true

    });

    //второй слайдер
    var swiper2 = new Swiper('.swiper2', {
        pagination: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        spaceBetween: 40
    });

   


});

