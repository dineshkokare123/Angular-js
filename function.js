$(window).load(function() {

    var $container = $('.animate-grid .gallary-thumbs');

    $container.isotope({

        filter: '*',

        transitionDuration: '0.6s',

    });

    $('.animate-grid .categories a').click(function() {

        $('.animate-grid .categories .active').removeClass('active');

        $(this).addClass('active');

        var selector = $(this).attr('data-filter');

        $container.isotope({

            filter: selector

        });

        return false;

    });

});