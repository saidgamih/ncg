$(document).ready(function(){
    $('.demo').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        dots: true,
        appendDots: $(".slick-dots")
    });

    $('.multiple-items').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              autoplay: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});