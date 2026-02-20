// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger) {
    hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
  }
  if (mobileClose) {
    mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // Scroll to top button
  const scrollBtn = document.querySelector('.scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
