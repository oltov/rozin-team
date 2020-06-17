
const initSliderSwiper = () => {

  const slider = document.querySelector(`#main-slider`);
  const goals = document.querySelector(`#goals-slider`);
  const goalsTabs = document.querySelectorAll(`[data-goal-index]`);

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

  const toggleSwitch = () => {
    if(goalsTabs) {
      goalsTabs.forEach(toggle => {
        toggle.addEventListener('click', (evt) => {
          goalsTabs.forEach(btn => {
            btn.classList.remove('slider-btn__toggle--active-goal')
          });
          goalsSlider.slideTo(evt.target.getAttribute('data-goal-index'));
          evt.target.classList.add('slider-btn__toggle--active-goal')
          console.log(evt.target.getAttribute('data-goal-index'))
        })
      })
    }
  };

  toggleSwitch();

  const goalsSlider = new Swiper(goals, {
    slidesPerView: 1,
    speed: 600,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
};

export {initSliderSwiper};
