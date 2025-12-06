const careerInfoSub = document.querySelector('.career .career-info-sub');
const careerAccordion = document.querySelector('.career .sub-accordion');

careerAccordion.addEventListener('click', function () {
  careerInfoSub.classList.toggle('is-active');
});
