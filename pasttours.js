// Mobile Navbar toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-center');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Mobile dropdown toggle for "Tours"
const dropdownLinks = document.querySelectorAll('nav ul.nav-center li.dropdown > a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Only prevent default on mobile devices
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Carousel functionality for multiple tours
document.querySelectorAll('.tour-card').forEach(card => {
  const slides = card.querySelectorAll('.carousel-slide');
  const prev = card.querySelector('.prev');
  const next = card.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.remove('active'));
    slides[i].classList.add('active');
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  // Optional: auto-slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
});
