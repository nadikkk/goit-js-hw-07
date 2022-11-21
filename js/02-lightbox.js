import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector ('.gallery');

const markupGallery = galleryItems
.map(({preview, original, description}) => {
 	return `<a class="gallery__item" href="${original}">
	 <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`
}).join("");

gallery.insertAdjacentHTML("beforeend",markupGallery);

let lightbox = new SimpleLightbox('.gallery a',{
	captionsData: "alt",
	captionDelay: 250,
});

