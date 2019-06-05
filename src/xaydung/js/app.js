
$(document).ready(() => {
    var navbar = $('#navbar');
    var toggle = $('[data-menu]');
    var close = $('.fa-times');

    toggle.on('click', function (e) {
        e.preventDefault()
        navbar.toggleClass('active');
    });
    close.on('click', function (e) {
        e.preventDefault()
        navbar.toggleClass('active');
    });

    var swiper = new Swiper('.swiper-product', {
        slidesPerView: 5,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1025: {
                slidesPerView: 4,
                spaceBetween: 20,
                simulateTouch: true,
                autoplay: {
                    delay: 5000
                },
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 20,
                simulateTouch: true,
                autoplay: {
                    delay: 5000
                },
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 20,
                simulateTouch: true,
                autoplay: {
                    delay: 5000
                },
            }
        }
    });
    var swiper = new Swiper('.swiper-work', {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000
                },
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000
                },
            }
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
})

