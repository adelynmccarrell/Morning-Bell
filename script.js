const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach((link) => {
  const currentPath = window.location.pathname.split('/').pop();
  const linkPath = link.getAttribute('href');

  if (currentPath === linkPath) {
    link.classList.add('active');
  }
});

const yearNode = document.querySelector('[data-current-year]');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
