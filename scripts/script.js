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
/*
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (!toggle || !nav) return;

  // Toggle menú hamburguesa
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('open');

    // Cambiar ícono visual
    toggle.textContent = toggle.classList.contains('open') ? '✕' : '☰';
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.classList.remove('open');
      toggle.textContent = '☰';
    });
  });

  // Activar animaciones al entrar en viewport
  activarAnimaciones();
});

// Cerrar menú si se hace clic fuera
document.addEventListener('click', function (e) {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  const clickedInsideMenu = navLinks.contains(e.target);
  const clickedToggle = toggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navLinks.classList.remove('active');
    toggle.classList.remove('open');
    toggle.textContent = '☰';
  }
});

// Animaciones con IntersectionObserver
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
}*/