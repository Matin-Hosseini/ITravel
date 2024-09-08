var swiper = new Swiper("#popular .mySwiper", {
  speed: 1000,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper("#presell .mySwiper", {
  speed: 1000,
  // loop: true,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

