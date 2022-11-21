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

gallery.addEventListener('click', onOpenModalImg);

function onOpenModalImg(e) {
	e.preventDefault();
	if (!e.target.nodeName==="IMG") {
		return;
	};
	document.addEventListener("keydown", () => {});
	
   const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${e.target.dataset.source}" width="1280">
    </div>`,
	  {
    onShow: (instance) => {
		instance.element().querySelector('img').onclick=instance.close
      document.removeEventListener("keydown",() => {});
    }
},)

// {
// 	onClose: (instance) => {
// 		if (e.key==="Escape"){instance.close};
// 		console.log(e.target.key);
// 		document.removeEventListener("keydown",onCloseModal)
		
// 	}}
// )
// function onCloseModal (e) {
// 	if (e.key==="Escape"){
// 		instance.close()}
		
// }

instance.show()
	};
