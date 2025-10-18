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
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});

// Toggle show/hide password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

// Login form submit
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = loginForm.username.value.trim();
  const password = loginForm.password.value.trim();
  const tc = loginForm.tc.checked;

  if (!username || !password) {
    alert("Please enter Username and Password.");
    return;
  }

  if (!tc) {
    alert("You must accept the Terms & Conditions.");
    return;
  }

  // Simulate login
  alert("Login successful!");
  loginForm.reset();
});
