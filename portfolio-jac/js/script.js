
// Accordian
function toggleCollapse(element) {
    let content = element.querySelector('.collapse-content');
    let icon = element.querySelector('.plus-icon');
    let heading = element.querySelector('.specialty-title');

    // Toggle active class
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.innerText = "-";
        heading.classList.add('active');
    } else {
        content.style.display = "none";
        icon.innerText = "+";
        heading.classList.remove('active');
    }
}

// Sidebar Auto & Scroll Slider

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentSection = 0;
    let autoSlideInterval;
    let isScrolling = false;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'flex' : 'none';
        });
        navLinks.forEach((link, i) => {
            link.classList.toggle('active', i === index);
        });
    }

    function nextSection() {
        currentSection = (currentSection + 1) % sections.length;
        showSection(currentSection);
        smoothScroll(currentSection);
    }

    function prevSection() {
        currentSection = (currentSection - 1 + sections.length) % sections.length;
        showSection(currentSection);
        smoothScroll(currentSection);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSection, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function smoothScroll(targetIndex) {
        sections[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'start', inline:'start' });
    }

    // Handle navigation click
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            stopAutoSlide();
            currentSection = index;
            showSection(currentSection);
            smoothScroll(currentSection);
            startAutoSlide();
        });
    });

    showSection(currentSection);
    startAutoSlide();

    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// JavaScript for Slider Navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

// Toggle-top Menu
  
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggle-btn");
    const sidebar = document.getElementById("sidebar");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        toggleBtn.classList.toggle("active");
    });
});