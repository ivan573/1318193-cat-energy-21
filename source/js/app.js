const pageHeaderElement = document.querySelector('.page-header');
const mainNavigationElement = document.querySelector('.main-nav');
const navigationToggleElement = document.querySelector('.main-nav__toggle');

navigationToggleElement.addEventListener('click', () => {
  if (mainNavigationElement.classList.contains('main-nav--closed')) {
    mainNavigationElement.classList.remove('main-nav--closed');
    pageHeaderElement.classList.remove('page-header--closed-menu');

    mainNavigationElement.classList.add('main-nav--opened');
    pageHeaderElement.classList.add('page-header--opened-menu');
  } else {
    mainNavigationElement.classList.add('main-nav--closed');
    pageHeaderElement.classList.add('page-header--closed-menu');

    mainNavigationElement.classList.remove('main-nav--opened');
    pageHeaderElement.classList.remove('page-header--opened-menu');
  }
});
