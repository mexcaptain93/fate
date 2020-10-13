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
        activeMenu= 'mobile-menu__item_active',
        sidemenu = $('.js-side-menu'),
        sidemenuLevel1 = '.side-menu__item',
        sidemenuLevel2 = '.submenu__item';


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
    });

    menu.find(level1).on('click', function (e) {
        menu.find(level2).hide();
        menu.find(level1).removeClass(activeMenu);
        $(this).toggleClass(activeMenu).find(level2).show();
    });

    sidemenu.find(sidemenuLevel1).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('side-menu__item_opened');
    });


}

function articlesSlider() {
    var indexTopSlider = new Swiper('.js-index-top-slider .swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        parallax: true,
        centeredSlides: true,
        initialSlide: 0,
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            modifier: 12,
            depth: 50,
            stretch: 10
        },
        loop: true,
        loopedSlides: 2,
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
                    stretch: 45
                },
            },
            1000: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    slideShadows: false,
                    modifier: 13,
                    depth: 50,
                    stretch: 55
                },
            },
            1280: {
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 0,
                    slideShadows: false,
                    modifier: 13,
                    depth: 50,
                    stretch: 35
                },
            },
        },
        init: false

    });
    indexTopSlider.on('init', function() {
        $('.js-index-top-slider .swiper-pagination').append('<i class="swiper-top-prev js-index-top-slider-prev"></i><i class="swiper-top-next js-index-top-slider-next"></i>')
    });

    indexTopSlider.init();

    $('.js-index-top-slider-prev').on('click', function (e) {
        e.preventDefault();
        indexTopSlider.slidePrev();
    });

    $('.js-index-top-slider-next').on('click', function (e) {
        e.preventDefault();
        indexTopSlider.slideNext();
    });

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

    var sideRubricSlider = new Swiper('.js-side-rubric-slider .swiper-container', {
        slidesPerView: 1,
        loop: true
    })

    $('.js-side-rubric-slider-prev').on('click', function (e) {
       e.preventDefault();
       sideRubricSlider.slidePrev();
    });

    $('.js-side-rubric-slider-next').on('click', function (e) {
       e.preventDefault();
       sideRubricSlider.slideNext();
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