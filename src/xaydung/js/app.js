
$(document).ready(() => {
    var navbar = $('#navbar');
    var toggle = $('[data-menu]');
    var close = $('.fa-times');
    $('.thumbnail').on('click', function () {
        $('#overlay')
            .css({ backgroundImage: `url(${this.src})` })
            .addClass('open')
            .one('click', function () { $(this).removeClass('open'); });
    });
    toggle.on('click', function (e) {
        e.preventDefault()
        navbar.toggleClass('active');
    });
    close.on('click', function (e) {
        e.preventDefault()
        navbar.toggleClass('active');
    });
    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image').show();
        if (counter_max == counter_current) {
            $('#show-next-image').hide();
        } else if (counter_current == 1) {
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr) {
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function () {
            if ($(this).attr('id') == 'show-previous-image') {
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]').each(function () {
                counter++;
                $(this).attr('data-image-id', counter);
            });
        }
        $(setClickAttr).on('click', function () {
            updateGallery($(this));
        });
    }
    var swiper = new Swiper('.swiper-logo', {
        slidesPerView: 8,
        loop: true,
        spaceBetween: 10,
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    var swiper = new Swiper('.swiper-galleryabout', {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    var swiper = new Swiper('.swiper-product', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
})

$(window).scroll(function () {

    var height = $(window).scrollTop();

    if (height >= 300) {
        $('.scroll-top').addClass('show');
    } else {
        $('.scroll-top').removeClass('show');
    }

});
$(".append").append("This" + height + "is!");

