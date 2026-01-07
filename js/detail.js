/* global Swiper */
let detailSwiper = undefined;
let viewWidth = window.innerWidth;
const figcaptionList = document.querySelectorAll(
  '.project-detail-image figcaption',
);
let figcaptionHidden = false;
const detailCodeBtn = document.querySelectorAll(
  '.project-detail .detail-button',
);

function initSwiper() {
  if (viewWidth <= 1024 && detailSwiper === undefined) {
    detailSwiper = new Swiper('.project-detail-image-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.project-detail-image .swiper-pagination',
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

detailCodeBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.parentNode.classList.toggle('is-active');
  });
});
