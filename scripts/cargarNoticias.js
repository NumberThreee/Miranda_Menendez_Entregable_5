fetch('noticias.json')
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById('contenedor-noticias');
    data.forEach(noticia => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${noticia.imagen}" alt="${noticia.titulo}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px;">
        <h4 style="margin-top: 10px;">${noticia.titulo}</h4>
        <p>${noticia.descripcion}</p>
        <a href="noticia.html?id=${noticia.id}" class="btn-primary" style="margin-top: 10px; display: inline-block;">Ver más</a>
      `;
      contenedor.appendChild(div);
    });
  });

  function filtrarNoticias() {
  const filtro = document.getElementById("buscador").value.toLowerCase();
  const tarjetas = document.querySelectorAll("#contenedor-noticias > div");

  tarjetas.forEach((tarjeta) => {
    const titulo = tarjeta.querySelector("h4").textContent.toLowerCase();
    const descripcion = tarjeta.querySelector("p").textContent.toLowerCase();

    if (titulo.includes(filtro) || descripcion.includes(filtro)) {
      tarjeta.style.display = "block";
    } else {
      tarjeta.style.display = "none";
    }
  });
}

function debounce(func, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

const buscador = document.getElementById("buscador");
buscador.addEventListener("input", debounce(filtrarNoticias, 300));

