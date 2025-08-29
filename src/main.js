document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validación de nombre: al menos dos palabras, cada una con 2+ letras
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,}\s+[A-Za-zÁÉÍÓÚáéíóúÑñ]{2,}$/.test(nombre);

    if (!nombreValido) {
      e.preventDefault();
      alert("Por favor ingresa un nombre y apellido válido.");
      return;
    }

    // Validación de correo con regex
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!correoValido) {
      e.preventDefault();
      alert("Por favor ingresa un correo válido.");
      return;
    }

    // Validación de mensaje: mínimo 10 caracteres
    if (mensaje.length < 10) {
      e.preventDefault();
      alert("El mensaje debe tener al menos 10 caracteres.");
      return;
    }
  });
});
