$(document).ready(function(){

    window.addEventListener('scroll', function() {
        const header = document.getElementById('Header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
        if (scrollTop > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });

     $('.tablate-menu').hide();
     $('.tablate-sub-menu').hide();
     $('.sidebar').click(function(){

          $('.tablate-menu').slideToggle();

     })
     
     $('.tablate-menu > li > i').click(function(){

          $(this).next('.tablate-sub-menu').slideToggle();

     })
     $('.tab-right-icon').click(function(){

          $('.tab-right-icon').toggleClass('fa-angle-down');

     });

     $('#main-banner').owlCarousel({
          loop:true,
          margin:10,
          dots:false,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:1,
                  nav:false
              },
              1000:{
                  items:1,
                  nav:true
                //   loop:false
              }
          }
      });

      
      var owl = $('#main-banner');
      owl.owlCarousel();
      owl.on('changed.owl.carousel', function(event) {
            new WOW().init();
        })

        
        wow = new WOW(
            {
                    boxClass:     'wow',      // default
                    animateClass: 'animated', // default
                    offset:       0,          // default
                    mobile:       true,       // default
                    live:         true        // default
            }
            )
            wow.init();
    
});