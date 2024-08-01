// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#f4e8d8';
      navbar.style.color = '#333';
    } else {
      navbar.style.backgroundColor = '#333';
      navbar.style.color = '#f4e8d8';
    }
  });
  