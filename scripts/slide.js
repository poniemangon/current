$('.carousel').slick({
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 1200,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
      }
  },
  {
      breakpoint: 700,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,

      }
  }]
});

$('.carousel2').slick({
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
    {
        breakpoint: 700,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
  
        }
    }]
  });
  

