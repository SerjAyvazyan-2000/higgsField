const vToolsSwiper = new Swiper(".v-tools-swiper", {
  slidesPerView: 5,
  spaceBetween: 8,

  breakpoints: {
       320: {
      slidesPerView: 1.7,
    },

        450: {
      slidesPerView: 1.8,
    },

    576: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3,
    },

    992: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 4,
    },

    1400: {
      slidesPerView: 5,
    },
  },
});

const vHeroSwiper = new Swiper(".v-hero-swiper", {
  slidesPerView: 3,
  spaceBetween: 15,
   slideToClickedSlide: true, 

  breakpoints: {
      320: {
      slidesPerView: 1.1,
             spaceBetween: 0,

    },

        450: {
      slidesPerView: 1.5,
       spaceBetween: 0,
    },

    576: {
      slidesPerView: 2,
      
    },

    992: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },

    1300: {
      slidesPerView: 3,
    },

    1400: {
      slidesPerView: 3,
    },
  },
});
