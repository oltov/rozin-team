import {disableScrolling, enableScrolling} from './scroll-lock';

const openModal = (modal, callback) => {
  modal.classList.add(`modal--active`);

  if (callback) {
    callback();
  }

  disableScrolling();
};

const closeModal = (modal, callback) => {
  modal.classList.remove(`modal--active`);

  if (callback) {
    callback();
  }

  enableScrolling();
  // Если у ваших модалок используется сложная анимация
  // с задержками между различными слоями - вам может понадобится timeout
  /* setTimeout(enableScrolling, 300); */
};

const onEscPress = (evt, modal, callback) => {
  const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

  if (isEscKey && modal.classList.contains(`modal--active`)) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const setModalListeners = (modal, closeCallback) => {
  const overlay = modal.querySelector(`.modal__overlay`);
  const closeBtn = modal.querySelector(`.modal__close-btn`);

  closeBtn.addEventListener(`click`, () => {
    closeModal(modal, closeCallback);
  });

  overlay.addEventListener(`click`, () => {
    closeModal(modal, closeCallback);
  });

  document.addEventListener(`keydown`, (evt) => {
    onEscPress(evt, modal, closeCallback);
  });
};

const setupModal = (modalWindow, modalBtns, openCallback, closeCallback) => {
  modalBtns.forEach((btn) => {
    btn.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      openModal(modalWindow, openCallback);
    });
  });

  setModalListeners(modalWindow, closeCallback);
};

export {setupModal, openModal, closeModal};
