
jQuery(document).ready(function( ){
     
    "user string"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.02,
        
      });


    $(".textt").typed({strings: ['<strong>I love</strong> <strong class="primary"> coding. </strong>',
    '<strong>And to</strong> <strong class="primary">  share!!.</strong>'],
typespeed: 0,
loop: true,
})

   

   
    $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled:true
        }
        
      });


    


    $('#team-members').owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed:750,
        loop:true,
        autoplayHoverPause:true,
          responsive:{
          0:{
              items:1
          },

          480:{
            items:2
        },
          768:{
            items:3
        }
    }


    });


    $('.counter').counterUp({
      delay: 10,
      time: 4000
  });


  $('a.smooth-scroll').click(function(event)
  {
    event.preventDefault();
    
    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top - -2
    }, 1250, "easeInOutExpo");
  });

  new WOW().init();

  });
  