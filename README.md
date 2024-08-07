# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Mobile View](/public/screenshots/baseApparelComingSoon-mobile.png)
![Desktop View](/public/screenshots/baseApparelComingSoon-desktop.png)

### Links

- Solution URL: [GitHub](https://github.com/ania221B/base-apparel-coming-soon)
- Live Site URL: [GitHub Pages](https://ania221b.github.io/base-apparel-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass
- Web Animations API

### What I learned

**Web Animations API**. To create an animiation using Web Animations API:

1. Select the element you want to animate:

```js
const logo = document.querySelector('.logo img')
```

2. Create a Keyframes Object. This is an array of objects. Each object corresponds to a keyframe from a CSS animation created using `@keyframes`:

```js
const slideIn = [
  { opacity: 0, transform: 'translate3D(-25%, 0, 0)' },
  { opacity: 1, transform: 'translate3D(0, 0, 0)' }
]
```

Unlike with `@keyframes`, there is no need to specify percentages. Web Animations API calculates automaticaly the timing of changes. To control when something changes you can specify `offset`:

```js
const slideIn = [
  { opacity: 0, transform: 'translate3D(-50%, 0, 0)' },
  { transform: 'translate3D(0, 0, 0)', offset: 0.75 },
  { opacity: 1 }
]
```

3. Create separate object to specify duration and `easing`, that is the equivalent of the `timing-function`:

```js
const slideInTiming = {
  duration: 3500,
  easing: 'ease-in-out'
}
```

Here the duration needs to be given in milliseconds without any unit.

4. Use `animate()` method to play the animation:

```js
logo.animate(slideIn, slideInTiming)
```

Instead of writing separate objects for keyframes and timing you can pass the code directly into the `animate()` method:

```js
logo.animate(
  [
    { opacity: 0, transform: 'translate3D(-50%, 0, 0)' },
    { transform: 'translate3D(0, 0, 0)', offset: 0.75 },
    { opacity: 1 }
  ],
  {
    duration: 3500,
    easing: 'ease-in-out'
  }
)
```

If you don't want the animations immediately, you can control their playback for example with `pause()` and `play()` methods together with event listener listening for `finish` event:

```js
const logo = document.querySelector('.logo img')
const text = document.querySelector('.main-text')

const logoAnimation = logo.animate(slideIn, slideInTiming)
const textAnimation = text.animate(showText, showTextTiming)

textAnimation.pause()

logoAnimation.addEventListener('finish', () => {
  textAnimation.play()
})
```

### Continued development

- Animations - not only using Web Animations API but other tools like GSAP
- Form Validation
- Sass

### Useful resources

- [Using the Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API) - This is where I learnt the basics of Web Animations API and the resource I used to create the animations.
- [Invalid event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event) - This MDN article explains the `invalid` event. It helped me improve form validation.

## Author

- Frontend Mentor - [@ania221b](https://www.frontendmentor.io/profile/ania221b)
