function abrirModal(titulo, descripcion, link, imgURL, frase) {
  document.getElementById("modal-titulo").textContent = titulo;
  document.getElementById("modal-descripcion").textContent = descripcion;
  document.getElementById("modal-link").href = link;
  document.getElementById("modal-preview").src = imgURL;
  document.getElementById("modal-frase").textContent = frase;
  document.getElementById("modal-servicio").classList.add("active");
  document.body.classList.add("modal-open");
}

function cerrarModal() {
  const modal = document.getElementById("modal-servicio");
  modal.classList.add("closing");

  setTimeout(() => {
    modal.classList.remove("active", "closing");
    document.body.classList.remove("modal-open");
  }, 300);
}

// ✅ Esta función se llama después del fetch
function inicializarModalEventos() {
  const modal = document.getElementById("modal-servicio");
  const closeBtn = document.querySelector(".modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", cerrarModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) cerrarModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") cerrarModal();
  });

  let startY = 0;
  let endY = 0;

  modal.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  modal.addEventListener("touchmove", (e) => {
    endY = e.touches[0].clientY;
  });

  modal.addEventListener("touchend", () => {
    const swipeDistance = endY - startY;
    if (swipeDistance > 80) cerrarModal();
    startY = 0;
    endY = 0;
  });
}