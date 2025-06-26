const destacadas = [
  {
    id: 1,
    titulo: "Convocatoria Maestría en Aplicaciones de Información Espacial",
    descripcion: "Postulate a la maestría en conjunto con la UNSAM.",
    imagen: "images2/maestria.png"
  },
  {
    id: 2,
    titulo: "Microsatélite ATENEA en misión Artemis II",
    descripcion: "Participación histórica de Argentina en misión tripulada de la NASA.",
    imagen: "images2/atenea.png"
  },
  {
    id: 5,
    titulo: "Calendario Institucional 2025 lanzado",
    descripcion: "Imágenes satelitales de las 23 provincias en un calendario único.",
    imagen: "images2/calendario_2025.png"
  }
];

let index = 0;

function mostrarSlide(i) {
  const noticia = destacadas[i];
  const slide = document.getElementById('slide');

  // Cargar contenido
  document.getElementById('carrusel-titulo').textContent = noticia.titulo;
  document.getElementById('carrusel-descripcion').textContent = noticia.descripcion;
  document.getElementById('carrusel-boton').href = `noticia.html?id=${noticia.id}`;

  // Cambiar imagen de fondo
  slide.style.backgroundImage = `url('${noticia.imagen}')`;
}

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + destacadas.length) % destacadas.length;
  mostrarSlide(index);
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % destacadas.length;
  mostrarSlide(index);
});

// Auto-rotación
setInterval(() => {
  index = (index + 1) % destacadas.length;
  mostrarSlide(index);
}, 7000);

// Inicializar
mostrarSlide(index);
