document.addEventListener('DOMContentLoaded', function() {
    const menusDesplegables = document.querySelectorAll('.menu-desplegable');

    menusDesplegables.forEach(menuDesplegable => {
        const botonDesplegable = menuDesplegable.querySelector('.boton-desplegable');

        botonDesplegable.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();

            menusDesplegables.forEach(otroMenuDesplegable => {
                if (otroMenuDesplegable !== menuDesplegable && otroMenuDesplegable.classList.contains('active')) {
                    otroMenuDesplegable.classList.remove('active');
                }
            });

            menuDesplegable.classList.toggle('active');
        });
    });

    document.addEventListener('click', function(event) {
        menusDesplegables.forEach(menuDesplegable => {
            if (menuDesplegable.classList.contains('active')) {
                menuDesplegable.classList.remove('active');
            }
        });
    });
});
