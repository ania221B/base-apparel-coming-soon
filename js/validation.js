const form = document.querySelector('.form')
// const formWrapper = document.querySelector('.form__wrapper')
const submitButton = form.querySelector('[type="submit"]')
const input = form.querySelector('#email')

form.addEventListener('submit', e => {
  e.preventDefault()

  const emailRegex =
    /^[^_\.@][a-zA-z0-9!#$%&'*+\-/=?\^_`{|]+@+[a-z]+\.+[a-z]{2,}/

  const result = emailRegex.test(input.value)

  form.classList.remove('error')
  if (input.value === '' || input.value === null || result === false) {
    form.classList.remove('success')
    form.classList.add('error')
    form.setAttribute('data-message', 'Please provide a valid email')
  } else {
    form.classList.remove('error')
    form.classList.add('success')
    form.setAttribute('data-message', `Thank you! Your email's been saved`)
    input.value = ''
    input.blur()
    submitButton.blur()
    form.submit()
  }
})

input.addEventListener('invalid', () => {
  form.classList.remove('success')
  form.classList.add('error')
  form.setAttribute('data-message', 'Please provide a valid email')
})

window.addEventListener('load', () => {
  input.value = ''
})
