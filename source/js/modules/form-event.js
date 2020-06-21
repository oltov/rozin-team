const inputsEvent = () => {
  const inputs = document.querySelectorAll('[data-input]')
  const wrappers = document.querySelectorAll('[data-input-wrapper]')
  const submitButtone = document.querySelector('.form__button')
  const form = document.querySelector('.form')

  const regexp = {
    name: /^[А-Я][а-я]{1,20}$/,
    email: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    phone: /^\+7[0-9]{10}$/
  }
const userData = {
  'id': new Date(),
  name: '',
  email: '',
  phone: ''
}

  inputs.forEach((item, index) => {
    item.addEventListener('focus', (e) => {
      wrappers[index].classList.add('form__inner--active')
    });

    item.addEventListener('blur', () => {
      let dataValue = item.getAttribute('data-input');
      if (!item.value) {
        wrappers[index].classList.remove('form__inner--active')
      } else if (item.value && !regexp[dataValue].test(item.value.trim())) {
        wrappers[index].classList.add('form__inner--warning')
        console.log(userData[dataValue])
      } else {
        wrappers[index].classList.remove('form__inner--warning');
        userData[dataValue] = item.value.trim()
      }
    });
  });

  submitButtone.addEventListener('click', evt => {
    evt.preventDefault();
    inputs.forEach(item => item.value = '')
  })
}

export { inputsEvent }
