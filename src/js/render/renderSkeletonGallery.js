import { store } from "../store";

export const renderSkeletonGallery = () => {
  store.refs.rootGallery.innerHTML = `
    <li class="gallery-list__item card-sceleton skeleton">
      <div class="gallery-list__thumb image-sceleton">
        <img src="" alt="" />
      </div>
      <div class="gallery-list__content">
        <h2 class="galeery-list__title title-sceleton"></h2>
        <p class="gallery-list__text subtitle-sceleton"></p>
      </div>
    </li>
    <li class="gallery-list__item card-sceleton skeleton">
      <div class="gallery-list__thumb image-sceleton">
        <img src="" alt="" />
      </div>
      <div class="gallery-list__content">
        <h2 class="galeery-list__title title-sceleton"></h2>
        <p class="gallery-list__text subtitle-sceleton"></p>
      </div>
    </li>
    <li class="gallery-list__item card-sceleton skeleton">
      <div class="gallery-list__thumb image-sceleton">
        <img src="" alt="" />
      </div>
      <div class="gallery-list__content">
        <h2 class="galeery-list__title title-sceleton"></h2>
        <p class="gallery-list__text subtitle-sceleton"></p>
      </div>
    </li>
    <li class="gallery-list__item card-sceleton skeleton">
    <div class="gallery-list__thumb image-sceleton">
      <img src="" alt="" />
    </div>
    <div class="gallery-list__content">
      <h2 class="galeery-list__title title-sceleton"></h2>
      <p class="gallery-list__text subtitle-sceleton"></p>
    </div>
    </li>
    <li class="gallery-list__item card-sceleton skeleton">
      <div class="gallery-list__thumb image-sceleton">
        <img src="" alt="" />
      </div>
      <div class="gallery-list__content">
        <h2 class="galeery-list__title title-sceleton"></h2>
        <p class="gallery-list__text subtitle-sceleton"></p>
      </div>
    </li>
    <li class="gallery-list__item card-sceleton skeleton">
      <div class="gallery-list__thumb image-sceleton">
        <img src="" alt="" />
      </div>
      <div class="gallery-list__content">
        <h2 class="galeery-list__title title-sceleton"></h2>
        <p class="gallery-list__text subtitle-sceleton"></p>
      </div>
    </li>
  `;
};
