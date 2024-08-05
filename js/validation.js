const form = document.querySelector('.form')
const formWrapper = form.querySelector('.form__wrapper')
const submitButton = form.querySelector('[type="submit"]')
const input = form.querySelector('#email')

/**
 * Creates message for the user
 * @param {String} messageText string with appropriate message text
 * @returns HTML Element with message for the user
 */
function createUserMessage (messageText) {
  const space = 8
  const positionTop = formWrapper.getBoundingClientRect().bottom + space
  const positionLeft = formWrapper.getBoundingClientRect().left + space * 2
  const userMessage = document.createElement('div')

  userMessage.classList.add('user-message')
  userMessage.textContent = messageText
  return userMessage
}

/**
 * Creates error icon
 * @returns HTML Element for the error icon
 */
function createErrorIcon () {
  const errorIcon = document.createElement('div')
  errorIcon.classList.add('error-icon')
  errorIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <g fill="none" fill-rule="evenodd">
                <circle cx="12" cy="12" r="12" fill="#F96464" />
                <path fill="#FFF" fill-rule="nonzero" d="M13.256 6v9.056h-2V6h2zm-.944 12.464c-.384 0-.699-.104-.944-.312a1.027 1.027 0 0 1-.368-.824c0-.33.125-.608.376-.832.25-.224.563-.336.936-.336.373 0 .68.112.92.336.24.224.36.501.36.832 0 .341-.117.616-.352.824-.235.208-.544.312-.928.312z" />
              </g>
            </svg>`
  return errorIcon
}

/**
 * Removes messages or icons already existing in document content
 */
function removeExistingMessages () {
  const existingMessage = document.querySelector('.user-message')
  const existingIcon = formWrapper.querySelector('.error-icon')

  if (existingMessage) {
    existingMessage.parentNode.removeChild(existingMessage)
  }

  if (existingIcon) {
    existingIcon.parentNode.removeChild(existingIcon)
  }
}

/**
 * Displays info about invalid email address
 */
function indicateFailure () {
  const fragment = document.createDocumentFragment()
  const userMessage = createUserMessage('Please provide a valid email')
  const errorIcon = createErrorIcon()

  removeExistingMessages()

  document.body.classList.remove('success')
  document.body.classList.add('error')
  fragment.appendChild(errorIcon)
  fragment.appendChild(userMessage)
  formWrapper.appendChild(fragment)
}

/**
 * Displays info about successful submission
 */
function indicateSuccess () {
  const userMessage = createUserMessage(`Thank you! Your email's been saved`)

  removeExistingMessages()

  document.body.classList.remove('error')
  document.body.classList.add('success')
  formWrapper.appendChild(userMessage)
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const emailRegex =
    /^[^_\.@][a-zA-z0-9!#$%&'*+\-\/=?\^_`{|\.]+(?<![@\._-])@+[a-z]+\.+[a-z]{2,}/
  const result = emailRegex.test(input.value)

  form.classList.remove('error')

  if (input.value === '' || input.value === null || result === false) {
    indicateFailure()
  } else {
    indicateSuccess()
    input.value = ''
    input.blur()
    submitButton.blur()
    form.submit()
  }
})

input.addEventListener('invalid', () => {
  indicateFailure()
})

window.addEventListener('load', () => {
  input.value = ''
})
