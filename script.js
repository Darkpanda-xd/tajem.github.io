$(Document).ready(function(){
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',

      });
      // team slider
      $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
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
      // people-say slider
      $('.text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-img-slider'
      });
      $('.small-img-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.text-slider',
        dots: false,
        arrows:true,
        prevArrow: '.left-ang',
        nextArrow: '.right-ang',
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '0px',
        
      });
        
      // video-part veno-box
      
        VenoBox({
          selector: '.venobox',
          numeration: true,
          infinigall: true,
          share: true,
          spinner: 'fold',
          border: '20px',
          navSpeed: 500,
          bgcolor: '#03d4ed',
          autoplay: true,
      });
        VenoBox({
          selector: '.my-image-links',
          numeration: true,
          infinigall: true,
          share: true,
          spinner: 'fold',
          border: '20px',
          navSpeed: 500,
          bgcolor: '#03d4ed',
          autoplay: true,
      });
      
    
})