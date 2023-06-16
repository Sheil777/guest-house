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
const swiper = new Swiper('.feedback__slider-1', {
    speed: 400,
    spaceBetween: 50,
});