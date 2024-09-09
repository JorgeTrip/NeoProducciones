document.addEventListener('DOMContentLoaded', function() {
  // Función para actualizar el año en el copyright
  function updateCopyrightYear() {
      const year = new Date().getFullYear();
      const currentYearElement = document.getElementById("currentYear");
      if (currentYearElement) {
          currentYearElement.textContent = year;
      }
  }

  // Función para actualizar la trayectoria en el subtítulo del carrusel
  function updateTrayectoria() {
      const year = new Date().getFullYear();
      const trayectoria = year - 2006;
      const subtituloElement = document.getElementById("subtitulo");
      if (subtituloElement) {
          subtituloElement.innerHTML = `<a href="acerca.html">Una trayectoria de ${trayectoria} años nos avala.</a>`;
      }
  }

  // Ejecutar las funciones
  updateCopyrightYear();
  updateTrayectoria();
});

// Mantener la funcionalidad existente para limpiar formularios (sacado de Formspree)
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
      form.reset();
  }
}
