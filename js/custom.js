(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/banner_1.jpg' },
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
