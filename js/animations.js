const heroImage = document.querySelector('.hero-img')
const pageTitle = document.querySelector('.page-title')
const titleAccent = document.querySelector('.title-accent')
const logo = document.querySelector('.logo img')
const mainText = document
  .querySelector('.main-content')
  .firstElementChild.querySelector('p')
const form = document.querySelector('.form')

const slideIn = [
  { opacity: 0, transform: 'translate3D(-25%, 0, 0)' },
  { opacity: 1, transform: 'translate3D(0, 0, 0)' }
]
const textTiming = {
  duration: 2000,
  easing: 'ease-in-out'
}
const slideInTiming = {
  duration: 3500,
  easing: 'ease-in-out'
}
const heroAnimation = heroImage.animate(
  [
    { opacity: 0.1, filter: 'grayscale(1)' },
    { filter: 'grayscale(0.9)', offset: 0.8 },
    { opacity: 1, filter: 'grayscale(0)' }
  ],
  {
    duration: 3500,
    easing: 'ease-in-out'
  }
)
const logoAnimation = logo.animate(slideIn, {
  duration: textTiming.duration / 2
})
const titleAnimation = pageTitle.animate(
  [
    { opacity: 0, fontWeight: 100, letterSpacing: '-2rem' },
    { opacity: 1, offset: 0.4 },
    { opacity: 1, fontWeight: 700, letterSpacing: '1.0825rem' }
  ],
  textTiming
)
const accentAnimation = titleAccent.animate(
  [
    { opacity: 0, fontWeight: 400, letterSpacing: '-2rem' },
    { opacity: 1, offset: 0.4 },
    { opacity: 1, fontWeight: 300, letterSpacing: '1.0825rem' }
  ],
  textTiming
)
const mainTextAnimation = mainText.animate(slideIn, textTiming)
const formAnimation = form.animate(
  [
    { opacity: 0, gridTemplateColumns: '0fr max-content' },
    { opacity: 1 },
    { gridTemplateColumns: '1fr max-content' }
  ],
  {
    duration: 3600,
    easing: 'cubic-bezier(.57,-0.22,.37,1.22)'
  }
)

titleAnimation.pause()
accentAnimation.pause()
mainTextAnimation.pause()
formAnimation.pause()

logoAnimation.addEventListener('finish', () => {
  titleAnimation.play()
  accentAnimation.play()
})

titleAnimation.addEventListener('finish', () => {
  mainTextAnimation.play()
})

mainTextAnimation.addEventListener('finish', () => {
  formAnimation.play()
})
