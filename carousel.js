const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide .community-item");

let slideIndex = 0;

function showNextSlide() {
  carouselImages[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % carouselImages.length;
  carouselImages[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 3000);
