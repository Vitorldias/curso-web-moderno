let slider = document.querySelector('.slider');
let sliderImages = document.querySelectorAll('.slider img');
let currentSlide = 1;
let slideWidth = sliderImages[0].clientWidth;
let interval = setInterval(slideNext, 5000);

function slideNext() {
  if (currentSlide >= sliderImages.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

function slidePrev() {
  if (currentSlide <= 0) {
    currentSlide = sliderImages.length - 1;
  } else {
    currentSlide--;
  }
  slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

let sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mouseover', () => {
  clearInterval(interval);
});

sliderContainer.addEventListener('mouseout', () => {
  interval = setInterval(slideNext, 5000);
});