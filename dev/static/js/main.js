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
        e.preventDefault();
        header.toggleClass(headerMenuClass);
        search.hide();
        $(level2).hide();
        togglerSearch.removeClass('header__search-btn_active');
    })

    menu.find(level1).on('click', function (e) {
        $(level2).hide();
        $(level1).removeClass(activeMenu)
        $(this).toggleClass(activeMenu).find(level2).show();
    })

}

function articlesSlider() {
    var indexTopSlider = new Swiper('.js-index-top-slider .swiper-container', {
        effect: 'coverflow',
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
        },
    });

    var indexRubricSlider = new Swiper('.js-index-rubric-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });



}

function articlePush() {
    $('.article-block__push').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.article-block__descr').toggleClass('opened');
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