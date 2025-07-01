document.getElementById("form-avanzado").addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.toLowerCase();
  const categoria = document.getElementById("categoria").value.toLowerCase();
  const fecha = document.getElementById("fecha").value.toLowerCase();
  const autor = document.getElementById("autor").value.toLowerCase();
  const descripcion = document.getElementById("descripcion").value.toLowerCase();

  fetch("noticias.json")
    .then(res => res.json())
    .then(data => {
      const filtradas = data.filter(noticia => {
        return (
          (!titulo || noticia.titulo.toLowerCase().includes(titulo)) &&
          (!categoria || (noticia.categoria || "").toLowerCase().includes(categoria)) &&
          (!fecha || (noticia.fecha || "").toLowerCase().includes(fecha)) &&
          (!autor || (noticia.autor || "").toLowerCase().includes(autor)) &&
          (!descripcion || (noticia.descripcion || "").toLowerCase().includes(descripcion))
        );
      });

      mostrarResultados(filtradas);
    });
});

function mostrarResultados(noticias) {
  const contenedor = document.getElementById("resultados-avanzados");
  contenedor.innerHTML = "";

  if (noticias.length === 0) {
    contenedor.innerHTML = "<p style='color: white;'>No se encontraron resultados.</p>";
    return;
  }

  noticias.forEach(noticia => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${noticia.imagen}" alt="${noticia.titulo}">
      <h4>${noticia.titulo}</h4>
      <p>${noticia.descripcion}</p>
      <a href="noticia.html?id=${noticia.id}" class="btn-primary">Ver más</a>
    `;
    contenedor.appendChild(div);
  });
}


document.getElementById("btn-volver").addEventListener("click", function () {
  window.location.href = "noticias.html";
});
