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
