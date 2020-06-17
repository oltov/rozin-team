const eventHeader = () => {
  const title = document.querySelector('.header-content__title');
  const subTitle = document.querySelector('.header-content__wrapper');
    setTimeout(() => {
      title.classList.add('header-content__title--event');
      subTitle.classList.add('header-content__wrapper--event');
    }, 400)
}

export {eventHeader};
