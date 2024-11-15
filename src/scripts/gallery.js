const image = document.querySelectorAll('#imageContainer img');
const body = document.querySelector('body');
const modal = document.querySelector('#modal');
const galleryInterface = document.querySelector('#interface');
const previewContainer = document.querySelector('#previewContainer');
const background = document.querySelector('#background');
const closeIcon = document.querySelector('#closeIcon');
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');
let startX = 0;
let imageIndex = 0;

// Handles Touch Events / Swipe Functionality
const handleTouchStart = function (e) {
    startX = e.touches[0].clientX;
};

const handleTouchEnd = function (e) {
    const endX = e.changedTouches[0].clientX;
    const distance = endX - startX;
    if (distance > 50) {
        showPreviousImage();
    } else if (distance < -50) {
        showNextImage();
    }
};
const handleKeys = function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeInterface();
        } else if (
            e.key === 'ArrowRight' &&
            !modal.classList.contains('hidden')
        ) {
            showNextImage();
        } else if (
            e.key === 'ArrowLeft' &&
            !modal.classList.contains('hidden')
        ) {
            showPreviousImage();
        }
    }

const showNextImage = function () {
    if (imageIndex < 10) {
        imageIndex++;
        const previewImage = document.getElementById('previewImage');
        previewImage.src = `/Gallery_${imageIndex}_preview.jpg`;
        const previewWebp = document.getElementById('previewWebp');
        previewWebp.srcset = `/Gallery_${imageIndex}_preview.webp`;
    }
};

const showPreviousImage = function () {
    if (imageIndex > 1) {
        imageIndex--;
        const previewImage = document.getElementById('previewImage');
        previewImage.src = `/Gallery_${imageIndex}_preview.jpg`;
        const previewWebp = document.getElementById('previewWebp');
        previewWebp.srcset = `/Gallery_${imageIndex}_preview.webp`;
    }
};

const closeInterface = function () {
    modal.classList.add('hidden');
    galleryInterface.classList.add('hidden');
    body.classList.remove('stop-scrolling');
    document.getElementById('picture').remove();
    // Remove Event Listeners
    arrowLeft.removeEventListener('click', showPreviousImage);
    arrowRight.removeEventListener('click', showNextImage);
    document.removeEventListener('keydown', handleKeys);
    closeIcon.removeEventListener('click', closeInterface);
    background.removeEventListener('click', closeInterface);
};

// Add Lazy Loading
const openModal = function (e) {
    // Add Modal Window and Interface
    body.classList.add('stop-scrolling');
    modal.classList.remove('hidden');
    galleryInterface.classList.remove('hidden');
    // Add Image To The interface
    const data = this.getAttribute('data-name');
    imageIndex = this.getAttribute('data-index');
    const picture = document.createElement('picture');
    picture.id = 'picture';
    galleryInterface.appendChild(picture);
    const source = document.createElement('source');
    source.srcset = `/${data}_preview.webp`;
    source.type = 'image/webp';
    source.id = 'previewWebp';
    picture.appendChild(source);
    const previewImage = document.createElement('img');
    previewImage.src = `/${data}_preview.jpg`;
    previewImage.id = 'previewImage';
    previewImage.alt = `${data}`;
    picture.loading = 'lazy'
    previewImage.classList.add(
        'absolute',
        'max-w-[85%]',
        'max-h-[80%]',
        'left-1/2',
        'translate-x-[-50%]',
        'top-1/2',
        'translate-y-[-50%]',
    );
    picture.appendChild(previewImage);
    // Touch Events
    previewImage.addEventListener('touchstart', handleTouchStart);
    previewImage.addEventListener('touchend', handleTouchEnd);
    // Click Events
    arrowLeft.addEventListener('click', showPreviousImage);
    arrowRight.addEventListener('click', showNextImage);
    // Key Events
    document.addEventListener('keydown', handleKeys);
    // Event Listener That Remove The Interface
    closeIcon.addEventListener('click', closeInterface);
    background.addEventListener('click', closeInterface);
};

image.forEach((i) => {
    i.addEventListener('click', openModal);
});
