const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

fetch('noticias.json')
  .then(res => res.json())
  .then(data => {
    const noticia = data.find(n => n.id === id);
    if (noticia) {
      document.getElementById('titulo').textContent = noticia.titulo;
      document.getElementById('imagen').src = noticia.imagen;
      document.getElementById('contenido').textContent = noticia.contenido;
    } else {
      document.body.innerHTML = "<p style='text-align:center;'>Noticia no encontrada</p>";
    }
  });
