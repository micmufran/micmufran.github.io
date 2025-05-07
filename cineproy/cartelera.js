// Filtrar películas por el nombre al escribir en el buscador
function filtrarPeliculas() {
    const inputBusqueda = document.getElementById("input-busqueda").value.toLowerCase();
    const peliculasGrid = document.getElementById("peliculas-grid");
    const peliculas = peliculasGrid.getElementsByClassName("pelicula-card");

    for (let i = 0; i < peliculas.length; i++) {
        const titulo = peliculas[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (titulo.includes(inputBusqueda)) {
            peliculas[i].style.display = "";
        } else {
            peliculas[i].style.display = "none";
        }
    }
}
function verMas(btn) {
    // Encuentra la tarjeta de película que contiene el botón
    const tarjeta = btn.closest('.pelicula-card');
    
    // Alternar la clase 'expanded' para mostrar/ocultar detalles
    tarjeta.classList.toggle('expanded');
    
    // Cambiar el texto del botón según el estado
    const textoBoton = tarjeta.classList.contains('expanded') ? '🎬 Ver menos' : '🎬 Ver más';
    btn.textContent = textoBoton;
}


// Función para expandir/cerrar la tarjeta de la película
const verMasButtons = document.querySelectorAll(".btn-mini");

verMasButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const card = button.closest(".pelicula-card");
        const overlay = card.querySelector(".card-overlay");

        // Cambiar el estilo de la tarjeta para mostrar más información
        overlay.classList.toggle("expanded");
        
        // Cambiar el texto del botón
        if (overlay.classList.contains("expanded")) {
            button.innerText = "🎬 Ver menos";
        } else {
            button.innerText = "🎬 Ver más";
        }
    });
});
