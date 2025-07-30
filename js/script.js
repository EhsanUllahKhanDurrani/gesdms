/*
  GES Dera Malla Sing School Website Script
  Handles mobile navigation toggling and gallery lightbox functionality. The
  code waits until the DOM has fully loaded before attaching event listeners.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    // Attach click event to each gallery image
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', () => {
        const largeSrc = img.dataset.large || img.src;
        lightboxImg.src = largeSrc;
        lightbox.classList.add('show');
      });
    });
    // Close lightbox on click anywhere
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('show');
    });
  }
});
