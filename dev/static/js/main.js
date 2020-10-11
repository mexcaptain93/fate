$(document).ready(function () {
    svg4everybody({});
    header();
    articlesSlider();
    articlePush();
    footer();
});



function header() {
    var togglerMenu = $('.js-mobile-menu-toggler'),
        header = $('.js-header'),
        headerMenuClass = 'header_menu-mob-opened',
        search = $('.js-mobile-search'),
        togglerSearch = $('.js-search-toggler'),
        menu = $('.js-mobile-menu'),
        level1 = '.mobile-menu__item',
        level2 = '.submenu',
        activeMenu= 'mobile-menu__item_active';


    // Поиск
    togglerSearch.on('click', function (e) {
        e.preventDefault();
        search.toggle();
        togglerSearch.toggleClass('header__search-block_active');
        header.removeClass(headerMenuClass);
    });

    // Меню
    togglerMenu.on('click', function (e) {
        console.log(togglerSearch)
        e.preventDefault();
        header.toggleClass(headerMenuClass);
        search.hide();
        menu.find(level2).hide();
        togglerSearch.removeClass('header__search-block_active');
        $(level1).removeClass(activeMenu);
    })

    menu.find(level1).on('click', function (e) {
        menu.find(level2).hide();
        menu.find(level1).removeClass(activeMenu);
        $(this).toggleClass(activeMenu).find(level2).show();
    })

}

function articlesSlider() {
    var indexTopSlider = new Swiper('.js-index-top-slider .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        parallax: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 0,
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            modifier: 12,
            depth: 50,
            stretch: 10
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    slideShadows: false,
                    modifier: 11,
                    depth: 50,
                    stretch: 40
                },
            },
            900: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    slideShadows: false,
                    modifier: 13,
                    depth: 50,
                    stretch: 55
                },
            },
        },
        init: false

    });
    indexTopSlider.on('init', function() {
        $('.js-index-top-slider .swiper-pagination').prepend('<i class="swiper-top-prev"></i>')
        $('.js-index-top-slider .swiper-pagination').append('<i class="swiper-top-next"></i>')
    });

    indexTopSlider.init();

    var indexRubricSlider = new Swiper('.js-index-rubric-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30

            },

        }
    });




}

function articlePush() {
    $('.article__push').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.article__descr').toggleClass('opened');
        $(this).siblings('.article__img').toggleClass('opened');
        $(this).toggleClass('opened');
    });
}

function footer () {
    $('.js-footer-menu-opener').on('click', function (e) {
        e.preventDefault();
        $('.js-footer-menu').slideToggle('fast');
        $(this).toggleClass('opened');
    })
}