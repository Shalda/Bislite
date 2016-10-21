$('document').ready(function () {
   //выподающее меню
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
        spaceBetween: 30
    });

    //блоб на работах
    $('.works-slide').hover(function () {
        $(this)
            .find('.blob')
            .stop()
            .slideToggle('fast')
    })

});