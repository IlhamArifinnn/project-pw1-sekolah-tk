(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);



// jam digital
function jam() {
    setInterval(function () {
 
       var waktu = new Date();
       var jam   = document.getElementById('clock');
       var hours = waktu.getHours();
       var minutes = waktu.getMinutes();
       var seconds = waktu.getSeconds();
 
       if (waktu.getHours() < 10)
       {
          hours = '0' + waktu.getHours();
       }
       if (waktu.getMinutes() < 10)
       {
          minutes = '0' + waktu.getMinutes();
       }
       if (waktu.getSeconds() < 10)
       {
          seconds = '0' + waktu.getSeconds();
       }
       jam.innerHTML  = '<span>' +  hours + ":" + '</span>'
                      + '<span>' + minutes + '</span>'
                      + ":" + '<span>' + seconds +'</span>';
 
       var spans      = jam.getElementsByTagName('span');
       animation(spans[2]);
       if (seconds == 0) animation(spans[1]);
       if (minutes == 0 && seconds == 0) animation(spans[0]);
 
    }, 1000);
 }
 
 jam();
 