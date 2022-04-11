import { store } from "../store";
import { closeDetails } from "../handlers/handleDetails";
import {
  renderWatchButton,
  renderQueueButton,
  renderLoginButton,
} from "./renderDetailsButtons";
import { checkToken } from "../utils/checkToken";

import iconCloseButton from "../../assets/icons/close.svg";

export const renderDetails = (movie) => {
  const { rootDetails } = store.refs;
  const {
    original_title,
    popularity,
    overview,
    vote_average,
    vote_count,
    genres,
    poster_path,
  } = movie;

  const markup = `
    <div class="details-popup">
      <button class="details-popup__close-btn" type="button" data-modal-close data-action="close-modal">
        <img 
          class="details-popup__close-icon"
          src=${iconCloseButton}
          alt="close"
          data-action="close-modal"
        </img>  
      </button>

      <img 
        src="https://themoviedb.org/t/p/w440_and_h660_face${poster_path}" 
        alt="${original_title}" 
        class="details-popup__preview" 
      />

      <div class="details-popup__info">
        <div class="movie-wrapper">
          <p class="modal__title">${original_title}</p>
          <table class="modal-table">
            <tr class="modal-table__row">
              <td class="modal-table__title">Vote / Votes</td>
              <td class="modal-table__desc">
                <span class="modal-table__vote">${vote_average}</span> /
                <span class="modal-table__votes">${vote_count}</span>
              </td>
            </tr>
            <tr class="modal-table__row">
              <td class="modal-table__title">Popularity</td>
              <td class="modal-table__desc">${popularity}</td>
            </tr>
            <tr class="modal-table__row">
              <td class="modal-table__title">Original Title</td>
              <td class="modal-table__desc">${original_title}</td>
            </tr>
            <tr class="modal-table__row">
              <td class="modal-table__title">Genre</td>
              <td class="modal-table__desc">${genres.map(
                (genre) => " " + genre.name
              )}</td>
            </tr>
          </table>
          <p class="modal__subtitle">About</p>
          <p class="modal__desc">
            ${overview}
          </p>
        </div>

        <ul class="details-popup__menu">
          <li class="details-popup__menu_item" data-root="watched">
          
          </li>
          <li class="details-popup__menu_item" data-root="queue">

          </li>
        </ul>
      </div>
    </div>
  `;

  rootDetails.innerHTML = markup;

  if (checkToken()) {
    renderWatchButton(movie);
    renderQueueButton(movie);
  } else {
    renderLoginButton(movie);
  }

  document
    .querySelector("[data-modal-close]")
    .addEventListener("click", closeDetails);
};
