/* Navbar */
const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animaton = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle('toggle');
  });

  nav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
};

navSlide();
/* Carousel */
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const timeOut = setTimeout('autoSlide', 1000)
console.log(slides);


document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide);
document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide);
  // Next on is to made carousel automaticly go to next slide...
function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}
 function autoSlide(){
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
  setTimeout(autoSlide, 5000);
 }
 
function moveToNextSlide() {
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
}
function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
  slides[slidePosition].classList.add('carousel-item-visible');
}
window.onload=autoSlide()