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

// Registration form submit
const form = document.getElementById('registrationForm');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent actual submission

  // Validate all fields
  const name = form.name.value.trim();
  const password = form.password.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const dob = form.dob.value;
  const gender = form.gender.value;
  const address = form.address.value.trim();

  if (!name || !password || !phone || !email || !dob || !gender || !address) {
    alert("Please fill all fields!");
    return;
  }

  // Age validation (18+)
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 18) {
    alert("You must be 18 years or older to register.");
    return;
  }

  // Success message
  alert("Your data has been added successfully!");

  form.reset();
});
