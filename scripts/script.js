document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('open');

    // Cambiar el ícono visual
    toggle.textContent = toggle.classList.contains('open') ? '✕' : '☰';
  });
});


function activarAnimaciones() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-left, .animate-right, .animate-fade').forEach(el => {
    observer.observe(el);
  });
}

document.addEventListener('click', function (e) {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  const clickedInsideMenu = navLinks.contains(e.target);
  const clickedToggle = toggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navLinks.classList.remove('active');
    toggle.classList.remove('open');
  }
});
