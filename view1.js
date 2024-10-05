const imageContainer = document.querySelector('.image-container');
const leftButton = document.getElementById('left-button');
const rightButton = document.getElementById('right-button');

leftButton.addEventListener('click', () => {
  imageContainer.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
});

rightButton.addEventListener('click', () => {
  imageContainer.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
});