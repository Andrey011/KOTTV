const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});

$(".single-item-detail").slick({
  centerMode: true,
  arrows: false,
  variableWidth: true,
  centerPadding: '60px',
  infinite: true,
  draggable: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',

  initialSlide: 1,
  asNavFor: ".single-item"
})
$(".single-item").slick({
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  draggable: false,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 1,
  focusOnSelect: true,
  pauseOnHover:true,
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

$(".single-item-intro").slick({
  centerMode: true,
  vertical: true,
  centerPadding: '60px',
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
          {
              breakpoint: 768,
              settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
              }
          },
          {
          breakpoint: 480,
          settings: {
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
              }
          }
      ]
});
$(".slider-channels").each(function () {
    for (var i = 0; i < 3; i++) {
      $(this).find('.slide-channels').clone().appendTo(this);
    }
  });
  $(".slider-with-channels").slick({
  dots: false,
  arrows: false,
  centerPadding: '60px',
  speed: 500,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  initialSlide: 0,
  asNavFor: ".slider-of-tariffs"
})
$(".slider-of-tariffs").slick({
  dots: false,
  arrows:true,
  centerMode: false,
  centerPadding: '60px',
  speed: 500,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: 'ondemand',
  initialSlide: 0,

  asNavFor: ".slider-with-channels"
});
document.querySelector('.first-button').addEventListener('click', function () {

  document.querySelector('.animated-icon1').classList.toggle('open');
  });
document.querySelector('.first-button').addEventListener('click', function () {

  document.querySelector('.collapse').classList.toggle('show');
  });
