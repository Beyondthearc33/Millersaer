const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const images = document.querySelectorAll('.gallery-image');

let imageIndex = 0;

console.log(images[0].getAttribute('src'));
setListeners();

function setListeners() {
    const nextImageBtn = document.querySelector('#rightBtn');
    const previousImageBtn = document.querySelector('#leftBtn');
    const closeBtn = document.querySelector('#closeBtn');

    nextImageBtn.addEventListener('click', fetchNextImage);
    previousImageBtn.addEventListener('click', fetchPreviousImage);
    closeBtn.addEventListener('click', closeLightbox);

    let indexToSet = 0; 

    images.forEach(image => {
        image.setAttribute('index', indexToSet);
        image.addEventListener('click', () => {
            openLightbox(image);
        });
        indexToSet++
    });

}

function fetchNextImage() {
    if(imageIndex == images.length - 1){
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    setLightboxImageByIndex();
    console.log('Getting next image. . . ');
}

function fetchPreviousImage() {
    if(imageIndex == 0) 
        imageIndex = 11;
    else
        imageIndex--;

    setLightboxImageByIndex();
    console.log('Getting previous image. . . ');


}

function openLightbox(image) {
    imageIndex = image.getAttribute('index');
    console.log("trying to open lightbox at index " + imageIndex);
    lightbox.setAttribute("style", "  visibility: visible;");
    lightbox.setAttribute('index', imageIndex);
    setLightboxImageByIndex();
 };

 function closeLightbox() {
    lightbox.setAttribute("style", "visibility: hidden;");
    imageIndex = 0;
 }

 function setLightboxImageByIndex() {
    let src = images[imageIndex].getAttribute('src');
    lightboxImage.setAttribute('src', src);
 }

