// Espera a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    const seats = document.querySelectorAll('.seat');  // Selecciona todos los botones de asientos
    const selectedSeatsDisplay = document.getElementById('selected-seats'); // Selecciona el lugar donde mostrar los asientos seleccionados
    let selectedSeats = []; // Array para almacenar los asientos seleccionados
  
    // Recorre todos los asientos y agrega el evento de click
    seats.forEach(seat => {
      seat.addEventListener('click', function () {
        // Si el asiento ya está seleccionado, lo desmarcamos
        if (this.classList.contains('selected')) {
          this.classList.remove('selected');
          selectedSeats = selectedSeats.filter(seat => seat !== this.dataset.seat);  // Elimina el asiento del array
        } else {
          // Si el asiento no está seleccionado, lo marcamos como seleccionado
          this.classList.add('selected');
          selectedSeats.push(this.dataset.seat);  // Agrega el asiento al array
        }
  
        // Actualiza el texto que muestra los asientos seleccionados
        selectedSeatsDisplay.textContent = `Asientos seleccionados: ${selectedSeats.join(', ')}`;
      });
    });
  });
  