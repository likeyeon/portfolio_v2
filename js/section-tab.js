const sectionTab = document.querySelector('.header .header-tab-list');
const sectionTabButtonList = sectionTab.querySelectorAll(
  '.header-tab-item button',
);
let currentActiveTab = sectionTab.querySelector('.is-active');

const TOP_HEADER_DESKTOP = 86;
const SCROLL_THRESHOLD = 2;

let disableUpdating = false;

/* 1. 비활성화 탭을 클릭 시 활성화시키기 */
function toggleActiveTab() {
  const tabItem = this.parentNode;

  if (tabItem !== currentActiveTab) {
    disableUpdating = true;
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;

    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
  }
}

/* 2. 탭 클릭 시 해당 섹션으로 스크롤 이동 */
function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);

  const scrollAmount =
    tabPanel.getBoundingClientRect().top - TOP_HEADER_DESKTOP;

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

sectionTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
  button.addEventListener('click', scrollToTabPanel);
});

/* 3. 탭 패널 y축 위치 감지 */
const sectionTabPanelIdList = [
  'about',
  'project',
  'career',
  'skill',
  'activity',
  'blog',
];

const sectionTabPanelList = sectionTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`);
  return tabPanel;
});

const sectionTabPanelPositionMap = {};

function detectTabPanelPosition() {
  sectionTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id');
    const position = panel.getBoundingClientRect().top + window.scrollY;
    sectionTabPanelPositionMap[id] = position;
  });

  updateActiveTabOnScroll();
}

/* 4. 스크롤 위치에 따라서 active 탭 업데이트 */
function updateActiveTabOnScroll() {
  if (disableUpdating) return;

  const scrollAmount =
    window.scrollY +
    (window.innerWidth >= 1200
      ? TOP_HEADER_DESKTOP + 130
      : TOP_HEADER_DESKTOP + 110);

  let newActiveTab;
  if (scrollAmount >= sectionTabPanelPositionMap['blog']) {
    newActiveTab = sectionTabButtonList[5];
  } else if (scrollAmount >= sectionTabPanelPositionMap['activity']) {
    newActiveTab = sectionTabButtonList[4];
  } else if (scrollAmount >= sectionTabPanelPositionMap['skill']) {
    newActiveTab = sectionTabButtonList[3];
  } else if (scrollAmount >= sectionTabPanelPositionMap['career']) {
    newActiveTab = sectionTabButtonList[2];
  } else if (scrollAmount >= sectionTabPanelPositionMap['project']) {
    newActiveTab = sectionTabButtonList[1];
  } else {
    newActiveTab = sectionTabButtonList[0];
  }

  const bodyHeight = document.body.offsetHeight;
  if (window.scrollY + window.innerHeight >= bodyHeight - SCROLL_THRESHOLD) {
    newActiveTab = sectionTabButtonList[5];
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode;

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active');

      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active');
      }
      currentActiveTab = newActiveTab;
    }
  }
}

/* global _ */
window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000));
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300));
