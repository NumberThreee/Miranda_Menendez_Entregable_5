document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("nuevoUsuario").value.trim();
  const pass1 = document.getElementById("nuevoPassword").value.trim();
  const pass2 = document.getElementById("confirmarPassword").value.trim();
  const mensaje = document.getElementById("mensajeRegistro");

  if (!user || !pass1 || !pass2) {
    mensaje.textContent = "Completá todos los campos.";
    mensaje.className = "login-mensaje error";
    return;
  }

  if (pass1 !== pass2) {
    mensaje.textContent = "Las contraseñas no coinciden.";
    mensaje.className = "login-mensaje error";
    return;
  }

  mensaje.textContent = "Cuenta creada con éxito (simulado). Ahora podés iniciar sesión.";
  mensaje.className = "login-mensaje success";
});
