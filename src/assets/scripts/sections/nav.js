const els = {}

const cacheEls = () => {
  els.button = document.querySelector('.nav-toggle')
  els.nav = document.querySelector('.site-nav')
  els.header = document.querySelector('.site-header')
  els.main = document.querySelector('.content')
}

const toggleNav = () => {
  els.button.addEventListener('click', () => {
    els.nav.classList.toggle('is-open')
    els.header.classList.toggle('is-open')
  })
}

const shrinkNav = () => {
  els.main.addEventListener('scroll', (e) => {
    console.log(e)
  })
}

const initNav = () => {
  cacheEls()
  toggleNav()
  // shrinkNav()
}

document.addEventListener('DOMContentLoaded', initNav)
