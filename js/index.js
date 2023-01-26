$(".single-item-detail").slick({
  centerMode: true,
  arrows: false,
  centerPadding: '60px',
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 1,
  asNavFor: ".single-item"
})
$(".single-item").slick({
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 1,
  asNavFor: ".single-item-detail",
  responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: true,
                  dots: true,
                  infinite: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
              }
          },
          {
          breakpoint: 480,
          settings: {
                  arrows: true,
                  dots: true,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
});
$('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
              }
          },
          {
          breakpoint: 480,
          settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
      });
