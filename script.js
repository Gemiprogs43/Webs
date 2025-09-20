const slidesContainer = document.querySelector('.slide-img .slides-container');
const slides = document.querySelectorAll('.slide-img .swiper');
let currentIndex = 0;

function showSlide(index) {
 
  const translateXPercent = -index * 100;
  slidesContainer.style.transform = `translateX(${translateXPercent}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}


showSlide(currentIndex);


setInterval(nextSlide, 3000);
