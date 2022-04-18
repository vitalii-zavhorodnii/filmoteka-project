import { store } from './store';

import './handlers/handleLink';
import './handlers/handleLibType';
import './handlers/handleLogin';
import './handlers/handleLogout';
import './handlers/handleSearch';
import './handlers/handleDetails';
import './handlers/handleBtnUp';
import './handlers/handleLanguage';
import './handlers/handleTrailer';
import './handlers/handleAuthorsModal';

import { fetchGenres } from './services/serviceMoviesAPI';

import { initHome } from './pages/home';
import { initLibrary } from './pages/library';
import { changeLanguage } from './utils/changeLanguage';

(async () => {
  const { menuLinks, homeLink } = store.refs;

  const lang = localStorage.getItem('language');

  if (lang && lang !== store.language) {
    store.language = lang;
    changeLanguage();
    store.refs.refLangSelector.value = lang;
  }

  const genres = await fetchGenres(store.language);
  store.genresList = genres;

  const initPage = localStorage.getItem('page');

  if (initPage) {
    if (initPage === 'home') initHome();
    if (initPage === 'library') initLibrary();

    menuLinks.forEach((link) => {
      if (link.getAttribute('data-page') === initPage)
        link.classList.add('active');
      else link.classList.remove('active');
    });
  } else {
    initHome();
    homeLink.classList.add('active');
  }
})();
