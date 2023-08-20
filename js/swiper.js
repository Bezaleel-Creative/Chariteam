const swiperEl = document.querySelector('.testimonial swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      breakpoints: {
        576: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 1.5,
        },
      },
    });
    swiperEl.initialize();