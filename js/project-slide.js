const projectHeadList = document.querySelectorAll('.project-head-item');
const projectTailList = document.querySelectorAll('.project-tail-item');

projectHeadList.forEach((item, idx) => {
  item.addEventListener('mouseenter', function () {
    projectTailList[idx].classList.add('hover');

    item.addEventListener('mouseleave', function () {
      projectTailList[idx].classList.remove('hover');
    });
  });
});

/* global Swiper */
new Swiper('.project .swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesOffsetBefore: 15,
  slidesOffsetAfter: 15,
  navigation: {
    nextEl: '.project .swiper-button-next',
    prevEl: '.project .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesOffsetBefore: 40,
      slidesOffsetAfter: 40,
    },
  },
});
