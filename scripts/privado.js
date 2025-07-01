// Verificar si el usuario está logueado
if (localStorage.getItem("usuarioLogueado") !== "true") {
  alert("Acceso denegado. Debes iniciar sesión.");
  window.location.href = "login.html";
} else {
  // Mostrar el saludo personalizado
  const nombre = localStorage.getItem("nombreUsuario");
  document.getElementById("saludoUsuario").textContent = ` Hola, ${nombre}`;
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioLogueado");
  localStorage.removeItem("nombreUsuario");
  window.location.href = "index.html";
}


document.getElementById("formInterno").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensajeInterno").textContent = "✅ Novedad registrada correctamente.";
  this.reset();
});

