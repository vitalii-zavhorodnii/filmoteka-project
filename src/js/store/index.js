export const store = {
  user: null,
  genresList: [],
  page: 1,
  mode: 'trend',
  modes: ['trend', 'find', 'queue', 'watched'],
  refs: {
    body: document.querySelector('body'),
    rootHeader: document.querySelector('.header__container'),
    rootPagination: document.querySelector('[data-root="pagination"]'),
    rootDetails: document.querySelector('[data-modal]'),
    rootGallery: document.querySelector('.gallery'),
    rootControl: document.querySelector('.control-bar'),
    rootLibsMenu: document.querySelector('.library-menu'),
    btnsLibs: document.querySelectorAll('.library-menu__button'),
    rootMenu: document.querySelector('.navigation__menu'),
    menuLinks: document.querySelectorAll('.navigation__link'),
    refsLink: document.querySelectorAll('[data-action="go-page"]'),
    homeLink: document.querySelector('[data-page="home"]'),
    refSearchform: document.querySelector('[data-root="search-bar"]'),
    refLibsSelect: document.querySelector('[data-root="library-buttons"]'),
    refLoginHeader: document.querySelector('[data-root="header-login"]'),
    btnLogin: document.querySelector('[data-action="login-google"]'),
    btnLogout: document.querySelector('[data-action="logout"]'),
    rootErrors: document.querySelector('.errors-info'),
    authorsModalLink: document.querySelector('[data-action="authors-modal"]'),
  },
};
