
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


 });      