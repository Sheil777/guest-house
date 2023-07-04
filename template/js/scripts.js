new AirDatepicker('.main__calendar', {
    selectedDates: [, ,Date.now()]
})
new AirDatepicker('.main__calendar2', {
    selectedDates: [, ,Date.now()]
})

// Бургер
$(document).ready(
    function(){
        $('.burger').click(
            function (event) {
                $('div.burger').toggleClass('burger_close');
                $('.header__menu').toggleClass('menu_phone');
                $('.menu__list').toggleClass('menu_phone');
                $('.header__social').toggleClass('menu_phone');
            }
        );
    }
);

// Слайдер отзывов

const slider2 = new Swiper('.feedback__slider-2', {
    speed: 400,
    spaceBetween: 50,
    effect: 'fade',
    allowTouchMove: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const slider1 = new Swiper('.feedback__slider-1', {
    speed: 400,
    spaceBetween: 50,
    thumbs: {
        swiper: slider2,
        slidesPreView: 1,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});