document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const navLinks = [...document.querySelectorAll('.nav-menu a')];
  const sections = [...document.querySelectorAll('main section[id]')];

  const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 18);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  menuButton?.addEventListener('click', () => {
    const open = menu?.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menu?.classList.remove('active');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach((section) => sectionObserver.observe(section));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
