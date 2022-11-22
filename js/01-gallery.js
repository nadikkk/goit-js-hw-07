import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector ('.gallery');

const markupGallery = galleryItems
.map(({preview, original, description}) => {
 	return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join("");

gallery.insertAdjacentHTML("beforeend",markupGallery);

gallery.addEventListener('click', onModalImg);

function onModalImg(e) {
  e.preventDefault();
  if (!e.target.nodeName==="IMG") {
  return;
   }

   const instance = basicLightbox.create(
     ` <div class="modal"> <img src="${e.target.dataset.source}" alt="Big Pictures"/> </div> `,
   {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscape);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscape);
      },
   }
);
   instance.show();
   function onEscape(e) {
   if (e.key === "Escape") {
   instance.close();
   }
   }	
};


