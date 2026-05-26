const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
const reveals = document.querySelectorAll('.reveal');
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((section) => observer.observe(section));