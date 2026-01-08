const certificateModalOverlay = document.querySelector('.overlay');
const certificateModalList = document.querySelectorAll('.certificate-modal');
const certificateViewButtonList = document.querySelectorAll(
  '.activity-certificate-item .title-link',
);
const certificateModalCloseButtonList = document.querySelectorAll(
  '.certificate-modal .modal-close',
);

function openCertificateModal(idx) {
  certificateModalList[idx].classList.add('is-open');
  certificateModalOverlay.classList.add('is-active');
}

function closeAllCertificateModals() {
  certificateModalList.forEach((modal) => {
    modal.classList.remove('is-open');
  });
  certificateModalOverlay.classList.remove('is-active');
}

certificateViewButtonList.forEach((button, idx) => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    openCertificateModal(idx);
  });
});

certificateModalCloseButtonList.forEach((button) => {
  button.addEventListener('click', closeAllCertificateModals);
});

certificateModalOverlay.addEventListener('click', closeAllCertificateModals);
