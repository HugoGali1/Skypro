document.addEventListener('DOMContentLoaded', () => {
    const productoSeleccionado = JSON.parse(localStorage.getItem('productoSeleccionado'));

    if (productoSeleccionado) {
        document.querySelector('.producto-nombre').textContent = productoSeleccionado.product;
        document.querySelector('.producto-precio').textContent = productoSeleccionado.price;
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Compra realizada con éxito. Gracias por su compra.');
        localStorage.removeItem('productoSeleccionado');
        window.location.href = 'index.html';
    });
});