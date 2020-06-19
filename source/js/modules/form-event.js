const inputsEvent = () => {
  const inputs = document.querySelectorAll('[data-input]')
  const wrappers = document.querySelectorAll('[data-input-wrapper]')
  const emailRegexp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

  inputs.forEach((item, index) => {
    item.addEventListener('focus', (e) => {
      wrappers[index].classList.add('form__inner--active')
    });

    item.addEventListener('invalid', () => {
      // console.log('ручная проверка ', + item.checkValidity(item))
      wrappers[index].classList.add('form__inner--warning')
      // item.setCustomValidity('Поле должно содержать только буковки');
    });

    item.addEventListener('blur', () => {
      if (!item.value) {
        wrappers[index].classList.remove('form__inner--active')
        console.log('поле пусто')
      } else if (item.value && !emailRegexp.test(item.value.trim())) {
        console.log('ошибка')
        wrappers[index].classList.add('form__inner--warning')
      } else {
        //emailRegexp.test(item.value.trim());
        wrappers[index].classList.remove('form__inner--warning')
        //console.log(emailRegexp.test(item.value.trim()))
      }
    });
  })
}

export { inputsEvent }