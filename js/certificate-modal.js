const certificateModalOverlay = document.querySelector('.overlay');
const certificateModalList = document.querySelectorAll('.certificate-modal');
const certificateViewButtonList = document.querySelectorAll(
  '.activity-certificate-item .title-link',
);
const certificateModalCloseButtonList = document.querySelectorAll(
  '.certificate-modal .modal-close',
);
let openedModalIndex = null;

function openCertificateModal(idx) {
  certificateModalList[idx].classList.add('is-open');
  certificateModalOverlay.classList.add('is-active');
  openedModalIndex = idx;
}

function closeCertificateModal(idx) {
  certificateModalList[idx].classList.remove('is-open');
  certificateModalOverlay.classList.remove('is-active');
  openedModalIndex = null;
}

certificateViewButtonList.forEach((button, idx) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    openCertificateModal(idx);
  });
});

certificateModalCloseButtonList.forEach((button, idx) => {
  button.addEventListener('click', () => closeCertificateModal(idx));
});

window.addEventListener('click', function (e) {
  if (openedModalIndex === null) return;

  const openedModal = certificateModalList[openedModalIndex];

  if (!openedModal.contains(e.target)) {
    closeCertificateModal(openedModalIndex);
  }
});
