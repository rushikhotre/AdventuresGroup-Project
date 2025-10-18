// Mobile Navbar toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-center');
hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

// Mobile dropdown toggle
const dropdownLinks = document.querySelectorAll('nav ul.nav-center li.dropdown > a');
dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
