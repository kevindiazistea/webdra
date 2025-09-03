function abrirModalReel(titulo, descripcion, reelURL) {
  const modal = document.getElementById("modal-servicio");
  document.getElementById("modal-titulo").textContent = titulo;
  document.getElementById("modal-descripcion").textContent = descripcion;
  document.getElementById("modal-link").href = reelURL;

  // Cargar el embed dinámicamente
  const embedHTML = `
    <blockquote class="instagram-media" data-instgrm-permalink="${reelURL}" data-instgrm-version="14" style="width:100%; margin:0 auto;">
    </blockquote>
  `;
  document.getElementById("modal-reel").innerHTML = embedHTML;

  modal.classList.add("active");

  // Reprocesar el embed
  if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
}