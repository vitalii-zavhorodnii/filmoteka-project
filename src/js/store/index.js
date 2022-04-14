export const store = {
  user: null,
  genresList: [],
  page: 1,
  mode: "trend",
  modes: ["trend", "find", "queue", "watched"],
  refs: {
    rootHeader: document.querySelector(".header__container"),
    rootPagination: document.querySelector('[data-root="pagination"]'),
    rootDetails: document.querySelector("[data-modal]"),
    rootGallery: document.querySelector(".gallery"),
    rootControl: document.querySelector(".control-bar"),
    rootMenu: document.querySelector(".navigation__menu"),
    rootLibsMenu: document.querySelector(".library-menu"),
    btnsLibs: document.querySelectorAll(".library-menu__button"),
    refsLink: document.querySelectorAll("[data-action='go-page']"),
    refSearchform: document.querySelector('[data-root="search-bar"]'),
    refLibsSelect: document.querySelector('[data-root="library-buttons"]'),
    refLoginHeader: document.querySelector('[data-root="header-login"]'),
    btnLogin: document.querySelector('[data-action="login-google"]'),
    btnLogout: document.querySelector('[data-action="logout"]'),
  },
};

export const PAGE_STATE_KEY = 'pageState';
