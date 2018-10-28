import {
  addClass,
  removeClass
} from '../modules/helpers'

const els = {}

const cacheEls = () => {
  els.main = document.querySelector('.center-content')
  els.section = document.querySelectorAll('.js-line')
}

const animateLine = () => {
  console.log(els.section)
  addClass(els.section, 'in')
}

const initLine = () => {
  cacheEls()
  if (els.section) {
    setTimeout(animateLine, 800)
  }
}

document.addEventListener('DOMContentLoaded', initLine)
