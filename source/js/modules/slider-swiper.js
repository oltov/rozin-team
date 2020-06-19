
const initSliderSwiper = () => {

  const slider = document.querySelector(`#main-slider`);
  const goals = document.querySelector(`#goals-slider`);
  const programSlider01 = document.querySelector(`#program-slider-1`);
  const programSlider02 = document.querySelector(`#program-slider-2`);
  const programSlider03 = document.querySelector(`#program-slider-3`);

  const goalsTabs = document.querySelectorAll(`[data-goal-index]`);

  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    effect: `fade`,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: `#top-slider-next`,
      prevEl: `#top-slider-prev`,
    }
  });

  const toggleSwitch = () => {

    if (goalsTabs) {
      goalsTabs.forEach(toggle => {

        toggle.addEventListener(`click`, (evt) => {
          goalsTabs.forEach(btn => {
            btn.classList.remove(`slider-btn__toggle--active-goal`);
          });
          goalsSlider.slideTo(evt.target.getAttribute(`data-goal-index`));
          evt.target.classList.add(`slider-btn__toggle--active-goal`);
        });
      });
    }
  };

  toggleSwitch();

  const goalsSlider = new Swiper(goals, {
    slidesPerView: 1,
    speed: 600,
    loop: true,
    effect: `fade`,
    fadeEffect: {
      crossFade: true
    }
  });

  new Swiper(programSlider01, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    disableOnInteraction: false,
    navigation: {
      nextEl: `[data-inner-slider=next-1]`,
      prevEl: `[data-inner-slider=prev-1]`,
    }
  });

  new Swiper(programSlider02, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    disableOnInteraction: false,
    navigation: {
      nextEl: `[data-inner-slider=next-2]`,
      prevEl: `[data-inner-slider=prev-2]`,
    }
  });

  new Swiper(programSlider03, {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    disableOnInteraction: false,
    navigation: {
      nextEl: `[data-inner-slider=next-3]`,
      prevEl: `[data-inner-slider=prev-3]`,
    }
  });
};

export {initSliderSwiper};
