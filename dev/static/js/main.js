$(document).ready(function () {
    svg4everybody({});
    header();
    articlesSlider();
    articlePush();
    footer();
    privacyBtn();
    changeArticle();
    similarSlider();
    sendMail();
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
        sidemenuLevel1 = '.side-menu__item i',
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
        $(this).parent().toggleClass('side-menu__item_opened');
    });

    //adaptive cut menu
    var wrapper = document.querySelector(".nav-wrapper");
    var nav = priorityNav.init({
        mainNavWrapper: ".header__menu", // mainnav wrapper selector (must be direct parent from mainNav)
        mainNav: ".menu__list", // mainnav selector. (must be inline-block)
        navDropdownLabel: '...',
        navDropdownClassName: "menu__dropdown", // class used for the dropdown.
        navDropdownToggleClassName: "menu__dropdown-toggle", // class used for the dropdown toggle.
    });

    setTimeout(function () {
        $('.header__top').css({'opacity': '1'});
    }, 1000);


}

function articlesSlider() {

    if ($('.js-index-top-slider').length) {
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

                1366: {
                    slidesPerView: 'auto',
                    coverflowEffect: {
                        rotate: 0,
                        slideShadows: false,
                        modifier: 15,
                        depth: 30,
                        stretch: 45
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
    }

    if ($('.js-index-rubric-slider').length) {
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

    if ($('.js-side-rubric-slider').length) {
        var sideRubricSlider = new Swiper('.js-side-rubric-slider .swiper-container', {
            slidesPerView: 1,
            loop: true
        });

        $('.js-side-rubric-slider-prev').on('click', function (e) {
            e.preventDefault();
            sideRubricSlider.slidePrev();
        });

        $('.js-side-rubric-slider-next').on('click', function (e) {
            e.preventDefault();
            sideRubricSlider.slideNext();
        });
    }

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

function privacyBtn() {
    var btn = $('.js-privacy-input'),
        label =  $('.js-privacy-label'),
        privacy = $('.js-privacy');

    label.on('click', function () {
        if (privacy.prop('checked')) {
            btn.prop('disabled', true);
        } else {
            btn.prop('disabled', false);
        }
    })
}

function changeArticle() {
    var changer = $('.article__change');

    changer.on('click', function (e) {
        e.preventDefault();


        var article = $(this).parents('.article'),
            img = article.find('.article__img-wrap a'),
            name = article.find('.article__name a'),
            category = article.find('.article__category span'),
            descr = article.find('.article__descr span'),
            views = article.find('.article__views span'),
            rating = article.find('.article__name span'),
            link = article.find('a'),
            id = $(this).attr('data-id'),
            changer_btn = $(this);

        article.css({'opacity':0});

        $.ajax({
            type: "POST",
            url: "/ajax/changeArticle.php?id=" + id,
            data: "id="+id,
            success: function(msg){
                var data = jQuery.parseJSON(msg);

                if (data) {
                    name.html('<span>' + data.name + '</span>');
                    category.html(data.category);
                    views.html(data.views);
                    rating.html(data.rating);
                    link.attr('href', data.url);
                    descr.html(data.descr);
                    article.css({'opacity':1});
                    img.html('<img src="' + data.picture + '" alt="' + data.name + '">');
                    changer_btn.attr('data-id', data.id_change);
                }
            }
        });
    });
}

function similarSlider() {
    var similarSlider = new Swiper('.js-similar .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        breakpoints: {
            768: {
                freeMode: false,
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            1024: {
                freeMode: false,
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: false,
            }
        },

    });

    $('.js-similar-slider-prev').on('click', function (e) {
        e.preventDefault();
        similarSlider.slidePrev();
    });

    $('.js-similar-slider-next').on('click', function (e) {
        e.preventDefault();
        similarSlider.slideNext();
    });
}

function sendMail() {
    var link = '';

    $('.article__mail').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-mail').show();

        link = $(this).parents('.article').find('.article__name a').attr('href');
    });

    $('.js-popup-mail-close').on('click', function (e) {
        e.preventDefault();
        $('.js-popup-mail').hide();
    });

    $('.js-popup-mail').on('click', function (e) {
        e.preventDefault();

        if (e.target === this) {
            $('.js-popup-mail').hide();
        }
    });

    $('.js-popup-mail-send').on('click', function (e) {
        e.preventDefault();

        mail = $('.js-popup-mail .input').val();

        $.ajax({
            type: "POST",
            url: "/ajax/sendMail.php?",
            data: "link="+link+"&mail="+mail,
            success: function(msg){

                if (msg != "Ошибка!") {
                    $('.js-popup-mail-send').html('Отправлено!').attr('disabled', true);
                    $('.js-popup-mail .input').val('').hide();
                    $('.js-popup-mail-close').hide();


                    setTimeout(function(){
                        $('.js-popup-mail').hide();
                        $('.js-popup-mail-send').html('Отправить!').attr('disabled', false);
                        $('.js-popup-mail-close').show();
                        $('.js-popup-mail .input').show();

                    }, 2000);
                }

            }
        });

    });
}