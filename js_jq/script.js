// js
wow = new WOW(
    {
    boxClass:     'wow',     
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,      
    live:         true       
    }
)
wow.init();

wow1 = new WOW({
    boxClass:     'wow1',     
     animateClass: 'animated',
     offset:       0,         
      mobile:       true,      
      live:         true       
   })
wow1.init();


// Aos
AOS.init({
    delay: 50,
    duration: 500,
    });


AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    });


AOS.init({
	offset: 100,
	delay: 50,
	duration: 500,
	easing: 'linear'
    });


// JQ Start
$(document).ready(function(){
    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //counto 
    $(function(){
        $('#demo').counto(12345, 3000);
    });
    

    // circle
    $('.box3h').CountUpCircle({
        duration: 2000,
    });
})



$(document).ready(function(){

    $('.slide_item').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 400,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
    {
        breakpoint: 991,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
        breakpoint: 575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]

    });



    $('.slide1_item').slick({
        dots: true,
        draggable: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '60px',
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 575,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
    
      });
})
