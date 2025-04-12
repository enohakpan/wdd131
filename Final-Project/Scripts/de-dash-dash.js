// Existing slideshow code
let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startAutoSlide();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide-show");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 15000); // 15 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

const slider = document.querySelector('.collections-slide');
if (slider) {
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);
}

// Add hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      
      mainNav.classList.toggle('active');
      
      body.classList.toggle('menu-open');
    });
    
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  }
  
  // Shop page functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Item added to cart!');
      });
    });
  }
});

document.body.style.overflow = 'auto';