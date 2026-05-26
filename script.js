/* ── Praveen Sweet House – Site Scripts ── */

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Sticky nav background on scroll
const nav = document.getElementById('nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile nav toggle
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');
const navIcon    = document.getElementById('navIcon');

if (navToggle && navLinks && navIcon) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
    navIcon.className = expanded ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navIcon.className = 'fa-solid fa-bars';
    });
  });
}

// Scroll reveal with stagger for grid children
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay for siblings in a grid
        const siblings = Array.from(
          entry.target.parentElement.querySelectorAll('.reveal:not(.show)')
        );
        const delay = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.max(0, delay) * 80}ms`;
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));