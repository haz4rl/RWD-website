(function ($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function (e) {
        if (
            location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
            location.hostname === this.hostname
        ) {
            let target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

            if (target.length) {
                $('html, body').animate(
                    { scrollTop: target.offset().top - 70 },
                    600
                );
                e.preventDefault();
            }
        }
    });

    $('.js-scroll-trigger').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    function navbarShrink() {
        if ($('#mainNav').offset().top > 100) {
            $('#mainNav').addClass('navbar-shrink shadow-sm');
        } else {
            $('#mainNav').removeClass('navbar-shrink shadow-sm');
        }
    }

    navbarShrink();
    $(window).on('scroll', navbarShrink);

})(jQuery);
