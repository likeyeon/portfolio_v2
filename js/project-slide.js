const projectHeadList = document.querySelectorAll('.project-head-item');
const projectTailList = document.querySelectorAll('.project-tail-item');
const projectPcPrevBtn = document.querySelector(
  '.project-content-pc-wrapper .swiper-button-prev',
);
const projectPcNextBtn = document.querySelector(
  '.project-content-pc-wrapper .swiper-button-next',
);
const projectItemLength = projectHeadList.length;
const VISIBLE_COUNT = 3;
let currentLastSlideNumber = 3;
let currentProjectNavigation = 0;

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
    nextEl: '.project-content-mo .swiper-button-next',
    prevEl: '.project-content-mo .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesOffsetBefore: 40,
      slidesOffsetAfter: 40,
    },
  },
});

/* PC - 슬라이드 이동 */
function calculateProjectItemLeft(elementList) {
  elementList.forEach((item, idx) => {
    item.style.setProperty(
      'left',
      ((100 / VISIBLE_COUNT) * (idx - currentProjectNavigation)).toFixed(2) +
        '%',
    );
  });
}

function updateProjectButtonState() {
  projectPcPrevBtn.classList.toggle(
    'swiper-button-disabled',
    currentLastSlideNumber === VISIBLE_COUNT,
  );

  projectPcNextBtn.classList.toggle(
    'swiper-button-disabled',
    currentLastSlideNumber === projectItemLength,
  );
}

function moveProjectSlide(direction) {
  currentProjectNavigation += direction;
  currentLastSlideNumber += direction;

  calculateProjectItemLeft(projectHeadList);
  calculateProjectItemLeft(projectTailList);

  updateProjectButtonState();
}

projectPcPrevBtn.addEventListener('click', () => moveProjectSlide(-1));
projectPcNextBtn.addEventListener('click', () => moveProjectSlide(1));
