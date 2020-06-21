const inputsEvent = () => {
  const inputs = document.querySelectorAll(`[data-input]`);
  const wrappers = document.querySelectorAll(`[data-input-wrapper]`);
  const submitButtone = document.querySelector(`.form__button`);
  let isData = false;

  const regexp = {
    name: /[а-я]{1,20}$/,
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    phone: /^\+7[0-9]{10}$/
  };

  const userData = {
    id: new Date(),
    name: ``,
    email: ``,
    phone: ``
  };

  inputs.forEach((item, index) => {
    item.addEventListener(`focus`, () => {
      wrappers[index].classList.add(`form__inner--active`);
    });

    item.addEventListener(`blur`, () => {
      let dataValue = item.getAttribute(`data-input`);
      if (!item.value) {
        wrappers[index].classList.remove(`form__inner--active`);
      } else if (item.value && !regexp[dataValue].test(item.value.trim())) {
        wrappers[index].classList.add(`form__inner--warning`);
      } else {
        wrappers[index].classList.remove(`form__inner--warning`);
        userData[dataValue] = item.value.trim();
      }
    });
  });

  submitButtone.addEventListener(`click`, evt => {
    evt.preventDefault();

    for (let data in userData) {
      if (userData[data] == false) isData = false;
      else isData = true;
    }

    if (isData) {
      alert(`Заявка отпралена.`);
      isData = false;
      inputs.forEach(item => item.value = ``);
      wrappers.forEach(item => item.classList.remove(`form__inner--active`));
    } else alert(`Форма не заполнена или заполнена неверно.`);

  });
};

export {inputsEvent};
