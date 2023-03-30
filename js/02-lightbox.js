import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryElem=document.querySelector(".gallery");
function createGalleryItem(items) {
    return items
        .map(({preview,original,description})=>{
            return `<div class="gallery__item">
                        <a class="gallery__link" href="#">
                            <img class="gallery__image"
                            src="${preview}"
                            data-original="${original}"
                            alt="${description}">
                        </a>
                    </div>`;
        })
        .join("");
    }
        const addGalleryItem = createGalleryItem(galleryItems);
        galleryElem.insertAdjacentHTML("beforeend", addGalleryItem);
        
var lightbox= new SimpleLightbox(".gallery .gallery__link",{
    captionPosition: "bottom",
    captionData:"alt",
    captionDelay:250,
    close:false,
    enableKeyboard:true,
});