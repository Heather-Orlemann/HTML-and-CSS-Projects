// Select all gallery images and store them in a variable
const galleryImages = document.querySelectorAll('#gallery .photo img');
// Select the lightbox container and store it in a variable
const lightbox = document.querySelector('.lightbox');
// Select the lightbox image and store it in a variable
const lightboxImage = document.querySelector('.lightbox-img');
// Select the close button and store it in a variable
const closeButton = document.querySelector('.close');

// Loop through each image in the gallery and add a click event listener
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        // Set the lightbox image's src and alt attributes to the clicked image's src and alt attributes
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        // Display the lightbox
        lightbox.style.display = 'flex';
    });
});

// Add a click event listener to the close button to close the lightbox
closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Select the left arrow button and store it in a variable
const leftArrow = document.querySelector('.left-arrow');
// Select the right arrow button and store it in a variable
const rightArrow = document.querySelector('.right-arrow');
// Declare a variable to store the current image index
let currentImageIndex;

// Function to update the lightbox image's src and alt attributes and set the current image index
function updateLightboxImage(index) {
    lightboxImage.src = galleryImages[index].src;
    lightboxImage.alt = galleryImages[index].alt;
    currentImageIndex = index;
}

// Loop through each image in the gallery and add a click event listener
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        // Call the updateLightboxImage function and display the lightbox
        updateLightboxImage(index);
        lightbox.style.display = 'flex';
    });
});

// Add a click event listener to the left arrow button to navigate to the previous image
leftArrow.addEventListener('click', () => {
    // Calculate the previous image index, accounting for the beginning of the gallery
    let prevImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    // Call the updateLightboxImage function with the previous image index
    updateLightboxImage(prevImageIndex);
});

// Add a click event listener to the right arrow button to navigate to the next image
rightArrow.addEventListener('click', () => {
    // Calculate the next image index, accounting for the end of the gallery
    let nextImageIndex = (currentImageIndex + 1) % galleryImages.length;
    // Call the updateLightboxImage function with the next image index
    updateLightboxImage(nextImageIndex);
});
