function generarCaptcha() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
  let captcha = "";
  for (let i = 0; i < 5; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
}

let captchaActual = generarCaptcha();
document.getElementById("captchaText").textContent = captchaActual;

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const captchaInput = document.getElementById("captchaInput").value.trim();
  const mensaje = document.getElementById("mensajeLogin");

  if (!usuario || !password || !captchaInput) {
    mensaje.textContent = "Completa todos los campos.";
    mensaje.className = "login-mensaje error";
    return;
  }

  if (captchaInput !== captchaActual) {
    mensaje.textContent = "Captcha incorrecto.";
    mensaje.className = "login-mensaje error";
    captchaActual = generarCaptcha();
    document.getElementById("captchaText").textContent = captchaActual;
    document.getElementById("captchaInput").value = "";
    return;
  }

  mensaje.textContent = `Bienvenido ${usuario}`;
  mensaje.className = "login-mensaje success";

  localStorage.setItem("usuarioLogueado", "true");
  localStorage.setItem("nombreUsuario", usuario);
  window.location.href = "privado.html";
  
});
