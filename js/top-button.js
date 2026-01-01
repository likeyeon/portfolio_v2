/* global _ */
const topButton = document.querySelector('.top-btn button');
const aboutSection = document.querySelector('#about');
let aboutSectionTop = 0;

function detectAboutSectionPosition() {
  aboutSectionTop = aboutSection.getBoundingClientRect().top + window.scrollY;

  updateTopBtnVisibilty();
}

function updateTopBtnVisibilty() {
  if (window.scrollY >= aboutSectionTop) {
    topButton.classList.add('is-active');
  } else {
    topButton.classList.remove('is-active');
  }
}

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('load', detectAboutSectionPosition);
window.addEventListener('resize', _.throttle(detectAboutSectionPosition, 1000));
window.addEventListener('scroll', _.throttle(updateTopBtnVisibilty, 300));
topButton.addEventListener('click', scrollToTop);
