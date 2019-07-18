$(document).ready(() => {
    var navbar = $('#navbar');
    var toggle = $('[data-menu]');
    var close = $('.close-menu');
    
    toggle.on('click', function (e) {
        e.preventDefault()
        $(navbar).toggleClass('active');
    });
    close.on('click', function (e) {
        e.preventDefault()
        $(navbar).toggleClass('active');
    });
    $(".login-toggle").click(function (e) {
        $("#demo123").toggleClass("d-none");
    })
    $('.user-type-item input').change(function () {
        $('.user_personal,.user_company').toggleClass('hidden');

    });
    
    var swiper = new Swiper('.swiper-logo', {
        slidesPerView: 8,
        loop: true,
        spaceBetween: 10,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next-logo',
            prevEl: '.swiper-button-prev-logo',
        },
        breakpoints: {
            1025: {
                slidesPerView: 3,
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
    var swiper = new Swiper('.swiper-cate', {
        slidesPerView: 8,
        loop: true,
        spaceBetween: 20,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next-logo',
            prevEl: '.swiper-button-prev-logo',
        },
        breakpoints: {
            1025: {
                slidesPerView: 6,
                spaceBetween: 20,
                simulateTouch: true,
                autoplay: {
                    delay: 5000
                },
            },
            769: {
                slidesPerView: 4,
                spaceBetween: 20,
                simulateTouch: true,
                autoplay: {
                    delay: 5000
                },
            },
            440: {
                slidesPerView: 2,
                spaceBetween: 20,
                simulateTouch: true,
                autoplay: {
                    delay: 5000
                },
            }
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs-new', {
        spaceBetween: 10,
        slidesPerView: 1,
        simulateTouch: false,
        slidesPerColumn: 4,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top-new', {
        spaceBetween: 10,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next-news',
            prevEl: '.swiper-button-prev-news',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    var swiper = new Swiper('.swiper-sale', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
        },
        autoplay: {
            delay: 5000
        },
        breakpoints: {
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }
    });
    var cart_weight = "{{ $cart_weight }}";
    $(document).on('click', '[name="ship_as_bill"]', function () {
        var shipping_infomation = $('#shipping_infomation').find('input,select');
        var form = $(this).closest('form');
        if ($(this).prop('checked')) {
            shipping_infomation.each(function () {
                $(this).attr('disabled', true);
            })
            $('#shipping_infomation').attr('hidden', true);
        } else {
            shipping_infomation.each(function () {
                $(this).attr('disabled', false);
            })
            $('#shipping_infomation').attr('hidden', false);
        }
    });
})

var swiper = new Swiper('.swiper-main', {
    loop: true,
    height: 280,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(function () {

    $('.spinner .btn:first-of-type').on('click', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val(), 10) + 1);
        } else {
            btn.next("disabled", true);
        }
    });
    $('.spinner .btn:last-of-type').on('click', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val(), 10) - 1);
        } else {
            btn.prev("disabled", true);
        }
    });
})
$(document).on('click', '.number-spinner button', function (e) {
    e.preventDefault()
    var btn = $(this),
        oldValue = btn.closest('.number-spinner').find('input').val().trim(),
        newVal = 0;

    if (btn.attr('data-dir') == 'up') {
        newVal = parseInt(oldValue) + 1;
    } else {
        if (oldValue > 1) {
            newVal = parseInt(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    btn.closest('.number-spinner').find('input').val(newVal);
});
$('#zoom1,#zoom2,#zoom3,#zoom4').zoom();
$('.money').simpleMoneyFormat();
