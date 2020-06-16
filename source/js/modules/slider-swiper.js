
const initSliderSwiper = () => {

  const slider = document.querySelector(`.swiper-container`);

  const newSlider = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: `#top-slider-next`,
      prevEl: `#top-slider-prev`,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      }
    }
  });
};

export {initSliderSwiper};
