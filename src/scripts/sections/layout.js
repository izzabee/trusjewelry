import {
  addClass,
  removeClass
} from '../modules/helpers'

import * as a11y from '@shopify/theme-a11y';


const els = {}

const cacheEls = () => {
  els.main = document.querySelector('.center-content')
  els.section = document.querySelectorAll('.js-line')
  els.images = document.querySelectorAll('.js-fade-in')
}

const animateLine = () => {
  addClass(els.section, 'in')
  addClass(els.images, 'in')
}

const initLine = () => {
  cacheEls()
  if (els.section) {
    setTimeout(animateLine, 800)
  }
}

document.addEventListener('DOMContentLoaded', initLine)
