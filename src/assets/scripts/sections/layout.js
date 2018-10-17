const els = {}

const cacheEls = () => {
  els.main = document.querySelector('.center-content')
  els.section = document.querySelector('.js-line')
}

animateLine = () => {
  els.section.classList.add('in')
}

const initLine = () => {
  cacheEls()
  if (els.section) {
    setTimeout(animateLine, 800)
  }
}

document.addEventListener('DOMContentLoaded', initLine)
