$(document).ready(function () {
    svg4everybody({});
    header();
});



function header() {
    var togglerMenu = $('.js-mobile-menu-toggler'),
        header = $('.js-header'),
        headerMenuClass = 'header_menu-mob-opened',
        search = $('.js-mobile-search'),
        togglerSearch = $('.js-mobile-search-toggler'),
        menu = $('.js-mobile-menu'),
        level1 = '.mobile-menu__item',
        level2 = '.submenu',
        activeMenu= 'mobile-menu__item_active';


    // Поиск
    togglerSearch.on('click', function (e) {
        e.preventDefault();
        search.toggle();
        togglerSearch.toggleClass('header__search-btn_active');
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
