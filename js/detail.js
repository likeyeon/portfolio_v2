/* global Swiper */
let detailSwiper = undefined;
let viewWidth = window.innerWidth;
const figcaptionList = document.querySelectorAll('.detail-image figcaption');
let figcaptionHidden = false;
const detailCodeList = document.querySelectorAll('.detail .code');

function initSwiper() {
  if (viewWidth <= 1024 && detailSwiper === undefined) {
    detailSwiper = new Swiper('.detail-image-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.detail-image .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  } else if (viewWidth > 1024 && detailSwiper) {
    detailSwiper.destroy();
    detailSwiper = undefined;
  }
}

function toggleFigcaptionHidden() {
  if (viewWidth <= 1024 && !figcaptionHidden) {
    figcaptionList.forEach((item) => {
      item.classList.add('visually-hidden');
      figcaptionHidden = true;
    });
  } else if (viewWidth > 1024 && figcaptionHidden) {
    figcaptionList.forEach((item) => {
      item.classList.remove('visually-hidden');
      figcaptionHidden = false;
    });
  }
}

initSwiper();
toggleFigcaptionHidden();

window.addEventListener('resize', function () {
  viewWidth = window.innerWidth;
  initSwiper();
  toggleFigcaptionHidden();
});

detailCodeList.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('is-active');
  });
});
